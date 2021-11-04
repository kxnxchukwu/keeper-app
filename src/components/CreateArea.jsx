import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false)
    const [note, setNote] = useState({
        title: "",
        content: ""
      });
    
      function handleChange(event) {
        let { value, name } = event.target;
    
        setNote((prevValue) => {
          return {
            ...prevValue,
            [name]: value
          };
        });
      }

      function handleSubmit(event) {
        event.preventDefault();
        props.addnote(note)
        setNote({
            title: "",
            content: ""
        });
      }

      function expand() {
          setExpanded(true);
      }

  return (
    <div>
      <form className="create-note">
      {
          isExpanded && <input name="title" placeholder="Title" value = {note.title} onChange= {handleChange}/>
      }
        <textarea onClick={expand} name="content" placeholder="Take a note..." rows= {isExpanded ? 3 : 1}value = {note.content} onChange={handleChange} />
        <Zoom in = {isExpanded}>
        <Fab onClick = {handleSubmit}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;