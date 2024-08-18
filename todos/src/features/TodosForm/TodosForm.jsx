import React, { useState } from "react";

const TodosForm = ({ handleAddTodos }) => {
  const [text, setText] = useState("");

  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setText("");
    handleAddTodos(text);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
    <input
          className="form_input"
          value={text}
          type="text"
          required
          placeholder="Enter task text..."
          onChange={handleChangeText}
        />
        <button className="form__btn">Add task</button>
      </form>
    </>
  );
};

export default TodosForm;
