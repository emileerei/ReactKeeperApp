import React, {useState} from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
  // notes should be an array of objects
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [
        ...prevNotes,
        newNote
      ];
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => {
        return (
          <Note 
            key={index}
            id={index}
            title={note.title}
            content={note.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;