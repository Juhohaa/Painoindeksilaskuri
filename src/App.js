import { useState } from "react";

function App() {

  const [lasku, tulos] = useState("");
  const [pituus, setPituus] = useState("");
  const [paino, setPaino] = useState("");


  const laskePainoindeksi = () => {

    let pyoristetty = paino / (pituus/100) / (pituus/100);

    pyoristetty = pyoristetty.toFixed(2);

    tulos(pyoristetty);

  }

  return (
    <div className="container">
      <h1>Painoindeksilaskuri</h1>
      <form>
        <br></br>
        <input className="form-control" 
               type="text"
               placeholder="Pituus senttimetreinä"
               onChange={(e) => {
                 setPituus(e.target.value);
               }} /><br/>
                
        <input className="form-control"
               type="text"
               placeholder="Paino kilogrammoina"
               onChange={(e) => {
                setPaino(e.target.value);
               }} /><br/>
      </form>
      <button className="btn btn-primary" onClick={laskePainoindeksi}>Laske painoindeksi</button><br/><br/>
      
      {(lasku < 15 && lasku > 0) ? <p div className="alert alert-danger" role="alert">Painoindeksi on: {lasku}. Sairaallinen alipaino</p> : null}
      {(lasku >= 15 && lasku < 17) ? <p div className="alert alert-warning" role="alert">Painoindeksi on: {lasku}. Merkittävä alipaino</p> : null}
      {(lasku >= 17 && lasku < 18.5) ? <p div className="alert alert-primary" role="alert">Painoindeksi on: {lasku}. normaalia alhaisempi paino</p> : null}
      {(lasku >= 18.5 && lasku < 25) ? <p div className="alert alert-success" role="alert">Painoindeksi on: {lasku}. Normaali paino</p> : null}
      {(lasku >= 25 && lasku < 30) ? <p div className="alert alert-primary" role="alert">Painoindeksi on: {lasku}. Lievä ylipaino</p> : null}
      {(lasku >= 30 && lasku < 35) ? <p div className="alert alert-warning" role="alert">Painoindeksi on: {lasku}. Merkittävä ylipaino</p> : null}
      {(lasku >= 35 && lasku < 40) ? <p div className="alert alert-danger" role="alert">Painoindeksi on: {lasku}. Vaikea ylipaino</p> : null}
      {(lasku > 40) ? <p div className="alert alert-danger" role="alert">Painoindeksi on: {lasku}. Sairaalloinen ylipaino</p> : null}

    </div>
  );
}

export default App;
