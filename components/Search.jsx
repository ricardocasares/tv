import React, { useState } from "react";
import { Input } from "./Input";

export const Search = ({ onSubmit }) => {
  const [value, setValue] = useState();
  const onChangeHandler = ({ target: { value } }) => setValue(value);
  const onSubmitHandler = e => {
    onSubmit(value);
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Input
        defaultValue={value}
        placeholder={"Something in mind?"}
        onChange={onChangeHandler}
      />
    </form>
  );
};
