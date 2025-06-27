import React, { useState, useEffect } from "react";
import quotes from "./quotes";
import "./App.css";

function App() {
  return <GetQuote />;
}

function GetQuote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  function fetchQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selected = quotes[randomIndex];
    setQuote(selected.quote);
    setAuthor(selected.author);
  }
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
      <button onClick={fetchQuote}>Get Quote</button>
      {quote && (
        <div>
          <p>"{quote}"</p>
          <p>— {author}</p>
        </div>
      )}
    </div>
  );
}

export default App;

// Snippet for fetching quotes from an API

// import "./App.css";
// import React, { useState, useEffect } from "react";
// function App() {
//   return <GetQuote />;
// }
// function GetQuote() {
//   const [quote, setQuote] = useState("Click the button to get a quote!");
//   const [author, setAuthor] = useState("—");
//   async function fetchQuote() {
//     try {
//       const response = await fetch("https://api.quotable.io/random");
//       const data = await response.json();
//       console.log(data);
//       setQuote(data.content);
//       setAuthor(data.author);
//     } catch (error) {
//       console.error("Error fetching quote:", error);
//     }
//   }
//   useEffect(() => {
//   fetchQuote();
// }, []);
//   return (
//     <div className="App">
//       <h1>Random Quote Generator</h1>
//       <button onClick={fetchQuote}>Get Quote</button>
//       {quote && (
//         <div>
//           <p>"{quote}"</p>
//           <p>— {author}</p>
//         </div>
//       )}
//     </div>
//   );
// }
// export default App;
