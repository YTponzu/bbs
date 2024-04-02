import { StyledButton } from './ComponentStyle';

const CreateThreadButton = ({ title }) => {
  const threadTitle = title.trim();
  const threadTitleValidate = threadTitle.length < 1 ? false : true;

  const createThread = () => {
    if (!threadTitleValidate) {
      alert("スレッド名を入力してください");
      return;
    }

    fetch(
      "https://railway.bulletinboard.techtrain.dev/threads",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title })
      }
    ).then((res) => {
      if (!res.ok) {
        throw new Error("Failed to create a thread");
      }
      return res.json();
    }).then((data) => {
      window.location.href = `/thread/${data.id}`;
    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <StyledButton onClick={createThread}>作成</StyledButton>
  );
}

export default CreateThreadButton;