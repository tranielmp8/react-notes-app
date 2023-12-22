import { useState } from 'react'
import { useNotesContext } from '../hooks/useNotesContext'

//CSS
import './NotesList.css'

function NotesList({note}) {
  const { dispatch} = useNotesContext()

  //toggle important style
  const [isCompleted, setCompleted] = useState(false);
  const toggleClass = () => {
    setImportant(!isImportant)
  }

  //Delete
  const handleDelete = async() => {
    const response = await fetch('http://localhost:3000/notes/' + note.id, {
      method: 'DELETE'
    })
    const json = await response.json()
  
    if(response.ok) {
      dispatch({type: 'DELETE_NOTE', payload: json})
      window.location.reload()
    }
  }


  return (
    // <div className={isImportant ? 'active' : ''} onClick={toggleClass}>
    <div 
      className="notes active"
      onClick={toggleClass}
    >
          <h2 className='title'>{note.title}</h2>
          <p className="description">
          {note.description}
          </p>
          {/* <div className="date">
          {note.date}
          </div> */}
          <div className="btns">
            <span className="delete-btn" onClick={handleDelete} >delete</span>
          </div>
          <div className="completed">
            <i class="fa-solid fa-check"></i>
          </div>    
    
    </div>
    // </div>
  )
}

export default NotesList