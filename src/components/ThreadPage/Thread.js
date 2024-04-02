import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Title from "../Title";
import TwoDivisionsLayout from "./TwoDivisionsLayout";
import PostsSide from "./PostsSide";
import PostFormSide from "./PostFormSide";

const Thread = () => {
  const [posts, setPosts] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://railway.bulletinboard.techtrain.dev/threads/${id}/posts`)
      .then(response => response.json())
      .then(data => setPosts(data));
  }, [id]);

  const title = "Thread Title";
  
  return (
    <TwoDivisionsLayout
      children={{ left: <PostsSide title={title} posts={posts} />, right: <PostFormSide /> }}
      ratio={{ lr: 2, rr: 1 }}
    />
  );
};

export default Thread;