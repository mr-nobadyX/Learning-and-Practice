import React, { useState } from "react";
import Search from "./components/Search";

const App = () => {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <main>
       <div  className="pattern" />

       <div className="wrapper">

        <img src="./life.jpg" alt="hero-banner" />
          <header>
            <h1>Find the <span className="text-gradient"> Movie </span> which u love without hassle</h1>
          </header>

          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <h1 className="text-white"> {searchTerm}</h1>
       </div>
    </main>
  )
}

export default App;