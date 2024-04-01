import { useState } from "react";
import { Wrapper, StyledLink } from "../components/CreateThreadPage/ComponentStyle";
import Title from "../components/Title";
import Form from "../components/CreateThreadPage/Form";
import CreateThreadButton from "../components/CreateThreadPage/CreateThreadButton";


const CreateThreadPage = () => {
  const [title, setTitle] = useState("");

  const createThread = (title) => {
    console.log(title);
  };

  return (
    <div>
      <Title title="スレッド新規作成" />
      <Form placeholder="スレッドタイトル" onSubmit={createThread} title={title} setTitle={setTitle} />
      <Wrapper>
        <StyledLink to="/">Topに戻る</StyledLink>
        <CreateThreadButton title={title} />
      </Wrapper>
    </div>
  );
};

export default CreateThreadPage;