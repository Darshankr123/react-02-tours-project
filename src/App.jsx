import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  const fetchTours = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();

      setTours(data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length < 1) {
    return (
      <div className="title">
        <h3>No tours Left</h3>
        <div className="title-underline"></div>
        <button
          type="button"
          className="btn"
          style={{
            marginTop: "2rem",
          }}
          onClick={fetchTours}
        >
          refetch
        </button>
      </div>
    );
  }

  return (
    <main className="container">
      <h3 className="title">Our Tours </h3>
      <div className="title-underline"></div>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
