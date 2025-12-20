import {name} from './data.js'
import React from "react";
import { createRoot } from 'react-dom/client'

console.log(React)
console.log("Name", name);
console.log('hello world');



const h1 = <h1>Hello World</h1>

const root = createRoot(document.getElementById('root'))

root.render(h1)
console.log('Hello world!!!')