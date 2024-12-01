import { useState, useEffect } from 'react'
import './App.css'
import ProfileCard from './assets/components/ProfileCard'
import Footer from './assets/components/Footer';

function App() {

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        console.log("Fetched Data:", data);
        setUserData(data);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (

    <div>
        <h1>Discover Trending Products</h1>
        <div className='flex flex-wrap card-container'>
        {userData ? userData.map((data) => (
        <ProfileCard key={data.id} id={data.id} title={data.title} description={data.description} image={data.image} price={data.price}/>
      )) : <p>Loading...</p>}
      </div>

      {/* Footer  */}

      <Footer/>
    </div>

  )
}

export default App
