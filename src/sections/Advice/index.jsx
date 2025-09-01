import { useEffect, useState } from "react"


function AdviceSection() {
  

      const [data, setData] = useState({"slip": { "id": 0, "advice": "Dummy"}});
    const [fav, setFav] = useState(["Dummy", "strings"]);

    
      useEffect(() =>{
        fetch('https://api.adviceslip.com/advice')
        .then(response => {
          return response.json();
        })
        .then (jsonData =>{
          setData(jsonData);
          console.log(data);
    
    
        })
        .catch(error => {
          console.log("EERRORORR");
          console.log(error);
        })
        
    
      }, []);

  const update = () =>{
        
    fetch('https://api.adviceslip.com/advice')
        .then(response => {
          return response.json();
        })
        .then (jsonData =>{
          setData(jsonData);
          console.log(data);
    
    
        })
        .catch(error => {
          console.log("EERRORORR");
          console.log(error);
        })
  };



  
  
  return (
    <section>
      <h2>Advice Section</h2>
  <section className="adivce-slip">
    <h3>Some Advice</h3>

    {<p> {(data.slip.advice) ? data.slip.advice : "loading"}</p>}

    <button 
    onClick={update}
    >Get More Advice</button>
        <button 
    onClick={data.slip.advice !== null ? setFav([...fav,data.slip.advice])  : console.log("not ok")  }
    disabled={!data.slip || !data}
    >Set to favorites </button>

  </section>
  <section className="favourtite-slips-list">
    <h3>Favourite Advice Slips</h3>
    <ul>
      {fav.map((item, index) => (
              <>
              <li key={index}>{item}</li>
              </>
          ))}
      <li>Measure twice, cut once.</li>
      <li>Don&apos;t let the bastards grind you down.</li>
      <li>Always the burrito.</li>
    </ul>
  </section>
    </section>
  )
}

export default AdviceSection
