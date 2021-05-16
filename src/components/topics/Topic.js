import React from 'react';
import { useParams } from 'react-router-dom';
const Topic = () => {
  let { topicId } = useParams();
  return <p>Topic Page: {topicId}</p>;
};

export default Topic;
