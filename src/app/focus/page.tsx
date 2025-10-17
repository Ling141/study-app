'use client';
import React, {useState} from "react";
import '@/styles/globals.css'
import CreateNoteArea from "@/components/CreateNoteArea";
import Notes from "@/components/Notes";


export default function Focus() {
 
const [notes, setNotes] = useState<Note[]>([]);

  function addNote(inputText: Note) {
    setNotes((prev) => {
      return [...prev, inputText];
    });
  }

  function deleteNote(id:number) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Timer />
    </div>
  );
}

