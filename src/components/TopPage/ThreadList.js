import { useState, useEffect } from "react";
import { StyledThreadList, StyledUl, StyledLi, StyledLink } from "./ComponentStyle";

const ThreadList = () => {
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://railway.bulletinboard.techtrain.dev/threads")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load threads");
        }
        return res.json();
      })
      .then((data) => {
        setThreads(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <StyledThreadList>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <StyledUl>
          {threads.map((thread) => {
            return (
              <StyledLi key={thread.id}>
                <StyledLink to={`/thread/${thread.id}`}>{thread.title}</StyledLink>
              </StyledLi>
            );
          })}
        </StyledUl>
      )}
    </StyledThreadList>
  );
};

export default ThreadList;