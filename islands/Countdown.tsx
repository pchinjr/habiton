import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

const timeFmt = new Intl.RelativeTimeFormat("en-US", { numeric: 'auto' });

// The target date is passed as a string instead of as a `Date`, because the
// props to island components need to be JSON (de)serializable.
export default function Countdown(props: { target: string }) {
  const target = new Date(props.target);
  const now = useSignal(new Date());

  // Set up an interval to update the `now` date every day with the current
  // date as long as the component is mounted
  useEffect(() => {
    const timer = setInterval(() => {
      if (now.value > target) {
        clearInterval(timer);
      }
      now.value = new Date();
    }, 24 * 60 * 60 * 1000); // Update every day
    return () => clearInterval(timer);
  }, [props.target]);

  const daysLeft = Math.floor(
    (target.getTime() - now.value.getTime()) / (24 * 60 * 60 * 1000),
  );

  // If the target date has passed, we stop counting down.
  if (daysLeft <= 0) {
    return <span>🎉</span>;
  }

  // Otherwise, we format the remaining time using `Intl.RelativeTimeFormat` and
  // render it.
  return <span>{timeFmt.format(daysLeft, "days")}</span>; // Negative value to show "in x days"
}
