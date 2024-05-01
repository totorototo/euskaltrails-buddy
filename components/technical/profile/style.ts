import styled from "styled-components";
import { FunctionComponent } from "react";
import { ProfileProps } from "@/components/technical/profile/Profile";

const style = (Component: FunctionComponent<ProfileProps>) => styled(Component)`
  top: 0;
  left: 0;
  flex: 1;

  svg {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .svg-container {
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
    position: absolute;
    bottom: 0;
    left: 0;
    overflow-y: scroll;
    font-size: 0.6rem;

    g:nth-child(even) {
      .location {
        transform: translate(0.1rem, 0.6rem);
      }
    }

    g:nth-child(odd) {
      .location {
        transform: translate(0.1rem, -0.6rem);
      }
    }

    .cp {
      .km {
        transform: translate(-0.4rem, -0.6rem);
        font-size: 0.6rem;
        color: var(--color-text);
      }
    }
  }
`;

export default style;
