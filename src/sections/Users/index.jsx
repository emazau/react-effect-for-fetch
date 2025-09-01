import { useEffect, useState } from "react"

function UsersSection() {
  

    const [data, setData] = useState([]);
    const [loading,setLoading] = useState(true);
  
    useEffect(() =>{
      fetch('https://boolean-uk-api-server.fly.dev/emazau/contact')
      .then(response => {
        return response.json();
      })
      .then (jsonData =>{
        setData(jsonData);
        setLoading(false);
  
  
      })
      .catch(error => {
        console.log("EERRORORR");
        console.log(error);
      })
  
    }, []);
  
  
  
  
  return (
    <section>
      <h2>Users Section</h2>
        <div className="scroll-container">
    <ul className="users-list">


          {data.map((item) => (
              <>
          <li style={{background: item.favouriteColour}}>
        <img
          src={item.profileImage}
          alt={item.firstName + " " + item.lastName}
        />

        <h3>{item.firstName + " " + item.lastName}</h3>
        <p>Email: {item.email}</p>
      </li>
              </>
          ))}

    </ul>
  </div>
    </section>
  )
}

export default UsersSection
