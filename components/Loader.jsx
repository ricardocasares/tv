import styled from "@emotion/styled";
import { loader } from "../css/animations";

export const Loader = styled.div`
  width: 1px;
  height: 1px;
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 50%;

  transform: translate(-50%, -50%);
  animation: ${loader} 2s ease infinite;
  display: ${({ loading }) => (loading ? "block" : "none")};
`;
