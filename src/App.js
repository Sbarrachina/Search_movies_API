import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useState } from "react";
import './App.css';


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = process.env.REACT_APP_OMDB_API_KEY;
    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setMovies(data.Search));
  }

  function handleSearchTermChange(event) {
    setSearchTerm(event.target.value);
  }

  function MovieCard({ movie }) {
    return (
      <Card className="movie-card">
      <Card.Img variant="top" src={movie.Poster} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Year}</Card.Text>
      </Card.Body>
    </Card>
      
    );
  }

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h1>Movie Search App</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Search for a movie</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter movie title"
                  value={searchTerm}
                  onChange={handleSearchTermChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Search
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="row">
          {movies.map((movie) => (
            <Col key={movie.imdbID} className="col">
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;

