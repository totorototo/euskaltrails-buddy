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

    .section-index {
      //font-family: "Love Ya Like A Sister", cursive;
      display: grid;
      place-items: center;
      font-weight: bolder;
      font-size: 6rem;
      letter-spacing: -0.05em;
      min-width: 2rem;
      //flex: 1 1 auto;
      width: 35%;
      color: var(--syntax-txt);
    }

    .section-data {
      display: flex;
      //flex: 1 1 auto;
      height: 100%;
      width: 65%;
      // font-family: "Helvetica Neue";
      color: var(--syntax-txt);

      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      span:first-child {
        color: var(--syntax-del);
        font-weight: 900;
        font-size: 1rem;
        padding-bottom: 2px;
        margin-bottom: 1rem;
      }

      .type {
        font-size: 1.1rem;
        font-weight: 800;
        color: var(--syntax-regex);
        text-transform: capitalize;
        margin-bottom: 0.2rem;
      }

      span:not(.type) {
        //margin-top: 0.1rem;
        margin-bottom: 0.4rem;
      }
    }
  }
`;

export default style;
