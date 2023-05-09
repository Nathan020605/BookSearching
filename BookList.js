import BookShow from "./BookShow"

function BookList({books,onDelete,onEdit}){
    const renderBook=books.map((book=>{
        return<BookShow book={book} onDelete={onDelete} onEdit={onEdit}/>
    }))
    return(
        <div className="book-list">
            {renderBook}
        </div>
    )
}
export default BookList