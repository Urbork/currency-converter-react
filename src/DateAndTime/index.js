import { DateElement } from "./styled.js";
import { useCurrentDate } from "./useCurrentDate.js";

const formatDateAndTime = (date) =>
  date.toLocaleString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

const DateAndTime = () => {
  const currentDate = useCurrentDate();

  return (
    <>
      <DateElement className="currentDate">
        Dziś jest {formatDateAndTime(currentDate)}
      </DateElement>
    </>
  );
};

export default DateAndTime;
