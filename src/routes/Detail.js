import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

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
    <Container>
      <DetailTitle>{loading ? "Waiting..." : `${details.title}`}</DetailTitle>
      {loading ? (
        <div></div>
      ) : (
        <div>
          <DetailImage src={details.medium_cover_image} />
          <DetailDescription>{details.description_full}</DetailDescription>
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
`;

const DetailTitle = styled.h1`
  display: flex;
  font-size: 2.5rem;
`;

const DetailImage = styled.img`
  display: flex;
`;

const DetailDescription = styled.div`
  display: flex;
  margin-top: 3rem;
`;

export default Detail;
