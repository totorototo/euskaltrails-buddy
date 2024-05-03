import { FunctionComponent } from "react";
import styled from "styled-components";
import { SectionProps } from "@/components/technical/profile/sections/Section";

const style = (Component: FunctionComponent<SectionProps>) => styled(Component)`
  height: 100%;
  position: relative;
  scroll-snap-align: center;
  display: flex;

  .detail {
    min-width: 100vw;
    width: 100vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    opacity: 1;
    padding: 1rem;

    .background {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: -1;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      font-size: 16rem;
      letter-spacing: -0.05em;
      min-width: 2rem;
      margin-top: 2rem;
      margin-right: -3rem;
      opacity: 0.1;

      color: var(--color-gray-900);
    }

    .section-data {
      display: flex;
      height: 100%;
      width: 90%;
      color: var(--color-text);
      // mix-blend-mode: difference;

      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      span:first-child {
        color: var(--color-alert);
        padding-bottom: 2px;
        font-size: 1.2rem;
        line-height: 1.8rem;
      }

      .type {
        font-size: 1.1rem;
        color: var(--color-warning);
        text-transform: capitalize;
        margin-bottom: 0.6rem;
        margin-top: 0.6rem;
      }

      span:not(.type) {
        margin-bottom: 0.4rem;
      }
    }
  }
`;

export default style;
