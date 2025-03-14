import { useState, useEffect } from "react"
import axios from "axios";

function SearchBar(){
    const [allGames, setAllGames] = useState([]);
  console.log(allGames);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/games`)
      .then((response) => {
        console.log(response.data);
        setAllGames(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
const [searchInputValue, setSearchInputValue] = useState("")

const handleSearchChange =(event) => {
    setSearchInputValue(event.target.value)

        const filtro = allGames.filter((eachGame) => {
            if(eachGame.name.startsWith(searchInputValue) === true){
                return true 
            } else {
                return false
            }
        })
    

}

return (

    <div>
        <h2>Search</h2>

        <input onChange={handleSearchChange} value={searchInputValue} type="text"/>
    </div>
)
}
export default SearchBar