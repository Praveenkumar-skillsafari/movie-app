import React from "react";
import "./Home.css";
import { useEffect, useState } from "react";
import Card from "../Components/Card";
import NavBar from "../Components/Navbar/NavBar";
import noPageImg from "../Assets/not found.jpg";

let API_key = "&api_key=7261b732ae21161946dfe39a099d347a";
let base_url = "https://api.themoviedb.org/3";
let url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;
let arr = ["New", "Thriller", "Family", "Hot", "Comedy"];

const Home = () => {
  const [movieData, setData] = useState([]);
  const [url_set, setUrl] = useState(url);
  const [search, setSearch] = useState();
  useEffect(() => {
    fetch(url_set)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      });
  }, [url_set]);
  const getData = (movieType) => {
    if (movieType == "New") {
      url =
        base_url +
        "/discover/movie?with_genres=18&primary_release_year=2023" +
        API_key;
    }
    if (movieType == "Thriller") {
      url =
        base_url +
        "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22" +
        API_key;
    }
    if (movieType == "Family") {
      url =
        base_url +
        "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc" +
        API_key;
    }
    if (movieType == "Hot") {
      url =
        base_url +
        "/discover/movie?with_genres=18&primary_release_year=2015" +
        API_key;
    }
    if (movieType == "Comedy") {
      url =
        base_url +
        "/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc" +
        API_key;
    }
    setUrl(url);
  };
  const searchMovie = (evt) => {
    if (evt.key == "Enter") {
      url =
        base_url +
        "/search/movie?api_key=db95773a7fb212ba790d71f6adac0e7e&query=" +
        search;
      setUrl(url);
      setSearch(" ");
    }
  };
  return (
    <div className="wrapper">
      <NavBar />
      <form>
        <div className="search-btn">
          <input
            type="text"
            placeholder="Search Here..."
            className="inputText"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
            onKeyDown={searchMovie}
          ></input>
          <button>Search</button>
        </div>
      </form>
      <div className="main">
        <div className="side-bar">
          <ul id="ul">
            {arr.map((value, pos) => {
              return (
                <li>
                  <a
                    href="#"
                    key={pos}
                    name={value}
                    onClick={(e) => {
                      getData(e.target.name);
                    }}
                  >
                    {value}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="containers">
          {movieData.length == 0 ? (
            <img src={noPageImg} alt="404 no page found" />
          ) : (
            movieData.map((res, pos) => {
              return <Card info={res} key={pos} />;
            })
          )}
        </div>
      </div>
      <footer>
        <p>copy right 2023 @ moovi app</p>
      </footer>
    </div>
  );
};

export default Home;
