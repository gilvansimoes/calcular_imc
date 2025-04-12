import { data } from './data/data.js';
import { useState } from 'react';

import ImcCalc from './components/imcCalc';
import ImcTable from './components/ImcTable';

import './App.css';
import Footer from './components/Footer.jsx';

function App() {
  const calcImc = (e, heigth, weigth) => {
    e.preventDefault();

    if (!heigth || !weigth) return;

    const weigthFloat = parseFloat(weigth.replace(",", "."));
    const heigthFloat = parseFloat(heigth.replace(",", "."));

    const imcResult = (weigthFloat / (heigthFloat * heigthFloat)).toFixed(1);

    setImc(imcResult);
    
    data.forEach((item) => {
      if(imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    })
    if (!info) return;
  };

  const resetCalc = (e) => {
    e.preventDefault();

    setImc("");
    setInfo("");
    setInfoClass("");
  }

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  return (
    <>
    <div className="container">
      {!imc ? <ImcCalc calcImc={calcImc} /> : <ImcTable data={data} imc={imc} info={info} infoClass={infoClass} resetCalc={resetCalc} />}
      <Footer />
    </div>
    </>
  )
}

export default App
