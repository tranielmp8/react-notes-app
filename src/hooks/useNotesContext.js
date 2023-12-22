import { NotesContext } from "../context/NoteContext";
import { useContext } from "react";

export const useNotesContext = () => {
  const context = useContext(NotesContext)

  // check if we are within the scope of the context
  if (!context) {
    throw Error('useNotesContext must be used inside a NotesContextProvider')
  }

  return context;
}