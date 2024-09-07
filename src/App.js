import React from "react";
import "./Styles/App.css";
import "./Styles/Animals.css"
import Cat from "./components/Cat";
import Dog from "./components/Dog";
import Tiger from "./components/Tiger";
import Elephant from "./components/Elephant";
import Rabbit from "./components/Rabbit";
import Rat from "./components/Rat";
import Fox from "./components/Fox";
import Cheetah from "./components/Cheetah";
import Hyena from "./components/Hyena";
import Monkey from "./components/Monkey";
import Animals from "./components/Animals";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default function App() {
  return (
  	<>
	    <Router>
  		<Animals/>
	      <Routes>
	      	<Route path="/rat" element={<Rat/>}/>
	      	<Route path="/fox" element={<Fox/>}/>
	      	<Route path="/cat" element={<Cat/>}/>
	      	<Route path="/cheetah" element={<Cheetah/>}/>
	      	<Route path="/dog" element={<Dog/>}/>
	      	<Route path="/elephant" element={<Elephant/>}/>
	      	<Route path="/hyena" element={<Hyena/>}/>
	      	<Route path="/monkey" element={<Monkey/>}/>
	      	<Route path="/rabbit" element={<Rabbit/>}/>
	      	<Route path="/tiger" element={<Tiger/>}/>
	      </Routes>
	    </Router>
    </>
    );
}