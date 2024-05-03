import style from "./style";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { TimedSection } from "@/types/types";
import * as d3Array from "d3-array";
import { createXScaleBand, createYScale } from "@/helpers/d3";
import { ScaleBand, ScaleLinear } from "d3-scale";
import { Gradient } from "../../index";
import { smooth } from "@/helpers/smooth";
import { EnhancedPosition } from "@/helpers/trackAnalyzer";
import Section from "@/components/technical/profile/sections/Section";

// eslint-disable-next-line no-extend-native
// @ts-ignore
Array.prototype.groupBy = function <T, K>(
  this: T[],
  fn: (item: T, index: number, array: T[]) => K,
): { [key: string]: T[] } {
  return this.reduce(
    (accu: { [key: string]: T[] }, item: T, index: number, array: T[]) => {
      const key: K = fn(item, index, array);
      // eslint-disable-next-line no-param-reassign
      accu[key as string] = accu[key as string] || [];
      accu[key as string].push(item);
      return accu;
    },
    {},
  );
};

export type ProfileProps = {
  width: number;
  height: number;
  className?: string;
  extrema: EnhancedPosition[];
  enhancedPositions: EnhancedPosition[];
  enhancedCheckpoints: EnhancedPosition[];
  timedSections: TimedSection[];
};

type Domain = {
  x: { min: number; max: number };
  y: { min: number; max: number };
};

type Scales = {
  x: ScaleBand<string>;
  y: ScaleLinear<number, number>;
};

type Area = { path: string | null };

const Profile: FunctionComponent<ProfileProps> = ({
  className,
  width,
  height,
  extrema,
  enhancedPositions,
  enhancedCheckpoints,
  timedSections,
}) => {
  const [domain, setDomain] = useState<Domain>({
    x: { min: 0, max: 0 },
    y: { min: 0, max: 0 },
  });

  const root = useRef(null);
  const [scales, setScales] = useState<Scales | null>(null); // Fixing the type of scales
  const [smoothedElevations, setSmoothedElevations] = useState<number[]>([]);
  const [highlightedSectionIndex, setHighlightedSectionIndex] =
    useState<number>(0);

  const [data, set] = useState<{ distance: string; elevation: number }[]>([]);

  // compute domain
  useEffect(() => {
    if (!enhancedPositions || !enhancedPositions.length) return;

    const elevations = enhancedPositions.map(
      (enhancedPosition) => enhancedPosition.position[2],
    );
    const updatedElevations = smooth(elevations, 3);

    setSmoothedElevations(updatedElevations);

    const extentY = d3Array.extent(updatedElevations) as
      | [number, number]
      | undefined; // Type assertion for extentY

    if (extentY) {
      setDomain({
        x: {
          min: 0,
          max: enhancedPositions[enhancedPositions.length - 1].distance,
        },
        y: { min: 0, max: extentY[1] * 1.2 },
      });
    }
  }, [enhancedPositions]);

  useEffect(() => {
    if (!enhancedPositions) return;

    // @ts-ignore
    const groupedEnhancedPositions = enhancedPositions.groupBy(
      (enhancedPosition: EnhancedPosition) =>
        Math.trunc(enhancedPosition.distance / 1000),
    );

    const averagedEnhancedPositions = Object.entries(
      groupedEnhancedPositions,
    ).reduce(
      (accu, [key, value]) => {
        const distance = key;
        const averageElevation = (value as EnhancedPosition[]).reduce(
          (accu, currentValue, index, array) => {
            return (accu + currentValue.position[2]) / 2;
          },
          0,
        );

        return [...accu, { distance, elevation: Math.trunc(averageElevation) }];
      },
      [] as { distance: string; elevation: number }[],
    );

    set(averagedEnhancedPositions);
  }, [enhancedPositions]);

  // compute scales
  useEffect(() => {
    if (!domain || !data) return;

    const x = createXScaleBand(
      data.map((item) => item.distance),
      { min: 0, max: width * 4 },
    );

    const y = createYScale(
      { min: domain.y.min, max: domain.y.max },
      { min: 0, max: height * 0.5 },
    );

    setScales({ x, y });
  }, [width, height, data, domain]);

  return (
    <div className={className} style={{ width, height }}>
      <div className={"sections-container"} ref={root}>
        {timedSections.map((section, index) => (
          <Section
            root={root}
            section={section}
            id={index}
            key={index}
            setHighlightedSectionIndex={setHighlightedSectionIndex}
          />
        ))}
      </div>
      <div className={"svg-container"} style={{ width, height: height * 0.5 }}>
        <svg
          height={height * 0.5}
          width={width * 4}
          viewBox={`0 0 ${width * 4} ${height * 0.5}`}
        >
          <Gradient
            from={"#a0dcfd"}
            to={"#a0dcfd00"}
            toOffset={"100%"}
            id="gradient1"
          />

          <Gradient
            from={"#0E79B2"}
            to={"#0E79B290"}
            toOffset={"100%"}
            id="gradient2"
          />
          <g>
            {data &&
              scales &&
              data.map((item, index) => (
                <rect
                  key={index}
                  fill={
                    enhancedCheckpoints.find(
                      (enhancedCheckpoint) =>
                        Math.trunc(enhancedCheckpoint.distance / 1000) ===
                        parseInt(item.distance),
                    )
                      ? "var(--color-accent)"
                      : parseInt(item.distance) >=
                            timedSections[highlightedSectionIndex].departure
                              .km &&
                          parseInt(item.distance) <
                            timedSections[highlightedSectionIndex].arrival.km
                        ? "var(--color-accent)"
                        : "var(--color-accent)"
                  }
                  x={scales.x(item.distance)}
                  y={scales.y(0)}
                  height={scales.y(item.elevation)}
                  width={scales.x.bandwidth()}
                  stroke={"transparent"}
                  strokeWidth={0}
                />
              ))}
          </g>
        </svg>
      </div>
    </div>
  );
};

export default style(Profile);
