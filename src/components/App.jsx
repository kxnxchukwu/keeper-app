import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {

    const [notes, setNotes] = useState([]);

    function addnote(newNote) {
        setNotes((prevItems) => {
            return [...prevItems, newNote];
          });
    }

    
    function deletenote(id) {
    setNotes((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
    }

    return (
    <div>
    <Header />
    <CreateArea addnote = {addnote} />
    {
        notes.map((note, index) => (<Note key={note.index} id = {index} title={note.title} content={note.content} deletenote = {deletenote} />))
    }
    <Footer />
    </div>
    );  
}

export default App;