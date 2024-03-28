import { useState, useEffect } from "react";

const ThreadList = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    fetch("https://railway.bulletinboard.techtrain.dev/threads")
      .then((res) => res.json())
      .then((data) => setThreads(data));
  }, []);

  return (
    <ul>
      {threads.map((thread) => {
        return (
          <li key={thread.id}>
            <a href={`/thread/${thread.id}`}>{thread.title}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default ThreadList;