import React, { useState, useEffect } from "react";
import moment from "moment";

export default function Countdown() {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    let interval;

    const getNextWednesday = () => {
      const now = moment.utc();
      let deadline = now.clone().day(3).hour(0).minute(0).second(0).millisecond(0);

      if (now.day() >= 3) {
        deadline.add(7, "days"); // Move to next Wednesday if the current day is Wednesday or later
      }

      return deadline;
    };

    const updateCountdown = () => {
      const now = moment.utc();
      const deadline = getNextWednesday();
      const diff = deadline.diff(now);
      const duration = moment.duration(diff);

      const days = duration.days();
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();

      let countdownString = "";
      if (days > 0) {
        countdownString = `${days} ${days === 1 ? "DAY" : "DAYS"} | `;
      }
      countdownString += `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
      setCountdown(countdownString);
    };

    updateCountdown();

    interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown">
      <h2>{countdown}</h2>
    </div>
  );
}
