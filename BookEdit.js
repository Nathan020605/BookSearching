import { useState } from "react"

function BookEdit({onEdit,book,onSubmit}){

    const [title,setTitle] = useState(book.title)

    const handleEdit=(event)=>{
        setTitle(event.target.value)
    }

    const handSubmit=(event)=>{
        event.preventDefault();
        onEdit(book.id,title)
        onSubmit()
    }

    return(
        <div>
            <form onSubmit={handSubmit}>
                <label>Change your Book Name</label>
                <input value={title} onChange={handleEdit}/>
                <button>Save</button>
            </form>
        </div>
    )
}
export default BookEdit