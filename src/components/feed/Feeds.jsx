import React, { useEffect, useRef, useState } from 'react';
import CommentList from './Comments';
import FeedHeader from './FeedHeader';
import FeedImg from './FeedImg';
import FeedMenu from './FeedMenu';
import CommentForm from './CommentForm';
import styled from 'styled-components';
import { grayBorder } from '../../styles/sharedStyles';
import Separator from '../Seperator';
import useFeed from '../../hooks/useFeeds';

function Feeds() {
  const [feeds, addComment] = useFeed();
  const [isImgReady, setImgReady] = useState(false);
  const loadedImg = useRef([]);

  useEffect(() => {
    loadedImg.current = new Array(feeds.length).fill(false);
  }, [feeds]);

  const onCommentSubmit = (id, comment) => {
    addComment(id, comment);
  };

  const handleLoad = (idx) => {
    loadedImg.current[idx] = true;

    if (loadedImg.current.every((loaded) => loaded)) {
      setTimeout(() => {
        setImgReady(true);
      }, 1000);
    } //모든 이미지의 로딩이 완료됐다고 판단되면 1초후에 피드들을 렌더링
  };

  return (
    <>
      {!isImgReady && <div>Loading...</div>}
      <Wrapper hidden={!isImgReady}>
        {feeds.map((comment, idx) => {
          const { id, author, img, like, comment: subComments } = comment;
          return (
            <Feed key={id}>
              <FeedHeader author={author} />
              <FeedImg imgSrc={img} onLoad={() => handleLoad(idx)} />
              <FeedMenu like={like} />
              <CommentList comments={subComments} />
              <Separator />
              <CommentForm
                onCommentSubmit={(comment) => onCommentSubmit(id, comment)}
              />
            </Feed>
          );
        })}
      </Wrapper>
    </>
  );
}

export default Feeds;

const Wrapper = styled.div`
  display: ${(props) => (props.hidden ? 'none' : 'block')};
`;

const Feed = styled.article`
  ${grayBorder}
  width: 100%;
  max-width: 482px;
  margin: 20px 0;
  & > * {
    margin: 15px auto;
  }
`;
