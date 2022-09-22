import styled from "styled-components";

export const Button = styled.a`
  font-size: 1.1rem;
  padding: 10px;
  color: white;
  min-width: 220px;

  background-color: #40b883;
  text-decoration: none;
  border-radius: 0.5rem;
  border: 1px solid white;
  font-family: sans-serif;
  transition: 200ms ease-in;
  &:hover {
    background-color: rgb(255, 255, 255, 0.2);
    color: white;
  }
  margin-top: 1rem;
  padding: 0.5em 1.2em;
  display: inline-block;
  border: 0.8px solid white;
`;
