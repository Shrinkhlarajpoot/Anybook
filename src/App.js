import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  Fiction: [
    { name: "Nineteen Eighty-Four", rating: "4.5/5" },
    { name: "The Great Gatsby", rating: "4/5" },
    { name: "Lolita", rating: "3.5/5" },
    { name: "Pride and Prejudice", rating: "3.5/5" }
  ],
  Mystery: [
    {
      name: "Gone Girl",
      rating: "5/5"
    },
    {
      name: "The Women in White",
      rating: "4.5/5"
    },
    {
      name: "And Then There Were None",
      rating: "4/5"
    }
  ],

  Personality_Developement: [
    {
      name: "The 7 Habits of Highly Effective People",
      rating: "4.1/5"
    },
    {
      name: "Think and Grow Rich",
      rating: "4.2/5"
    },
    {
      name: "The Monk Who Sold His Ferrari: The 7 Stages of Self-Awakening",
      rating: "3.9/5"
    }
  ],
  History: [
    {
      name: "Records of the grand Historians",
      rating: "4/5"
    },
    {
      name: "The Rise of the West",
      rating: "5/5"
    },
    {
      name: "The Outline of History",
      rating: "5/5"
    }
  ],
  Novel: [
    {
      name: "The Catcher in the Rye",
      rating: "4.7/5"
    },
    {
      name: "To kill a Mockingbird",
      rating: "5/5"
    }
  ],
  Web_development: [
    {
      name: "JavaScript and JQuery",
      rating: "4.7/5"
    },
    {
      name: " HTML&CSS",
      rating: "5/5"
    }
  ],
  FairyTale: [
    {
      name: "Beauty and the Beast",
      rating: "4.7/5"
    },
    {
      name: "The Tinderbox",
      rating: "5/5"
    },
    {
      name: "Cinderella",
      rating: "4.1/5"
    }
  ],
  Business: [
    {
      name: "Never Split the Difference",
      rating: "3.5/5"
    },
    {
      name: "Loonshots",
      rating: "5/5"
    },
    {
      name: "The Lean Startup",
      rating: "4.1/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 📚 ANY BOOK 📚 </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Here's a list of Amazing Books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "white",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                backgroundColor: "white"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
