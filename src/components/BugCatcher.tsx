import { useEffect, useRef, useState, Component, ReactNode } from 'react';

interface BugReport {
  id: number;
  type: 'error' | 'warning';
  message: string;
  suggestion: string;
  location?: string;
}

interface BugCatcherProps {
  children: ReactNode;
  watchValues?: Record<string, any>;
  componentName?: string;
}

let bugId = 0;

export default function BugCatcher({ children, watchValues = {}, componentName = 'Component' }: BugCatcherProps) {
  const [bugs, setBugs] = useState<BugReport[]>([]);
  const renderCount = useRef(0);
  const lastRenderTime = useRef(Date.now());
  const prevValues = useRef(watchValues);
  const reportedBugs = useRef(new Set<string>());

  const addBug = (type: BugReport['type'], message: string, suggestion: string) => {
    const key = `${message}-${suggestion}`;
    if (reportedBugs.current.has(key)) return; // Don't report same bug twice
    
    reportedBugs.current.add(key);
    setBugs(prev => [...prev, {
      id: bugId++,
      type,
      message,
      suggestion,
      location: componentName
    }]);
  };

  // Check 1: Infinite loop detection (renders too fast)
  useEffect(() => {
    renderCount.current += 1;
    const now = Date.now();
    const timeSinceLastRender = now - lastRenderTime.current;
    
    if (renderCount.current > 5 && timeSinceLastRender < 100) {
      addBug('error', 
        `🔥 INFINITE LOOP DETECTED: ${renderCount.current} renders in ${timeSinceLastRender}ms`,
        `Check for setState in useEffect without proper deps, or creating new objects/functions on every render.`
      );
    }
    
    lastRenderTime.current = now;
  });

  // Check 2: Value changes too frequently (possible effect issues)
  useEffect(() => {
    let rapidChanges = 0;
    
    Object.entries(watchValues).forEach(([key, value]) => {
      const prev = prevValues.current[key];
      const prevStr = JSON.stringify(prev);
      const currStr = JSON.stringify(value);
      
      if (prevStr !== currStr) {
        rapidChanges++;
      }
    });

    if (rapidChanges > 3) {
      addBug('warning',
        `⚡ ${rapidChanges} values changed rapidly`,
        `Consider using useMemo for expensive calculations or check useEffect dependencies.`
      );
    }

    prevValues.current = watchValues;
  }, [watchValues]);

  // Check 3: Detect empty filter result (missing return in filter)
  useEffect(() => {
    const filteredCards = watchValues.filteredCards;
    const allCardsCount = watchValues.allCardsCount;
    
    // If filteredCards is empty array but we have cards to filter, likely missing return
    if (Array.isArray(filteredCards) && filteredCards.length === 0 && allCardsCount > 0) {
      addBug('error',
        `🔥 FILTER RETURNING EMPTY`,
        `Your .filter() has no return statement! Arrow functions with {} need 'return'. Change (x) => { x } to (x) => x or add return.`
      );
    }
  }, [watchValues]);

  if (bugs.length === 0) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      
      {/* Bug Overlay */}
      <div className="fixed top-4 right-4 max-w-md z-[9999] space-y-2">
        {bugs.map((bug) => (
          <div
            key={bug.id}
            className={`p-4 rounded-lg shadow-xl border-l-4 animate-pulse ${
              bug.type === 'error' 
                ? 'bg-red-900/90 border-red-500 text-red-100' 
                : 'bg-yellow-900/90 border-yellow-500 text-yellow-100'
            }`}
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">
                {bug.type === 'error' ? '🐛' : '⚠️'}
              </span>
              <div className="flex-1">
                <div className="font-bold text-sm mb-1">
                  {bug.type === 'error' ? 'BUG FOUND' : 'WARNING'}
                </div>
                <div className="text-sm mb-2">{bug.message}</div>
                <div className="text-xs opacity-80 bg-black/20 p-2 rounded">
                  <span className="font-semibold">Fix: </span>
                  {bug.suggestion}
                </div>
                {bug.location && (
                  <div className="text-xs mt-1 opacity-60">
                    in {bug.location}
                  </div>
                )}
              </div>
              <button
                onClick={() => setBugs(prev => prev.filter(b => b.id !== bug.id))}
                className="text-white/60 hover:text-white"
              >
                ×
              </button>
            </div>
          </div>
        ))}
        
        <button
          onClick={() => {
            setBugs([]);
            reportedBugs.current.clear();
          }}
          className="w-full py-2 bg-gray-800/90 text-gray-300 rounded text-xs hover:bg-gray-700"
        >
          Clear All Warnings
        </button>
      </div>
    </>
  );
}

// Hook to detect specific function mistakes
export function useDetectMistakes<T extends (...args: any[]) => any>(
  fn: T, 
  fnName: string,
  checkResult?: (result: ReturnType<T>) => boolean,
  warningMessage?: string
): T {
  return ((...args: any[]) => {
    const result = fn(...args);
    
    // Check if result is suspicious
    if (checkResult && checkResult(result)) {
      console.warn(`[BugCatcher] ${fnName} returned suspicious value:`, result);
      console.warn(warningMessage || 'Check your function logic');
    }
    
    return result;
  }) as T;
}

// Helper to validate filter has return
export function validateFilter<T>(
  array: T[], 
  predicate: (item: T) => boolean,
  arrayName: string = 'array'
): T[] {
  const result = array.filter(predicate);
  
  // If all items were filtered out, warn about possible missing return
  if (result.length === 0 && array.length > 0) {
    console.warn(`[BugCatcher] ${arrayName}.filter() returned empty array. Did you forget 'return' in your arrow function?`);
  }
  
  return result;
}
