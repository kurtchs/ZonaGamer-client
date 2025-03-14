import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
function GameDetail() {
  const params = useParams();
  console.log(params);
  const [gameAndComents, setAllGamesAndComents] = useState(null);
  console.log(gameAndComents);
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_SERVER_URL}/games/${
          params.gameid
        }?_embed=commentaries`
      )
      .then((response) => {
        console.log(response.data);

        setAllGamesAndComents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.gameid]);

  if (gameAndComents === null) {
    return <h3>buscando juegos</h3>;
  }

  console.log(gameAndComents.commentaries);
  

  return (
    <>
      <div key={gameAndComents.id}>
        <img src={gameAndComents.image} alt="" style={{ width: 450 }} />
        <h2>{gameAndComents.name}</h2>
        <p>{gameAndComents.info}</p>
        <p>{gameAndComents.genre.join(", ")}</p>
        <p>{gameAndComents.plataform.join(", ")}</p>
        <p>{gameAndComents.releaseData}</p>
        <p>{gameAndComents.awards.join(", ")}</p>
        <p>{gameAndComents.copiesSold}</p>
      </div>
      {gameAndComents.commentaries.map((eachComment) => {
        return (
          
            <div key={eachComment.id} style={{border:"solid blue", borderRadius: 10, margin:10}}>
              <p>{eachComment.userName}</p>
              <p>{eachComment.dayPublish}</p>
              <p>{eachComment.comment}</p>
              <p>{eachComment.favs}</p>

              <Link to={`/editcomment/${params.gameid}`}><button>Edit</button></Link>
            </div>
          
        );
    })}
    <Link to={`/commentaries/${params.gameid}`}><button>comment</button></Link>
    </>
  );
}

export default GameDetail;
