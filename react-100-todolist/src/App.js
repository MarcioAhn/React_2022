import "./App.css";
import "./w3css.css";
import BucketMain from "./components/TodoMain";

function App() {
  return (
    <div className="App">
      <header className="App-header">오늘 할 일</header>
      <section className="w3-container w3-margin">
        <BucketMain />
      </section>
    </div>
  );
}

export default App;
