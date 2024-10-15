import './App.css'
import Card from './components/Card.jsx'
import shoe1 from "./assets/shoe1.jpg"
import shoe2 from "./assets/shoe2.jpg"
import shoe3 from "./assets/shoes3.jpg"

function App() {

  return (
    <div className='card-container'>
    <Card image={shoe1} title="Swift Runner" desc="Perfect for daily runs, the Swift Runner offers lightweight comfort and superior breathability. With its responsive cushioning and flexible design, you’ll feel like you’re gliding over any terrain."/>
    <Card image={shoe2} title="Urban Stomp" desc="Designed for city explorers, the Urban Stomp blends style and durability. Its reinforced sole and sleek design make it perfect for long walks and everyday adventures in the urban jungle."/>
    <Card image={shoe3} title="Peak Performance" desc=" Achieve your athletic goals with Peak Performance. Featuring advanced shock absorption and a secure fit, these shoes provide the stability and support you need to dominate your workout."/>
    </div>
  )
}

export default App
