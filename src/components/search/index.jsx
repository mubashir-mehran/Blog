import { handleSubmit } from "@/src/utils/form";
import { useState } from "react";

export default function Seacrh() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        style={{
          border: "1px solid lightgrey",
          padding: "8px",
          borderTopLeftRadius: "50px",
          borderBottomLeftRadius: "50px",
          fontWeight:'bold',
        }}
        type="Search"
        placeholder="Search blogs ... "
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        style={{
          border: "1px solid lightgrey",
          background:'lightgrey',
          fontWeight:'bold',
          padding: "8px 15px",
          borderTopRightRadius: "50px",
          borderBottomRightRadius: "50px",
          cursor:'pointer'
        }}
        type="button"
        value={"Search"}
        onClick={() => handleSubmit(text)}
      />
    </div>
  );
}
