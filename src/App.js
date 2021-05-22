import React, { useState, useEffect } from "react";
import Quote from "./components/Quote"
import styled from "@emotion/styled";

const Button = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 1rem;
  padding: .6rem 1rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s easy;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const App = () => {
  const [quote, setQuote] = useState({})

  const ConsultAPI = async () => {
    const API = await fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes");
    const QUOTE = await API.json()
    setQuote(QUOTE[0])
  }

  useEffect(() => {
    ConsultAPI()
  }, []);

  return (
    <Container>
      <Quote quote={quote}/>
      <Button
        onClick={ConsultAPI}
      >Get a quote</Button>
    </Container>
  );
};

export default App;
