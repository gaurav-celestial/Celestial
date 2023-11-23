import React, { useEffect, useState } from "react";

const duration = 3000;

export default function ProgressBar() {
  const [remainingTime, setRemainingTime] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("interval");
      setRemainingTime((prevState) => {
        return prevState - 10;
      });
    }, 10);

    return () => {
      clearInterval(interval);
    };
  });

  return <progress value={remainingTime} max={duration} />;
}
