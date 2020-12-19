import React from 'react';
import styled from 'styled-components';
import FlexContainer from './flex/FlexContainer';
import FlexItem from './flex/FlexItem';

const Playground = () => {
  // const items = [1, 2, 3, 4, 5, 6];
  return (
    <Rectangle>
      <FlexContainer >
        {
          // items.map(
          //     (item) => <FlexItem key={item}>{item}</FlexItem>,
          // )
        }
        <FlexItem key={1} flex='0 1 300px'>1</FlexItem>
        <FlexItem key={2} flex='1 0'>2</FlexItem>
        <FlexItem key={3} >3</FlexItem>
      </FlexContainer>
    </Rectangle>
  );
};

const Rectangle = styled.div`
  background-color: #DDDDDD;
  width: 80%;
  height: 80%;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

export default Playground;
