import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import Tour from "./Tour";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw Error("Check the url");
      const data = await response.json();
      setTours(data);
      setLoading(false);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "200px" }}>
        <h2>No tours left</h2>
        <button
          style={{
            background: "crimson",
            color: "white",
            padding: "0.5rem 1rem",
            border: "none",
            cursor: "pointer",
          }}
          onClick={fetchData}
        >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div
      className="wrapper"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        padding: "2rem",
        rowGap: "2rem",
        columnGap: "3rem",
      }}
    >
      {tours.map((item) => (
        <Tour key={item.id} {...item} tours={tours} setTours={setTours} />
      ))}
    </div>
  );
}

export default App;
