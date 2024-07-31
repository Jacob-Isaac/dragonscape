import styled from "styled-components";

export const VideoResponsive = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
  margin-top: 250px;
`;

export const StyledIframe = styled.iframe`
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  border: none; /* Add this to remove the border */
  border-radius: 10px;
`;
