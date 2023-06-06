import React, { useState, useEffect } from "react";
import moment from "moment";

export default function Countdown() {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const deadline = moment()
      .utc()
      .day(3)
      .hour(0)
      .minute(0)
      .second(0)
      .millisecond(0); // Sets the deadline to next Wednesday 12 AM GMT+0
    const interval = setInterval(() => {
      const now = moment.utc();
      const diff = deadline.diff(now);
      const duration = moment.duration(diff);

      const days = duration.days();
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();

      const countdownString = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

      setCountdown(countdownString);

      if (diff <= 0) {
        clearInterval(interval);
        setCountdown("Countdown ended");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown">
      <h1>Item drop reset:</h1>
      <h2>{countdown}</h2>
    </div>
  );
}
