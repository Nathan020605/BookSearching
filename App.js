import { useState } from "react";
import BookCreate from "./BookCreate";
import BookList from "./BookList";
import 'bulma/css/bulma.css'
import './index.css'


function App(){
    const [books,setBooks] = useState([]);

    const createBook=(title)=>{
        const updatingBook=[
            ...books,
            {
                id:Math.floor(Math.random()*9999),
                title,
            }
        ]
        setBooks(updatingBook)
    }

    const handleDelete = (id)=>{
        const updatingBook = books.filter((book)=>{
            return book.id !== id;
        })  
        setBooks(updatingBook)
    }
    const handleEdit = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
          if (book.id === id) {
            return { ...book, title: newTitle };
          }
    
          return book;
        });
        setBooks(updatedBooks);
      };
   
    
    return(
        <div>
            <BookList books={books} onDelete={handleDelete} onEdit={handleEdit}/>
            <BookCreate onCreate={createBook}/>
        </div>
    )
}

export default App;
