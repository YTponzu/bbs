import { useState } from "react";
import { StyledH1, Wrapper, StyledLink, StyledButton } from "../components/CreateThreadPage/ComponentStyle";
import Form from "../components/CreateThreadPage/Form";
import CreateThreadButton from "../components/CreateThreadPage/CreateThreadButton";


const CreateThreadPage = () => {
  const [title, setTitle] = useState("");

  const createThread = (title) => {
    console.log(title);
  };

  return (
    <div>
      <StyledH1>スレッド新規作成</StyledH1>
      <Form placeholder="スレッドタイトル" onSubmit={createThread} title={title} setTitle={setTitle} />
      <Wrapper>
        <StyledLink to="/">Topに戻る</StyledLink>
        <CreateThreadButton title={title} />
      </Wrapper>
    </div>
  );
};

export default CreateThreadPage;