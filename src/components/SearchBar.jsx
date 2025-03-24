import { useState, useEffect } from "react"
import axios from "axios";

function SearchBar(props){

  //   const [allGames, setAllGames] = useState([]);
    

  // console.log(allGames);
  // useEffect(() => {
  //   axios
  //     .get(`${import.meta.env.VITE_SERVER_URL}/games`)
  //     .then((response) => {
  //       console.log(response.data);
  //       setAllGames(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

const handleSearchChange =(event) => {
    props.setSearchInputValue(event.target.value)

        // const filtro = allGames.filter((eachGame) => {
        //     if(eachGame.name.startsWith(searchInputValue) === true){
        //         return true 
        //     } else {
        //         return false
        //     }
        // })
        // setAllGames(filtro)

}

return (

    <div>
        <h2>Search</h2>

        <input onChange={handleSearchChange} value={props.searchInputValue} type="text"/>
    </div>
)
}
export default SearchBar