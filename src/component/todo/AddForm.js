import { useState, memo } from "react";

const AddForm = memo(({ addTodo }) => {
  const [value, setValue] = useState("");

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <div onSubmit={handleSubmit}>
      <input
        data-testid="new-todo-input"
        value={value}
        onChange={onChangeInput}
        placeholder={`할 일 입력하기 !`}
      />
      <button type="submit" data-testid="new-todo-add-button">
        추가
      </button>
    </div>
  );
});

export default AddForm;
