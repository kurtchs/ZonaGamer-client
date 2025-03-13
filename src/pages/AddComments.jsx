import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function AddComment() {
    console.log("funcionando");
    const params = useParams();
    const navigate = useNavigate()

    const [allGames, setAllGames] = useState(null);
    const [nameInputValue, setNameInputValue] = useState("");
    const [commentInputValue, setCommentInputValue] = useState("");
    const [dateInputValue, setDateInputValue] = useState("");
  
    
    const handleNameInputChange = (event) => {
      console.log(event.target.value);
      setNameInputValue(event.target.value);
    };
  
    const handleCommentInputChange = (event) => {
      console.log(event.target.value);
      setCommentInputValue(event.target.value);
    };
  
    const handleDateInputChange = (event) => {
      console.log(event.target.value);
      setDateInputValue(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("comentando");
  
      
      axios
        .post(
          `${import.meta.env.VITE_SERVER_URL}/commentaries`,
          {
            name: nameInputValue,
            comment: commentInputValue,
            date: dateInputValue,
          }
        )
        .then((response) => {
          console.log(response.data);
          setAllGames(response.data); 
          navigate(`/games/${params.gameid}`)
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    
  
    
    console.log(allGames); 
    
  
    return (
      <div>
        <h2>Añadir Comentario</h2>
  
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">User Name: </label>
            <input
              onChange={handleNameInputChange}
              value={nameInputValue}
              type="text"
              name="name"
            />
          </div>
  
          <div>
            <label htmlFor="comment">Comment: </label>
            <input
              onChange={handleCommentInputChange}
              value={commentInputValue}
              type="text"
              name="comment"
            />
          </div>
  
          <div>
            <label htmlFor="date">Date: </label>
            <input
              onChange={handleDateInputChange}
              value={dateInputValue}
              type="text"
              name="date"
              required
            />
          </div>
  
          <button type="submit">Add Comment</button>
        </form>
      </div>
    );
  }

export default AddComment;
