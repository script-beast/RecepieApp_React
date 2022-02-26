import React from "react";
import './App.css';
import FinalPage from "./Components/FinalPage";
import HomePage from "./Components/HomePage";
import SampleList from "./Components/SampleList";
import Data from "./Data.json";
import { Route, Routes } from 'react-router-dom';

function App() {

  const [Ingreobj, setIngreobj] = React.useState(Data.Ingredient)
  const [Spireobj, setSpireobj] = React.useState(Data.Spice)
  const [inpurecepie, setInpurecepie] = React.useState("");

  return (
    <div>
    <Routes>
        <Route exact path='/' element={<HomePage />}></Route>
        <Route exact path='/step1' element={<SampleList data={Ingreobj} setdata={setIngreobj} title={'Ingredients'} inpurecepie={inpurecepie} setInpurecepie={setInpurecepie} />}></Route>
        <Route exact path='/step2' element={<SampleList data={Spireobj} setdata={setSpireobj} title={'Spices'} inpurecepie={inpurecepie} setInpurecepie={setInpurecepie} />}></Route>
        <Route exact path='/final' element={ <FinalPage Ingreobj ={Ingreobj} Spireobj={Spireobj} inpurecepie={inpurecepie}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
