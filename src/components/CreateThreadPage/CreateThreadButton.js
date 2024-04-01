import { StyledButton } from './ComponentStyle';

const CreateThreadButton = ({ title }) => {
  const onClick = () => { console.log(title);}
  return (
    <StyledButton onClick={onClick}>作成</StyledButton>
  );
}

export default CreateThreadButton;