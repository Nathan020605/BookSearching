import { useState } from "react"
function BookCreate({onCreate}){
    const [title,setTitle]=useState('');
    const handleTitle=(event)=>{
       setTitle(event.target.value)
    }
    const handSubmit=(event)=>{
        event.preventDefault();
        onCreate(title)
        setTitle('')
    }
    return(
    <div>
        <form onSubmit={handSubmit}>
            <label className="is-size-5">Searching</label>
            <input className="input is-samll" value={title} onChange={handleTitle} placeholder="Book Name" />
        </form>
    </div>)
}
export default BookCreate