import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css"

 const BookList = () => {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
 }

const Book = () => { 
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81YkqyaFVEL._AC_UL600_SR600,400_.jpg"
    alt=""
  />
)
const Title = () => <h2>Atomic Habits: An Easy & Proven Way</h2>
const Author = () => {
  const inlineHeadingStyles = 
  { color: "red", 
    fontSize:"0.75rem",
    marginTop: "0.5rem",};
  return (<h4 style={inlineHeadingStyles}>James Clear</h4>)
}


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<BookList />) 