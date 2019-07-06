import React from "react";
import styled from "@emotion/styled";
import { List, Item } from "./List";

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.7);
`;

const FlexItem = styled(Item)`
  display: flex;
  justify-content: space-between;
  border-color: rgba(0, 0, 0, 0.7);

  > div {
    padding: 15px;
    display: inline-block;
    white-space: nowrap;
  }

  > div:first-of-type {
    flex-grow: 1;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const Results = ({ results, onClick }) => {
  const onClickHandler = magnet => () => onClick(magnet);

  return (
    <Overlay>
      <List>
        {results.map(({ title, magnet, peers, seeds, size }, i) => (
          <FlexItem key={i}>
            <div onClick={onClickHandler(magnet)}>{title}</div>
            <div>
              {seeds}&uarr; {peers}&darr;
            </div>
            <div>{size}</div>
          </FlexItem>
        ))}
      </List>
    </Overlay>
  );
};
