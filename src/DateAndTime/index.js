import { DateElement } from "./styled.js";
import { useEffect, useState } from "react";

const DateAndTime = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <DateElement className="currentDate">
        Dziś jest{" "}
        {currentDate.toLocaleString(undefined, {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })}
      </DateElement>
    </>
  );
};

export default DateAndTime;
