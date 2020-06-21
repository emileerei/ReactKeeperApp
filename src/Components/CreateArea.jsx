import React, {useState} from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [inputText, setInputText] = useState({
    title: "",
    content: ""
  });
  const [isExpanded, setExpand] = useState(false);

  function handleChange(event) {
    const {name, value} = event.target;
    setInputText(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    });
  }

  function submitNote(event) {
    props.onAdd(inputText);
    setInputText({
      title: "",
      content: ""
    });

    event.preventDefault();
  }

  function showTitle() {
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        <input 
          name="title" 
          autocomplete="off"
          onChange={handleChange} 
          placeholder="Title" 
          type={isExpanded ? null : "hidden"}
          value={inputText.title} 
        />
        <textarea 
          name="content" 
          autocomplete="off"
          onChange={handleChange} 
          onClick={showTitle}
          placeholder="Take a note..." 
          rows={isExpanded ? "3" : "1"} 
          value={inputText.content}
        />
        <Zoom in={isExpanded ? true : null}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  )
}

export default CreateArea;