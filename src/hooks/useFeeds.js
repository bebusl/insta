import { useEffect, useState } from 'react';
import { getUserData } from '../utils/userData';
import { getFeeds } from '../api/getFeeds';

function useFeed() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    const fetchFeeds = async () => {
      const feeds = await getFeeds();
      if (feeds) {
        setFeeds(feeds);
      }
    };
    fetchFeeds();
  }, []);

  const findFeedId = (id) => {
    return feeds.findIndex((feed) => feed.id === id);
  };

  const addComment = (id, comment) => {
    const { id: userId } = getUserData();
    const feedId = findFeedId(id);
    const commentId = new Date().getTime();

    setFeeds((prevFeeds) => {
      const curFeeds = [...prevFeeds];
      curFeeds[feedId].comment.push({
        commentor: userId,
        comment: comment,
        id: commentId,
      });
      return curFeeds;
    });
  };

  return [feeds, addComment];
}

export default useFeed;
