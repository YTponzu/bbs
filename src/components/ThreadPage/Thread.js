import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getThreadNameById from "../../pages/scripts/getThreadNameById";

import TwoDivisionsLayout from "./TwoDivisionsLayout";
import PostsSide from "./PostsSide";
import PostFormSide from "./PostFormSide";

const Thread = () => {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://railway.bulletinboard.techtrain.dev/threads/${id}/posts`)
      .then(response => response.json())
      .then(data => setPosts(data));
  }, [id]);

  useEffect(() => {
    getThreadNameById(id).then((name) => setTitle(name));
  }, [id]);
  
  return (
    <TwoDivisionsLayout
      children={{ left: <PostsSide title={title} posts={posts} />, right: <PostFormSide /> }}
      ratio={{ lr: 2, rr: 1 }}
    />
  );
};

export default Thread;