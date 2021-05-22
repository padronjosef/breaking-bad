import React from "react";
import styled from "@emotion/styled";

const QuoteWrapper = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 800px;

  @media (min-width: 992px) {
    margin-top: 10rem;
  }

  h2 {
    font-family: Verdana, Geneva, Tahoma, sans-serif;

    text-align: right;
    color: #666;
    margin-top: 1rem;
  }

  p {
    font-size: 1.6rem;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 0;

    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const Quote = ({ quote }) => (
  <QuoteWrapper>
    <p>{quote.quote}</p>
    <h2>{quote.author}</h2>
  </QuoteWrapper>
);

export default Quote;
