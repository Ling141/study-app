
import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';


function CreateNoteArea(props: any) {
    type NoteInput = {
  title: string;
  content: string;
};

  const [input, setInput] = useState<NoteInput>({
    title: "",
    content: "",
  });
const { title, content } = input

function handleChange(event: any) {
    const { name, value: newValue } = event.target;
  console.log(name + ':' + newValue)
    setInput((prev) => ({ ...prev, [name]: newValue }));
    console.log(input)
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          props.onAdd({ title, content });
          setInput({ title: "", content: "" });
          e.preventDefault();
        }}
      >
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={3}
          onChange={handleChange}
          value={content}
        />
        <button type="submit"><AddIcon /></button>
      </form>
    </div>
  );
}

export default CreateNoteArea;
