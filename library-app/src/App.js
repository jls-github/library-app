import './App.css';
import React from 'react'
import LibraryLocation from './components/LibraryLocation.js'
import Book from './components/Book.js'

const data = [
  {title: "A really cool book", author: "Alvee"},
  {title: "Eloquent Javascript", author: undefined},
  {title: "Steve Jobs", author: "Walter Isaacson"},
  {title: "Outliers", author: "Malcolm Gladwell"}
]

function App() {
  return (
    <div className="App">
      <LibraryLocation location="SEATTLE" />
      {/* <Book title="A really cool book" author="Alvee" />
      <Book title="Eloquent Javascript" author="Someone"/>
      <Book title="Steve Jobs" author="Walter Isaacson" />
      <Book title="Outliers" author="Malcolm Gladwell"/> */}
      {data.map((book, index) => <Book title={book.title} author={book.author} key={"book-" + index}/>)}
    </div>
  );
}

export default App;
