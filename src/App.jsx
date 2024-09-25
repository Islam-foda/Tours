import { useState, useEffect } from "react";
import "./App.css";
import Tours from "../components/Tours.jsx";
import Title from "../components/Title.jsx";
function App() {
  const url = "https://www.course-api.com/react-tours-project";
  const [tours, setTours] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data) {
          setTours(data);
        } else {
          throw new Error("No data available");
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <main>
        <Title />
        <Tours tours={tours} />
      </main>
    </>
  );
}

export default App;
