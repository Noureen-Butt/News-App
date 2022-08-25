import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [progress, setProgress] = useState(0);

  const key = process.env.REACT_APP_NEWS_API;
  const page = 9;

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <LoadingBar progress={progress} color="red" />
        <Routes>
          <Route
            path="home"
            element={
              <News
                progress={setProgress}
                apiKey={key}
                key="general"
                pageSize={page}
                country="in"
                category="general"
              />
            }
          ></Route>
          <Route
            path="business"
            element={
              <News
                progress={setProgress}
                apiKey={key}
                key="business"
                pageSize={page}
                country="in"
                category="business"
              />
            }
          ></Route>
          <Route
            path="entertainment"
            element={
              <News
                progress={setProgress}
                apiKey={key}
                key="entertainmet"
                pageSize={page}
                country="in"
                category="entertainmet"
              />
            }
          ></Route>
          <Route
            path="health"
            element={
              <News
                progress={setProgress}
                apiKey={key}
                key="health"
                pageSize={page}
                country="in"
                category="health"
              />
            }
          ></Route>
          <Route
            path="science"
            element={
              <News
                progress={setProgress}
                apiKey={key}
                key="science"
                pageSize={page}
                country="in"
                category="science"
              />
            }
          ></Route>
          <Route
            path="technology"
            element={
              <News
                progress={setProgress}
                apiKey={key}
                key="technology"
                pageSize={page}
                country="in"
                category="technology"
              />
            }
          ></Route>
          <Route
            path="sports"
            element={
              <News
                progress={setProgress}
                apiKey={key}
                key="sports"
                pageSize={page}
                country="in"
                category="sports"
              />
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
