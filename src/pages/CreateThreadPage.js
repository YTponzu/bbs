import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledH1 = styled.h1`
  width: 80%;
  max-width: 800px;
  margin: 32px auto;
  padding: 0 1rem;
  font-size: 40px;
  font-weight: 400;
`;

const StyledInput = styled.input`
  display: block;
  width: 80%;
  max-width: 800px;
  height: 89px;
  font-size: 30px;
  border-radius: 8px;
  border: none;
  padding: 12px 12px;
  margin: 0 auto;
  margin-top: 64px;
`;

const Wrapper = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 32px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  font-size: 24px;
  color: #666;

  &:hover {
    color: #333;
  }
`;

const StyledButton = styled.button`
  background-color: #66d48b;
  font-size: 32px;
  color: #fff;
  border-radius: 10px;
  border: none;
  margin: 16px;
  padding: 16px 64px;

  &:hover {
    cursor: pointer;
    background-color: #6af2a0;
  }
`;

const CreateThreadPage = () => {
  const [title, setTitle] = useState("");
  const changeTitle = e => setTitle(e.target.value);

  return (
    <div>
      <StyledH1>スレッド新規作成</StyledH1>
      <StyledInput type="text" placeholder="スレッドタイトル" value={title} onChange={changeTitle} />
      <Wrapper>
        <StyledLink to="/">Topに戻る</StyledLink>
        <StyledButton>作成</StyledButton>
      </Wrapper>
    </div>
  );
};

export default CreateThreadPage;