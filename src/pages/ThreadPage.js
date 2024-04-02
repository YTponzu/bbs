import Title from '../components/Title';
import TwoDivisionsLayout from '../components/ThreadPage/TwoDivisionsLayout';

const ThreadPage = () => {
  return (
    <TwoDivisionsLayout
      children={{ left: <Title title="Thread"/>, right: <Title title="Replies"/> }}
      ratio={{ lr: 7, rr: 3 }}
    />
  );
};

export default ThreadPage;