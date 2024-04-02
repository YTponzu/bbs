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

const PostFormSide = ({ id }) => {
  const postMessage = (e) => {
    e.preventDefault();

    const message = e.target[0].value.trim();
    if (message === "") {
      alert("メッセージを入力してください");
      return;
    }

    fetch(
      `https://railway.bulletinboard.techtrain.dev/threads/${id}/posts`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ post: message })
      }
    ).then(() => {
      window.location.reload();
    });
  };

  return (
    <PostForm onSubmit={postMessage} method="POST">
      <PostMessage placeholder="投稿しよう！" />
      <PostBtn type="submit">投稿</PostBtn>
    </PostForm>
  );
};

export default PostFormSide;