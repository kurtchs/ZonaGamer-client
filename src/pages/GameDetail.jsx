import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
function GameDetail() {
  const params = useParams();
  console.log(params);
  const [allGamesAndComents, setAllGamesAndComents] = useState(null);
  console.log(allGamesAndComents);
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
  }, []);

  if (allGamesAndComents === null) {
    return <h3>buscando juegos</h3>;
  }

  console.log(allGamesAndComents.commentaries);

  return (
    <>
      <div key={allGamesAndComents.id}>
        <img src={allGamesAndComents.image} alt="" style={{ width: 450 }} />
        <h2>{allGamesAndComents.name}</h2>
        <p>{allGamesAndComents.info}</p>
        <p>{allGamesAndComents.genre.join(", ")}</p>
        <p>{allGamesAndComents.plataform.join(", ")}</p>
        <p>{allGamesAndComents.releaseData}</p>
        <p>{allGamesAndComents.awards.join(", ")}</p>
        <p>{allGamesAndComents.copiesSold}</p>
      </div>
      {allGamesAndComents.commentaries.map((eachComment) => {
        return (
          
            <div key={eachComment.id} style={{border:"solid blue", borderRadius: 10, margin:10}}>
              <p>{eachComment.userName}</p>
              <p>{eachComment.dayPublish}</p>
              <p>{eachComment.comment}</p>
              <p>{eachComment.favs}</p>
            </div>
          
        );
    })}
    <Link to={`/commentaries/${params.gameid}`}><button>comment</button></Link>
    </>
  );
}

export default GameDetail;
