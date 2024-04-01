import ThreadList from "../components/ThreadList";

const TopPage = () => {
  return (
    <div>
      <h1 style={{ width: "80%", maxWidth: "800px", fontWeight: "400", margin: "32px auto", padding: "0 1rem" }}>新着スレッド</h1>
      <ThreadList />
    </div>
  );
};

export default TopPage;