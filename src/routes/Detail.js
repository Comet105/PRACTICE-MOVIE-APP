import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setDetails(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <h1>{loading ? "Waiting..." : `${details.title}`}</h1>
      {loading ? (
        <div></div>
      ) : (
        <div>
          <img src={details.medium_cover_image} />
        </div>
      )}
    </div>
  );
}

export default Detail;
