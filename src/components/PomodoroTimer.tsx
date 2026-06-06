import { useState, useRef, useEffect } from "react";

const WORK_TIME = 25 * 60; // 25 minutes
const BREAK_TIME = 5 * 60;




function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const incrementCompleted = createCounter();


export default function PomodoroTimer() {
  const [time, setTime] = useState(WORK_TIME);
  const [state, setState] = useState<"start" | "pause" | "reset" | null>(null);
  const [mode, setMode] = useState<"work" | "break">("work");
  const [isRunning, setIsRunning] = useState(false);
  const [completed, setCompleted] = useState(0);
  const hasCompletedRef = useRef(false);




  const intervalRef = useRef<number | null>(null);


  // ✅ Format mm:ss
  const formatTime = (seconds: number) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  // ✅ Start Timer
  const startTimer = () => {
    if (intervalRef.current !== null) return; // prevent duplicate intervals

    setIsRunning(true);


    intervalRef.current = window.setInterval(() => {

      setTime((prev) => {
        if (prev === 1) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;

          setIsRunning(false);

          hasCompletedRef.current = true;

          // alert("Time’s Up!");
          return prev = 0

        }

        return prev - 1;
      });
    }, 1000);
  };

  // ✅ Pause Timer
  const pauseTimer = () => {
    if (isRunning) {

      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRunning(false);
    }
  };

  // ✅ Reset Timer
  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);


    setMode("work");
    setTime(WORK_TIME);


    hasCompletedRef.current = true;
  };

  // ✅ Cleanup on unmount
  useEffect(() => {
    if (time === 0 && hasCompletedRef.current) {
      hasCompletedRef.current = false;

      if (mode === "work") {
        const newCount = incrementCompleted();
        setCompleted(newCount);

        setMode("break");
        setTime(BREAK_TIME);
      } else {
        setMode("work");
        setTime(WORK_TIME);
      }

      alert("Times Up!");
    }
  }, [time]);









  return (
    <div className="dark:bg-[#0f172a] flex flex-col items-center justify-center lg:py-20 md:py-[10rem] py-40 bg-gray-100 md:space-y-6 space-y-10">
      <h1 className="md:text-3xl text-6xl font-bold">Pomodoro Timer</h1>

      <div className="md:text-6xl text-8xl font-mono dark:bg-[#9ca3af] bg-white px-10 md:py-6 py-10 rounded-xl shadow">
        {formatTime(time)}
      </div>

      <div className="flex md:gap-4 gap-8 md:text-3xl text-4xl">
        <button
          onClick={(e) => {
            const currentMode = e.currentTarget.dataset.mode
            if (currentMode === "start") setState(currentMode);
            startTimer();
          }}

          className={`tracking-wider  md:px-4 md:py-2 px-10 py-5 lg:rounded md:rounded-lg rounded-2xl ${state === "start" ? "bg-green-200 text-green-600 outline-1 outline" : "bg-green-500 text-white"}`}
          data-mode="start"
        >
          Start
        </button>

        <button
          onClick={(e) => {

            const currentMode = e.currentTarget.dataset.mode
            if (currentMode === "pause") setState(currentMode);

            pauseTimer();
          }}

          className={`tracking-wider  md:px-4 md:py-2 px-10 py-5 lg:rounded md:rounded-lg rounded-2xl ${state === "pause" ? "bg-yellow-200 text-yellow-600 outline-1 outline" : "bg-yellow-500 text-white"}`}
          data-mode="pause"
        >
          Pause
        </button>

        <button
          onClick={(e) => {
            const currentMode = e.currentTarget.dataset.mode
            if (currentMode === "reset") setState(currentMode);
            resetTimer();
          }}

          className={`tracking-wider  md:px-4 md:py-2 px-10 py-5 lg:rounded md:rounded-lg rounded-2xl ${state === "reset" ? "bg-red-200 text-red-600 outline-1 outline" : "bg-red-500 text-white"}`}
          data-mode="reset"
        >
          Reset
        </button>
      </div>

      <div className="lg:text-lg md:text-2xl text-3xl">
        Completed Pomodoros: <strong>{completed}</strong>
      </div>
    </div>
  );
}
