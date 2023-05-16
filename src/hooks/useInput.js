import { useState } from "react";

export default function useInput(defaultValue) {
  const [input, setInput] = useState(defaultValue);
  const handleInput = (event) => setInput(event.target.value);
  // const clearInput
  return [input, handleInput];
}
