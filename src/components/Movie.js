import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: auto;
`;

const MovieBox = styled.div`
  display: flex;
  background-color: white;
  margin-bottom: 70px;
  font-weight: 2rem;
  padding: 2rem;
  border-radius: 5px;
  width: auto;
  border: 1px solid;
  color: #adaeb9;
`;

const MainImg = styled.img``;

const Ul = styled.ul`
  display: flex;
`;

const Li = styled.li`
  list-style: none;
  padding-left: 0px;
  margin-left: 5px;
`;

const Div = styled.div`
  margin-left: 3rem;
`;

const Button = styled.button`
  background-color: white;
  border: 0;
`;

const Description = styled.div`
  max-width: 20rem;
`;

function Movie({ id, coverImg, title, summary, genres }) {
  const [movieBook, setmovieBook] = useState(true);
  const onClick = () => {
    setmovieBook(!movieBook);
  };
  return (
    <Container>
      <MovieBox>
        {movieBook ? (
          <div>
            <Button onClick={onClick}>
              <MainImg src={coverImg} />
            </Button>
          </div>
        ) : (
          <>
            <Button onClick={onClick}>
              <MainImg src={coverImg} />
            </Button>
            <Div>
              <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
              </h2>
              <Ul>
                {genres.map((g) => (
                  <Li key={g}>{g}</Li>
                ))}
              </Ul>
              <Description>
                {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
              </Description>
            </Div>
          </>
        )}
      </MovieBox>
    </Container>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
