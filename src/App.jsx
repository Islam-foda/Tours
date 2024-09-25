import { useState, useEffect } from "react";
import "./App.css";
import Tours from "../components/Tours.jsx";
import Title from "../components/Title.jsx";
import Loading from "../components/Loading.jsx";
function App() {
  const url = "https://www.course-api.com/react-tours-project";
  const [tours, setTours] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
function removeTour(id) {
  const newTours = tours.filter((tour)=>tour.id !== id)
  setTours(newTours)
}
  
  const fetchData = async () => {
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
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <main>
        <Title />
        {tours.length ? (
          <Tours tours={tours} removeTour={removeTour}/>
        ) : (
          <button onClick={()=>fetchData()} className="refresh">Refresh</button>
        )}
      </main>
    </>
  );
}

export default App;
