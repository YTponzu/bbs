import ThreadList from "../components/TopPage/ThreadList";
import Title from "../components/Title";

const TopPage = () => {
  return (
    <div>
      <Title title="新着スレッド" />
      <ThreadList />
    </div>
  );
};

export default TopPage;