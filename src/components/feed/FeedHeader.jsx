import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListDots } from '@fortawesome/free-solid-svg-icons';
import { horizontalAlign } from '../../styles/sharedStyles';

function FeedHeader({ author = 'author' }) {
  return (
    <Wrapper>
      <p>{author}</p>
      <FontAwesomeIcon icon={faListDots}></FontAwesomeIcon>
    </Wrapper>
  );
}

export default FeedHeader;

const Wrapper = styled.div`
  ${horizontalAlign}
  width:100%;
  padding: 1rem 1rem;
  border-bottom: 1px solid #dbdbdb;
`;
