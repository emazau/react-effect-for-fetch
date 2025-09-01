import { useEffect, useState } from "react"

function ArtsSection() {
  

  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() =>{
    fetch('https://boolean-uk-api-server.fly.dev/art')
    .then(response => {
      return response.json();
    })
    .then (jsonData =>{
      setData(jsonData);
      setLoading(false);
/*       console.log(data);
      console.log(loading); */


    })
    .catch(error => {
      console.log("EERRORORR");
      console.log(error);
    })

/*     data.map((item, index) => ({
    url = 'https://boolean-uk-api-server.fly.dev/art' + {item.imageURL}
    fetch(url)
    .then(response => {
      
      setdata( datas => ({
        ...datas.map(item =>
          ...item, imageURL: 
        ), 


      })

        

      })

    })
      


 */
  }, []);

  


  
  return (
    <>
    <section>
      <h2>Arts Section</h2>
        <div className="scroll-container">
    <ul className="art-list">
      <li>
          {data.map((item) => (
              <>
        <div className="frame">
          <img
            src={"https://boolean-uk-api-server.fly.dev/" + item.imageURL}
          />
        </div>

              <h3>{item.title}</h3>
        <p>Artist: {item.artist}</p>
        <h4>Publication History:</h4>
        <ul>
          
          {item.publicationHistory.map((pub) =>(
            <>
            <li>{pub}</li>
            </>
          ))}
        </ul>
              </>
          ))}


      </li>
    </ul>
    </div>
    </section>
  </>
  )
}

export default ArtsSection


/*               <h3>Paris Street; Rainy Day</h3>
        <p>Artist: Gustave Caillebotte</p>
        <h4>Publication History:</h4>
        <ul>
          <li>Catalogue de la 3e exposition de peinture, exh. cat. (E. Capiomont et V. Renault, 1877), p. 3, cat. 1.</li>
          <li>Léon Mancino, “La descente de la courtille,” L’art 9 (Apr. 1877), p. 70.</li>
          <li>Anonymous [possibly Gaston Vassy], “La journée à Paris: L’exposition des impressionnalistes,” L’événement, Apr. 6, 1877, p. 2.</li>
        </ul> */