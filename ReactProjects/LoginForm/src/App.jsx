import './App.css'
import { useForm } from "react-hook-form";

function App() {
  const {register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = () => {
    alert("Login Successfully");
  }
  return (

  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
    <h1 classNames="mb-6 text-2xl font-bold text-center text-gray-700">Login</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label for="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
        <input type="email" placeholder="Enter your email"  {...register("email", { required: true})}
          className="w-full px-3 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500" />
          {errors.email && <span className='text-red-700'>Email is required</span>}
      </div>

    
      <div className="mb-6">
        <label for="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
        <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 10})} placeholder="Enter your password" 
          className="w-full px-3 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500" />
          {errors.password && errors.password.type === "required" && <span className='text-red-700'>Password is required</span>}
          {errors.password && errors.password.type === "minLength" && <span className='text-red-700'>Min Length is 6</span>}
          {errors.password && errors.password.type === "maxLength" && <span className='text-red-700'>Max Length is 10</span>}
      </div>

      
      <div>
        <button type="submit"
          className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
          Login
        </button>
      </div>
    </form>
  </div>
  </div>
  )
}

export default App
