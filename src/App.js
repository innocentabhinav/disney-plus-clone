import React from 'react';
import Header from './components/Header';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './components/Home';
import Detail from './components/Detail';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/home/detail/:id" element={<Detail />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
