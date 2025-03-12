
import{useEffect, useState} from "react"
import axios from "axios"

function GamesListPage(){

	const [allGames, setAllGames] = useState(null)

	useEffect(() => {
		axios.get(`${import.meta.env.VITE_SERVER_URL}/allgames`)
		.then((response) => {
			console.log(response.data)
			setAllGames(response.data)
		})
		.catch((error) => {
			console.log(error)
		})
	}, [])

	if(allGames === null){
		return ( <h3>buscando juegos</h3>)
	}
	
	return(
		<>
		{allGames.map((eachGame)=>{
				 
				<li>{eachGame.name[0]}</li>
				
			})}
			</>
)
		
		
	
}

export default GamesListPage