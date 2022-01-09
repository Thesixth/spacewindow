import React from "react";
import { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import Body from "../components/Body";
import Search from "../components/Search";

import "../styles/home.css";

function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [likeItemId, setLikeItemId] = useState(null);
  const [like, setLike] = useState("false");
  const [searchDate, setSearchDate] = useState("");
  const handleLikes = (title) => {
    setLike((like) => !like);
    setLikeItemId(title);
  };
  const handleSearch = (e) => {
    // handles search input
    setSearchDate(e.target.value);
  };
  const fetchData = async (searchDate) => {
    const endpoint = searchDate
      ? `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&date${searchDate}&count=12`
      : `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&count=12`;

    await fetch(endpoint)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetchData();
  }, [searchDate]);
  console.log(searchDate);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else {
    return (
      <Container className="home">
        <Search handleSearch={handleSearch} searchDate={searchDate} />
        <Body
          items={items}
          handleLikes={handleLikes}
          like={like}
          likeItemId={likeItemId}
        />
      </Container>
    );
  }
}

export default Home;
