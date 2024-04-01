import { useState } from "react";

const CreateThreadPage = () => {
  const [title, setTitle] = useState("");
  const changeTitle = e => setTitle(e.target.value);

  const h1Style = {
    width: "80%",
    maxWidth: "800px",
    margin: "32px auto",
    padding: "0 1rem",
    fontsize: "40px",
    fontWeight: "400",
  };

  const inputStyle = {
    display: "block",
    width: "80%",
    maxWidth: "800px",
    height: "89px",
    fontSize: "30px",
    borderRadius: "8px",
    border: "none",
    padding: "12px 12px",
    margin: "0 auto",
    marginTop: "64px",
  };

  const divStyle = {
    width: "80%",
    maxWidth: "800px",
    margin: "32px auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  };

  const aStyle = {
    fontSize: "24px",
    color: "#666",
  };

  const buttonStyle = {
    backgroundColor: "#66d48b",
    fontSize: "32px",
    color: "#fff",
    borderRadius: "10px",
    border: "none",
    margin: "16px",
    padding: "16px 64px",
  };

  return (
    <div>
      <h1 style={h1Style}>スレッド新規作成</h1>
      <input type="text" placeholder="スレッドタイトル" value={title} onChange={changeTitle} style={inputStyle} />
      <div style={divStyle}>
        <a href="." style={aStyle}>Topに戻る</a>
        <button style={buttonStyle}>作成</button>
      </div>
    </div>
  );
};

export default CreateThreadPage;