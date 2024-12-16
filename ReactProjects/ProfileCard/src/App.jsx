import './App.css'
import FoodCard from './components/FoodCard'

function App() {
  return (
   <div>
    <h1 className='text-center text-5xl mb-5 font-semibold'>Customer Favorites</h1>
     <div className='flex flex-wrap'>
    <FoodCard image="https://plus.unsplash.com/premium_photo-1669557211332-9328425b6f39?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="food1" title="Scrambled Egg with Bread" desc="This classic breakfast dish consists of fluffy scrambled eggs seasoned with salt and pepper, served alongside toasted slices of bread. It's a quick and simple meal, often paired with a cup of tea or coffee, providing a perfect start to the day with its balanced protein and carbohydrates." category="Breakfast"/>

    <FoodCard image="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="food2" title="Chicken Qorma" desc="A traditional Pakistani dish, Chicken Qorma is a rich and flavorful curry made with tender chicken pieces simmered in a spiced yogurt-based sauce. Infused with aromatic spices like cinnamon, cardamom, and cloves, it is usually enjoyed with naan or rice, making it a hearty and satisfying meal." category="Lunch"/>

    <FoodCard image="https://images.unsplash.com/photo-1726501602997-3a0fc988aa3b?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="food3" title="Greek Salad" desc="A light and refreshing Mediterranean salad, the Greek Salad is made with crisp cucumbers, juicy tomatoes, red onions, Kalamata olives, and feta cheese, all tossed in a simple olive oil and lemon dressing. It's a perfect appetizer or side dish, offering a fresh, tangy flavor with a healthy mix of vegetables and protein." category="Breakfast"/>
    </div>
   </div>
    
  )
}

export default App
