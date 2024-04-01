import { StyledInput } from './ComponentStyle';

const Form = ({ placeholder, onSubmit, title, setTitle  }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        placeholder={placeholder}
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
    </form>
  );
};

export default Form;