import logo from "./logo.svg";
import "./App.css";
import Row from "./Components/Row";
import Request from "./Backend/Request";
import Banner from "./Components/Banner";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="app">
      {/* NavBar */}
      <NavBar></NavBar>


      {/* Banner */}

      <Banner></Banner>

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={Request.fetchNetflixOriginals}
        isLargeRow
      
      />
      <Row title="Trending Now" fetchUrl={Request.fetchTrending} />

      <Row title="Top Rated" fetchUrl={Request.fetchTopRated} />

      <Row title="Action Movie" fetchUrl={Request.fetchActionMovies} />

      <Row title="Comedy" fetchUrl={Request.fetchComedyMovies} />

      <Row title="Horror" fetchUrl={Request.fetchHorrorMovies} />

      <Row title="Romance" fetchUrl={Request.fetchRomanceMovies} />

      <Row title="Documentaries" fetchUrl={Request.fetchDocumentaries} />

    </div>
  );
}

export default App;
