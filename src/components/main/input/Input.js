import { useState } from "react";
import Button from "../button/Button";

const Input = () => {
  const [input, setInput] = useState("");

  return (
    <>
      <div className="dark:bg-veryDarkBlue flex h-14 mt-8 rounded-tr-md rounded-br-md">
        <input
          className="w-70 md:w-4/5 h-full dark:bg-veryDarkBlue dark:text-darkGrayishBlue dark:placeholder-darkGrayishBlue rounded-none outline-none bg-none pl-5 rounded-bl-md rounded-tl-md"
          type="text"
          placeholder="Create a new todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <Button input={input} setinput={setInput} />
      </div>
    </>
  );
};

export default Input;
