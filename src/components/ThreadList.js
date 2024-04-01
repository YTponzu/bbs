import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledThreadList = styled.div`
  margin: 0 auto;
  width: 80%;
  max-width: 800px;  
`;

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const StyledLi = styled.li`
  background-color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 5px;
  border: #333 1px solid;
  padding: 1rem 1rem 2rem 1rem;

  &:hover {
    background-color: #ddd;
  }
`;

const StyledA = styled.a`
  color: #333;
  text-decoration: none;
`;

const ThreadList = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    fetch("https://railway.bulletinboard.techtrain.dev/threads")
      .then((res) => res.json())
      .then((data) => setThreads(data));
  }, []);

  return (
    <StyledThreadList>
      <StyledUl>
        {threads.map((thread) => {
          return (
            <StyledLi key={thread.id}>
              <StyledA href={`/thread/${thread.id}`}>{thread.title}</StyledA>
            </StyledLi>
          );
        })}
      </StyledUl>
    </StyledThreadList>
  );
};

export default ThreadList;