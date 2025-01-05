import "./App.css";
import kanyakumariPic from "./img/kanyakumari.png";

function App() {
  function handleClick() {
    const imgEl = document.querySelector(".imgKanyakumari");
    const modalEl = document.querySelector(".modal");
    imgEl.classList.toggle("zoom");
    modalEl.classList.toggle("show-modal");
  }

  return (
    <div className="App">
      <img
        src={kanyakumariPic}
        alt="pic of kanyakumari"
        onClick={handleClick}
        className="imgKanyakumari"
      />
      <div className="modal"></div>
    </div>
  );
}

export default App;
