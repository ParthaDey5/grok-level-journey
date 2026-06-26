import { useState, useRef, useEffect } from "react";



// interface  {

//   sessionsCompleted: number
//   sessionsGoal: number // fixed or configurable (e.g., 8)

//   currentMode: "focus" | "break"
//   timeLeft: number
//   isRunning: boolean
// }


const WORK_TIME = 5; // 25 minutes
const BREAK_TIME = 2;




function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const incrementCompleted = createCounter();


export default function PomodoroTimer() {
  const [time, setTime] = useState<number>(WORK_TIME);
  const [state, setState] = useState<"start" | "pause" | "reset" | null>(null);
  const [mode, setMode] = useState<"work" | "break">("work");
  const [isRunning, setIsRunning] = useState(false);
  const [completed, setCompleted] = useState(0);
  const [sessionsCompleted, setSessionsCompleted] = useState(() => Number(localStorage.getItem("sessionsCompleted")) || 0);


  const hasCompletedRef = useRef<boolean>(false);


  let sessionsGoal = 2


  let lastSavedDate = localStorage.getItem("lastSavedDate")

  const today = new Date().toDateString()

  if (lastSavedDate !== today) {
    setSessionsCompleted(0)
    lastSavedDate = today
  }


  localStorage.setItem("sessionsCompleted", sessionsCompleted.toString())
  localStorage.setItem("lastSavedDate", today)

  let progress = (sessionsCompleted / sessionsGoal) * 100
  progress = Math.min(progress, 100)


  useEffect(() => {

    if (mode === "work" && time === 0) {
      setSessionsCompleted(prev => prev += 1)
    }
    if (sessionsCompleted>=sessionsGoal) {
      setSessionsCompleted(sessionsGoal)
    }
  }, [time])



  const intervalRef = useRef<number | null>(null);

  // ✅ Format mm:ss
  const formatTime = (seconds: number) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  // ✅ Start Timer
  const startTimer = () => {
    console.log("timer running")
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
    intervalRef.current = null;
    setIsRunning(false);


    setMode("work");
    setTime(WORK_TIME);


    hasCompletedRef.current = true;
  };

  const skipMode = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = null
    setIsRunning(false)

    if (mode === "work") {
      setMode("break")
      setTime(BREAK_TIME)
    } else {
      setMode("work")
      setTime(WORK_TIME)
    }
  }
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


  //   useEffect(() => {
  //   console.log("isRunning changed to:", isRunning);
  // }, [isRunning]);


  return (
    <div className="dark:bg-[#0f172a] flex items-center justify-around lg:py-16 md:py-[10rem] py-40 bg-gray-50  outline dark:outline-gray-500 outline-gray-100 rounded-xl">

     {/* Time Section */}
      <div className="md:text-6xl text-8xl font-mono dark:bg-[#9ca3af] bg-white p-10 md:py-6 py-10 rounded-xl shadow">
        {formatTime(time)}
        <h1 className="m-auto text-center md:text-2xl text-4xl">{`${mode === "work" ? "Focus Time" : "Break Time"}`}</h1>
      </div>

      {/* Control Section */}
      <div className="flex md:gap-4 gap-8 md:text-3xl text-4xl">
        {/* Reest Button */}
        <button
          onClick={(e) => {
            const currentMode = e.currentTarget.dataset.mode
            if (currentMode === "reset") setState(currentMode);
            resetTimer();
          }}
        >
          {/* Reset */}
          <svg className="size-12 stroke-black dark:stroke-gray-200" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">

            <g fill="none" fill-rule="evenodd"
              stroke-linecap="round" stroke-linejoin="round" transform="matrix(0 1 1 0 2.5 2.5)">

              <path d="m3.98652376 1.07807068c-2.38377179 1.38514556-3.98652376 3.96636605-3.98652376 6.92192932 0 4.418278 3.581722 8 8 8s8-3.581722 8-8-3.581722-8-8-8" />

              <path d="m4 1v4h-4" transform="matrix(1 0 0 -1 0 6)" />

            </g>

          </svg>
        </button>

        <div className="relative size-32">
          <button
            onClick={startTimer}
            className={`absolute ${isRunning ? "hidden" : "block"}`}
            data-mode="start"
          >
            {/* Start  */}
            <svg className="w-[100%] dark:fill-gray-200 fill-pink-900" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z" />
            </svg>

          </button>

          <button
            onClick={pauseTimer}
            className={`absolute ${!isRunning ? "hidden" : "block"}`}
            data-mode="pause"
          >
            {/* Pause */}
            <svg className="w-[100%] dark:fill-gray-200 fill-pink-900" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM8.07612 8.61732C8 8.80109 8 9.03406 8 9.5V14.5C8 14.9659 8 15.1989 8.07612 15.3827C8.17761 15.6277 8.37229 15.8224 8.61732 15.9239C8.80109 16 9.03406 16 9.5 16C9.96594 16 10.1989 16 10.3827 15.9239C10.6277 15.8224 10.8224 15.6277 10.9239 15.3827C11 15.1989 11 14.9659 11 14.5V9.5C11 9.03406 11 8.80109 10.9239 8.61732C10.8224 8.37229 10.6277 8.17761 10.3827 8.07612C10.1989 8 9.96594 8 9.5 8C9.03406 8 8.80109 8 8.61732 8.07612C8.37229 8.17761 8.17761 8.37229 8.07612 8.61732ZM13.0761 8.61732C13 8.80109 13 9.03406 13 9.5V14.5C13 14.9659 13 15.1989 13.0761 15.3827C13.1776 15.6277 13.3723 15.8224 13.6173 15.9239C13.8011 16 14.0341 16 14.5 16C14.9659 16 15.1989 16 15.3827 15.9239C15.6277 15.8224 15.8224 15.6277 15.9239 15.3827C16 15.1989 16 14.9659 16 14.5V9.5C16 9.03406 16 8.80109 15.9239 8.61732C15.8224 8.37229 15.6277 8.17761 15.3827 8.07612C15.1989 8 14.9659 8 14.5 8C14.0341 8 13.8011 8 13.6173 8.07612C13.3723 8.17761 13.1776 8.37229 13.0761 8.61732Z" />
            </svg>
          </button>
        </div>

        {/* Skip Button */}
        <button onClick={skipMode}>
          <svg className="size-9 rotate-180 fill-black dark:fill-gray-200" viewBox="-2 0 32 32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" >
            <path d="M26.530,31.994 C26.222,31.994 25.915,31.903 25.619,31.722 L2.000,17.205 L2.000,31.000 C2.000,31.553 1.552,32.000 1.000,32.000 C0.448,32.000 -0.000,31.553 -0.000,31.000 L-0.000,1.006 C-0.000,0.453 0.448,0.006 1.000,0.006 C1.552,0.006 2.000,0.453 2.000,1.006 L2.000,13.855 L25.628,0.248 C25.917,0.083 26.211,-0.000 26.507,-0.000 C27.372,-0.000 28.000,0.689 28.000,1.639 L28.000,30.367 C28.000,31.435 27.260,31.994 26.530,31.994 ZM3.097,15.531 L26.000,29.608 L26.000,2.341 L3.097,15.531 Z" />
          </svg>
        </button>

      </div>

      {/* Session Section */}
      <div className="dark:bg-[#9ca3af] bg-white px-6 py-5 rounded-xl shadow-md w-[17rem] space-y-2">
        <p className="text-md text-gray-500 dark:text-gray-50 text-shadow-xs">Sessions Today</p>

        <h2 className="text-3xl font-bold">
          {sessionsCompleted} / {sessionsGoal}
        </h2>

        <div className="w-full bg-gray-200 rounded-full">
          <div
            className="bg-purple-500 dark:bg-purple-300 h-2 rounded-full"
            style={{width: `${progress}%`}}
          ></div>
        </div>
      </div>
    
    </div>
  );
}
