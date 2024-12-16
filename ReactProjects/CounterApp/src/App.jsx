import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const getCounterColor = () => {
    if (count > 0) return 'text-green-500';
    if (count < 0) return 'text-red-500';
    return 'text-black';
  };

  return (
    <>
      <h1 className='text-center text-5xl mb-3 font-semibold'>Counter App</h1>
      <h3 className={`text-3xl mb-3 font-medium ${getCounterColor()}`}>{count}</h3>
      <div>
        <button
          className='mx-2 border-2 px-4 py-2 bg-red-800 text-white text-2xl rounded-xl'
          onClick={() => setCount(count => count - 1)}
        >
          -
        </button>
        <button
          className='mx-2 border-2 px-4 py-2 bg-green-700 text-white text-2xl rounded-xl'
          onClick={() => setCount(count => count + 1)}
        >
          +
        </button>
      </div>
      <button
        className='mx-2 border-2 px-4 py-2 mt-3 bg-blue-800 text-white'
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </>
  );
}

export default App;
