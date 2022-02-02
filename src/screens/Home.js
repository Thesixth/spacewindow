import React from "react";
import { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Datepicker from "../components/Datepicker";

import "../styles/home.css";

function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  //search date for when a user selects a date to view images from
  const [searchDate, setSearchDate] = useState("");
  // likes to keep track of liked images
  const [likes, setLikes] = useState([]);

  const handleLikes = (id) => {
    if (likes.includes(id)) {
      setLikes(likes.filter((itemId) => itemId !== id));
    } else {
      let newLikes = [...likes];
      newLikes.push(id);
      setLikes(newLikes);
    }
  };

  function handleSearchDate(e) {
    setSearchDate(e.target.value);
  }
  const fetchData = async (searchDate) => {
    // is there a search date ?
    const endpoint = searchDate
      ? `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&date${searchDate}&count=12`
      : `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&count=12`;

    await fetch(endpoint)
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        setItems(result);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [searchDate]);
  console.log(searchDate);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <Spinner className="spinner" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else {
    return (
      <Container className="home">
        <Datepicker
          handleSearchDate={handleSearchDate}
          searchDate={searchDate}
        />
        <Body items={items} handleLikes={handleLikes} likes={likes} />
        <Footer />
      </Container>
    );
  }
}

export default Home;
