import style from "./style";
import { FunctionComponent, useEffect, useState } from "react";
import { Coordinate } from "@/types/types";
import * as d3Array from "d3-array";
import { createXScale, createYScale, getArea } from "@/helpers/d3";
import { ScaleLinear } from "d3-scale";
import { Gradient } from "../../index";
import { smooth } from "@/helpers/smooth";
import { EnhancedPosition } from "@/helpers/trackAnalyzer";

export type ProfileProps = {
  width: number;
  height: number;
  className?: string;
  extrema: EnhancedPosition[];
  enhancedPositions: EnhancedPosition[];
  enhancedCheckpoints: EnhancedPosition[];
};

type Domain = {
  x: { min: number; max: number };
  y: { min: number; max: number };
};

type Scales = {
  x: ScaleLinear<number, number>;
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
}) => {
  const [domain, setDomain] = useState<Domain>({
    x: { min: 0, max: 0 },
    y: { min: 0, max: 0 },
  });

  const [scales, setScales] = useState<Scales | null>(null); // Fixing the type of scales
  const [profileArea, setProfileArea] = useState<Area | null>(null);
  const [smoothedElevations, setSmoothedElevations] = useState<number[]>([]);

  // compute path and area
  useEffect(() => {
    if (!smoothedElevations || !scales || !scales.x || !scales.y || !domain)
      return;

    const area = getArea(enhancedPositions, scales.x, scales.y, domain.y.min);

    setProfileArea(area);
  }, [scales, enhancedPositions, domain]);

  // compute scales
  useEffect(() => {
    if (!domain || !enhancedPositions) return;

    const x = createXScale(
      {
        min: 0,
        max: enhancedPositions[enhancedPositions.length - 1].distance,
      },
      { min: 0, max: width },
    );

    const y = createYScale(
      { min: domain.y.min, max: domain.y.max },
      { min: 0, max: height * 0.2 },
    );

    setScales({ x, y });
  }, [width, height, enhancedPositions, domain]);

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

  return (
    <div className={className} style={{ width, height }}>
      <div className={"svg-container"} style={{ width, height: height * 0.2 }}>
        <svg
          height={height * 0.2}
          width={width}
          viewBox={`0 0 ${width} ${height * 0.2}`}
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
          {profileArea && profileArea.path && (
            <path
              d={profileArea.path}
              stroke={"transparent"}
              strokeWidth="0"
              fill={"url(#gradient2)"}
              opacity={1}
            />
          )}
          {enhancedCheckpoints &&
            enhancedCheckpoints.length &&
            scales &&
            enhancedCheckpoints.map((enhancedCheckpoint, index) => (
              <g key={index}>
                <circle
                  className={"shadow"}
                  cx={scales.x(enhancedCheckpoint.distance)}
                  cy={scales.y(enhancedCheckpoint.position[2])}
                  r="4"
                  fill={"var(--color-decorative)"}
                />
                <circle
                  onClick={() => console.log("bim")}
                  cx={scales.x(enhancedCheckpoint.distance)}
                  cy={scales.y(enhancedCheckpoint.position[2])}
                  r="3"
                  fill={"var(--color-background)"}
                ></circle>
              </g>
            ))}
          {/*{extrema &&
            extrema.length &&
            scales &&
            extrema.map((extrem, index) => (
              <g key={index}>
                <circle
                  className={"shadow"}
                  cx={scales.x(extrem.distance)}
                  cy={scales.y(extrem.position[2])}
                  r="4"
                  fill={"var(--syntax-del)"}
                />
                <circle
                  onClick={() => console.log("bim")}
                  cx={scales.x(extrem.distance)}
                  cy={scales.y(extrem.position[2])}
                  r="3"
                  fill={"var(--color-background)"}
                ></circle>
              </g>
            ))}*/}
        </svg>
      </div>
    </div>
  );
};

export default style(Profile);
