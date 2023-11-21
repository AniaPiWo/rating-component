import "./App.css";
import Rating from "./components/Rating/Rating";
import CreditCard from "./components/CreditCard/CreditCard";

function App() {
  const defaultRating = localStorage.getItem("starRating");

  return (
    <div className="container">
      <div>
        <CreditCard />
      </div>
      <div className="container">
        <Rating
          defaultRating={defaultRating ? parseInt(defaultRating, 5) : undefined}
          icon="❤"
          color="hotpink"
        />
      </div>
    </div>
  );
}

export default App;
