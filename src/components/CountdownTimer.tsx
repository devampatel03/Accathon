import { useCallback, useEffect, useState } from "react";
import React from "react";

interface CountDownTime {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const Timer3: React.FC = () => {
  const [countDownTime, setCountDownTime] = useState<CountDownTime>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const getTimeDifference = (
    countDownTime: number,
    interval: ReturnType<typeof setInterval>
  ) => {
    const currentTime = new Date().getTime();
    const timeDifference = countDownTime - currentTime;

    const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000))
      .toString()
      .padStart(2, "0");

    const hours = Math.floor(
      (timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
    )
      .toString()
      .padStart(2, "0");

    const minutes = Math.floor(
      (timeDifference % (60 * 60 * 1000)) / (1000 * 60)
    )
      .toString()
      .padStart(2, "0");

    const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000)
      .toString()
      .padStart(2, "0");

    if (timeDifference < 0) {
      setCountDownTime({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
      clearInterval(interval);
    } else {
      setCountDownTime({
        days,
        hours,
        minutes,
        seconds,
      });
    }
  };

  const startCountDown = useCallback(() => {
    const countDownDate = new Date("2024-12-30T23:59:00").getTime(); // Target Date

    const interval = setInterval(() => {
      getTimeDifference(countDownDate, interval);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    startCountDown();
  }, [startCountDown]);

  return (
    <div className="flex-1 flex items-center justify-center py-8 lg:py-0">
      <div className="flex flex-row items-center space-x-2  lg:mt-10 lg:left-4">
        {/* Days */}
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 sm:h-16 sm:w-16  flex justify-center items-center bg-[#343650] rounded-lg">
            <span className="text-xl sm:text-2xl  font-semibold text-[#a5b4fc]">
              {countDownTime.days}
            </span>
          </div>
          <span className="text-xs sm:text-sm  text-[#8486A9]">
            {countDownTime.days === "01" ? "Day" : "Days"}
          </span>
        </div>

        {/* Hours */}
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 sm:h-16 sm:w-16  flex justify-center items-center bg-[#343650] rounded-lg">
            <span className="text-xl sm:text-2xl  font-semibold text-[#a5b4fc]">
              {countDownTime.hours}
            </span>
          </div>
          <span className="text-xs sm:text-sm  text-[#8486A9]">
            {countDownTime.hours === "01" ? "Hour" : "Hours"}
          </span>
        </div>

        {/* Minutes */}
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 sm:h-16 sm:w-16  flex justify-center items-center bg-[#343650] rounded-lg">
            <span className="text-xl sm:text-2xl  font-semibold text-[#a5b4fc]">
              {countDownTime.minutes}
            </span>
          </div>
          <span className="text-xs sm:text-sm  text-[#8486A9]">
            {countDownTime.minutes === "01" ? "Minute" : "Minutes"}
          </span>
        </div>

        {/* Seconds */}
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 sm:h-16 sm:w-16  flex justify-center items-center bg-[#343650] rounded-lg">
            <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#a5b4fc]">
              {countDownTime.seconds}
            </span>
          </div>
          <span className="text-xs sm:text-sm  text-[#8486A9]">
            {countDownTime.seconds === "01" ? "Second" : "Seconds"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Timer3;
