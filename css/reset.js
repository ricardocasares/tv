import { css } from "@emotion/core";

export const reset = css`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html,
  body {
    color: white;
    background: black;
    margin: 0;
    padding: 0;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
      sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  }
`;
