import Countdown from "../islands/Countdown.tsx";

export default function Page() {
  const date = new Date();
  date.setHours(date.getMinutes() + 1);
  return (
    <p>
      {date.toISOString()} is happening{" "}
      <Countdown target={date.toISOString()} />.
    </p>
  );
}
