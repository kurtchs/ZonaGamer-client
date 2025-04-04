import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from '../components/SearchBar';
function GamesListPage() {

  const [allGames, setAllGames] = useState(null);
//   console.log(allGames);

const [ searchInputValue, setSearchInputValue ] = useState("")

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/games`)
      .then((response) => {
        // console.log(response.data);
        setAllGames(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (allGames === null) {
    return <h3>buscando juegos</h3>;
  }

  const filteredGames = allGames.filter(function (game) {
	return game.name.toLowerCase().includes(searchInputValue.toLowerCase());
  })
  

  return (
	<>
	<SearchBar searchInputValue={searchInputValue} setSearchInputValue={setSearchInputValue}/>

	  <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
		{filteredGames.map((eachGame) => (
		  <Link to={`/games/${eachGame.id}`} key={eachGame.id} style={{ textDecoration: 'none' }}>
			<div style={{
			  display: "flex", 
			  flexDirection: "column", 
			  alignItems: "center", 
			  justifyContent: "center", 
			  border: "solid blue", 
			  margin: 20, 
			  width: 300, 
			  height: 450, 
			  borderRadius: "20px",
			  padding: "10px",
			}}>
			  <img src={eachGame.image} style={{ width: 250 }} alt="" />
			  <h3>{eachGame.name}</h3>
			  <p>{eachGame.plataform.join(", ")}</p>
			</div>
		  </Link>
		))}
	  </div>
	</>
  );
}

export default GamesListPage;
