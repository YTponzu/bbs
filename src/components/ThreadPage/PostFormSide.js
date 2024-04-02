import styled from "styled-components";

const PostForm = styled.form`
  width: 80%;
  margin: 0 auto;
`;

const PostMessage = styled.textarea`
  resize: vertical;
  font-size: 20px;
  width: 100%;
  min-height: 200px;
  box-sizing: border-box;
  border: none;
  margin: 64px 0;
  padding: 16px;
`;

const PostBtn = styled.button`
  background-color: #66d48b;
  width: 100%;
  font-size: 30px;
  color: #fff;
  border: none;
  padding: 24px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #4dbf74;
  }
`;

const PostFormSide = () => {
  return (
    <PostForm>
      <PostMessage placeholder="投稿しよう！" />
      <PostBtn>投稿</PostBtn>
    </PostForm>
  );
};

export default PostFormSide;