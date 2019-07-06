import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

const animate = keyframes`
  0% {
    transform: rotate(0deg);
    box-shadow: 0 0 0 50px rgba(255, 0, 0, .5), 25px 25px 0 50px rgba(0, 255, 0, .5), -25px -25px 0 50px rgba(0, 0, 255, .5);
  }

  25% {
    transform: rotate(360deg);
  }

  50% {
    transform: rotate(90deg);
    box-shadow: 25px 25px 0 50px rgba(255, 0, 0, .5), -25px -25px 0 50px rgba(0, 255, 0, .5), 0 0 0 50px rgba(0, 0, 255, .5);
  }

  75% {
    transform: rotate(-180deg);
  }

  100% {
    transform: rotate(0deg);
    box-shadow: 0 0 0 50px rgba(255, 0, 0, .5), 25px 25px 0 50px rgba(0, 255, 0, .5), -25px -25px 0 50px rgba(0, 0, 255, .5);
  }
`;

export const Loader = styled.div`
  width: 1px;
  height: 1px;
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 50%;

  transform: translate(-50%, -50%);
  animation: ${animate} 2s ease infinite;
  display: ${({ loading }) => (loading ? "block" : "none")};
`;
