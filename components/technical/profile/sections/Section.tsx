import { FunctionComponent, MutableRefObject, useEffect } from "react";
import style from "./style";
import { TimedSection } from "@/types/types";
import { formatDuration, intervalToDuration } from "date-fns";
import { format } from "date-fns-tz";
import useIntersect from "@/components/hooks/useIntersect";

export type SectionProps = {
  className?: string;
  section: TimedSection;
  id: number;
  setHighlightedSectionIndex: (index: number) => void;
  root: MutableRefObject<null>;
};

const msToTime = (milliseconds: number) => {
  let day, hour, minute, seconds;
  seconds = Math.floor(milliseconds / 1000);
  minute = Math.floor(seconds / 60);
  hour = Math.floor(minute / 60);
  minute = minute % 60;

  return minute !== 0 ? `${hour} hours ${minute} minutes` : `${hour} hours`;
};

const Profile: FunctionComponent<SectionProps> = ({
  className,
  section,
  id,
  setHighlightedSectionIndex,
  root,
}) => {
  const [ref, entry] = useIntersect({
    threshold: 0.8,
    root: root.current,
    rootMargin: "0px 50px 0px 50px",
  });

  useEffect(() => {
    if (!entry) return;
    if (entry.intersectionRatio > 0.8) setHighlightedSectionIndex(id);
  }, [entry, entry?.intersectionRatio, setHighlightedSectionIndex, id]);

  return (
    <div className={className} ref={ref}>
      <div className={`detail`}>
        <div className={"background"}>
          {/*<span>{`${Math.floor(section.departure.km)}`}</span>*/}
          <span>{`${Math.floor(section.arrival.km)}`}</span>
        </div>
        <p className={"section-data"}>
          <span>{`${section.departure.location} - ${section.arrival.location}`}</span>

          <span className={"type"}>distance</span>
          <span>{`${section.distance.toFixed(1)}km `}</span>

          <span className={"type"}>elevation</span>
          <span>
            {`${section.elevation.gain.toFixed(
              0,
            )}D+ ${section.elevation.loss.toFixed(0)}D-`}
          </span>

          <span className={"type"}>Max Duration</span>
          <span>
            {formatDuration(
              intervalToDuration({ start: 0, end: section.duration }),
            )}
            {/* {formatDistance(0, section.duration, {
              includeSeconds: true,
            })}*/}
          </span>

          <span className={"type"}>time barrier</span>

          <span>
            {format(
              new Date(section.closingDate.replace(/-/g, "/")),
              "dd-MM HH:mm",
              { timeZone: "Europe/Vienna" },
            )}
          </span>

          <span className={"type"}>Max Comp Time</span>
          <span>{msToTime(section.elapsedTime)}</span>
          <span className={"type"}>min avg speed</span>
          <span>{`${section.slowestAverageSpeed.toFixed(2)} km/h`}</span>
        </p>
      </div>
    </div>
  );
};

export default style(Profile);
