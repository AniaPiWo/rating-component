import "./App.css";
import Stars from "./components/Stars";

function App() {
  const defaultRating = localStorage.getItem("starRating");

  return (
    <>
      <Stars
        defaultRating={defaultRating ? parseInt(defaultRating, 5) : undefined}
        icon="❤"
        color="hotpink"
      />
    </>
  );
}

export default App;
