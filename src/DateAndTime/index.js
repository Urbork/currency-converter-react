import { DateElement } from "./styled.js";
import { useCurrentDate } from "./useCurrentDate.js";

const DateAndTime = () => {
  const currentDate = useCurrentDate();

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
