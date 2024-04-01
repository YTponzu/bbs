import { useState, useEffect } from "react";
import "../styles/ThreadList.css";

const ThreadList = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    fetch("https://railway.bulletinboard.techtrain.dev/threads")
      .then((res) => res.json())
      .then((data) => setThreads(data));
  }, []);

  return (
    <div className="threadlist">
      <ul className="threadlist--ul">
        {threads.map((thread) => {
          return (
            <li key={thread.id}>
              <a href={`/thread/${thread.id}`}>{thread.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ThreadList;