import styled from "@emotion/styled";
import rainbow from "../assets/tv.gif";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${rainbow});
  background-size: cover;
  height: 100%;
  overflow-y: scroll;
`;

export default Layout;
