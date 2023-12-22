import React, { useState } from 'react'
import { useNotesContext } from '../hooks/useNotesContext'


import './CreateNote.css'

function CreateNote() {
    
    const year = new Date().getFullYear().toString()
    const day = new Date().getDay().toString()
    const month = new Date().getMonth().toString()
    const createdAt = `Date Created: ${month}/${day}/${year}`

    const {dispatch} = useNotesContext()


    const [title, setTitle] = useState('')
    const [description, setDecription] = useState('')
    
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const note = {title, description}
        const response = await fetch('http://localhost:3000/notes', {
            method: "POST",
            body: JSON.stringify(note),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }   
        if (response.ok) {
            setError(null)
            console.log('Note has been added')
            dispatch({type: 'CREATE_NOTE', payload: json})
        }
        setTitle('')
        setDecription('')
        console.log('New note added', json)
    }

  return (
    <form className='create-form' onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input 
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
            />
        <label htmlFor="">Description</label>
        <textarea 
            className='' 
            cols="30" rows="10"
            onChange={(e) => setDecription(e.target.value)}
            value={description}
            required
            ></textarea>
        <button className='btn' >Submit</button>
        {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default CreateNote