import React from 'react';
import styled from 'styled-components';

function FeedImg({ imgSrc = '/logo192.png', onLoad }) {
  return <Img src={imgSrc} onLoad={onLoad} width="100%" />;
}

export default FeedImg;

const Img = styled.img`
  display: block;
  margin: auto;
  padding: 0;
`;
