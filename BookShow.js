import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({book,onDelete,onEdit}){

  const [change,setChange]= useState(false);

    const handleDelete=()=>{
        onDelete(book.id)
    };

    const handleChange=()=>{
      setChange(!change)
    };
    
  

    let newUI = <h3>{book.title}</h3>
    if(change){
       newUI = <BookEdit book={book} onEdit={onEdit} onSubmit={handleChange}/>
    }

    return(
        <div className=" book-show card">
  <header className="card-header">
    <p className="card-header-title">
      Book Name: {newUI}
    </p>
    <button class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </header>
  <div class="card-content">
    <div class="content">
      
      <br/>
      <time datetime="2016-1-1">{}</time>
    </div>
  </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item" onClick={handleChange}>Edit Name</a>
    <a href="#" class="card-footer-item" onClick={handleDelete}>Delete Name</a>
  </footer>
</div>
    )
}
export default BookShow