import React from 'react';


import React, { useState } from 'react';

const quotes = [
  {
    text: "What is important now is to recover our senses.",
    author: "Susan Sontag",
    link: "https://en.wikipedia.org/wiki/Susan_Sontag"
  },
  {
    text: "Belief in oneself and knowing who you are, I mean, that's the foundation for everything great.",
    author: "Jay-Z",
    link: "https://www.brainyquote.com/quotes/jayz_786056"
  },
  {
    text: "Not only do I not know what's going on, I wouldn't know what to do about it if I did.",
    author: "George Carlin",
    link: "https://www.brainyquote.com/quotes/george_carlin_385526"
  }
];

function App() {
function getRandomQuote() {
  const i = Math.floor(Math.random() * quotes.length);
  return quotes[i];
}

function RandomQuote() {
  const [quote, setQuote] = useState(getRandomQuote());

  function handleClick() {
    setQuote(getRandomQuote());
  }

  return (
    <div>
      <blockquote>
        <p>{quote.text}</p>
        <cite>
          <a target="_blank" href={quote.link}>
            {quote.author}
          </a>
        </cite>
      </blockquote>
      <button onClick={handleClick}>Get Quote</button>
    </div>
  );
}




function Piclink() {
  return (
    <div>
      {/* Hyperlink with an image */}
      <a href="https://www.tripsavvy.com/thmb/XIx0gfr_i-ay7XLKJRXakT6FS2M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sunset-at-la-jolla-cove-1278353139-583584d99afb438a9889e8d381b836ed.jpg">
        <img src="C:\Users\lolle\OneDrive\Documents\class-project\class-project\src\image.jpg" alt="Description of the image" />
      </a>
    </div>
  );
}};



export default App;

