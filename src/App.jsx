import React, { useEffect } from 'react'
import { useNotesContext } from './hooks/useNotesContext'

import './App.css'
import NotesList from './components/NotesList'
import CreateNote from './components/CreateNote'

function App() {
  // const [notes, setNotes] = useState([]) //<- not needed due to React Context
  const {notes, dispatch} = useNotesContext() // destructuring

    useEffect(() => {
        const fetchNotes = async () => {
          const response = await fetch('http://localhost:3000/notes');
          const json = await response.json()

          if(response.ok) {
            // setNotes(json) <- not needed bc using context api
            dispatch({type: 'SET_NOTES', payload: json})
          }
        }
        fetchNotes();
    }, []);

    // const handleDelete = (id) => {
    //   const newNotes = notes.filter(note => note.id !== id)
    //   setNotes(newNotes)
    // }

   
  return (
    <>
      <h1 >Notes App</h1>
      <div className="container">
        <CreateNote  />
        <div className='notes-container'>
        {notes && notes.map((note) => (
          <NotesList note={note} key={note.id} />
        ))}
        </div>
      </div>
    </>
  )
}

export default App
