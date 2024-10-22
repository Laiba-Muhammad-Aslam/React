import React, { useState, useEffect} from 'react'

function DataFetcher() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    
    // It will run only on first render 
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data =>{
        setData(data)
        setLoading(false)
      })
}, [])
    
  return (
    <div>
       {loading ? (
            <h1>Loading....</h1>
        ): (
            <ul>
                <li key={post.id}> {post.title} </li>
            </ul>
        )}
    </div>
  )
}

export default DataFetcher
