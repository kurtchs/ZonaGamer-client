import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"



function EditComment(){
const [userName, setUserName] = useState("")
const [comment, setComment] = useState("")
const [date, setDate] = useState("")

const params = useParams()
console.log(params)
const navigate = useNavigate()
useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/editcomment/${params.gameid}`)
    .then((response) => {
        
        console.log("recibiendo datos")
        console.log(response)
        setUserName(response.data.userName)
        setComment(response.data.comment)
        setDate(response.data.dayPublish)

    })
    .catch((error) => {
        console.log(error)
    })
}, [])

const handleFormSubmit = async (e) => {
    e.preventDefault()
   

try{

    await axios.put(`${import.meta.env.VITE_SERVER_URL}/editcomment/${params.commentid}`, {
        userName: userName,
        comment: comment,
        dayPublish: date
    })
    navigate(`/games/${params.gameid}`)

    

}catch (error) {
    console.log(error)
}

}
const handleDelete =(e) => {
    e.preventDefault()
    axios.delete(`${import.meta.env.VITE_SERVER_URL}/commentaries/${
          params.commentid
        }`)
        .then(() =>  {
console.log( "comment eliminado")


navigate(`/games/${params.gameid}`)
        })
        .catch((error) => {
            console.log(error)
        })}


    return(
        <>
        <h3>Edit Comment</h3>
  
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="name">User Name: </label>
            <input
              value={userName} 
              type="text"
              name="name"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="comment"> Comment : </label>
            <input 
              value={comment} 
              type="text"
              name="name"
              onChange={(e) => setComment(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="date">Date: </label>
            <input
              value={date} 
              type="text"
              name="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <button type="submit">Save</button>
        </form>
        

          <button onClick={handleDelete} >Delete</button>
      </>
    )
}

export default EditComment