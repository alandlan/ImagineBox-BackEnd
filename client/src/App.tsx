import { useEffect } from 'react';
import {api} from './services/api'

export function App() {

  useEffect(()=> {
    api.get("/catalogue/90d054b0-c727-4d75-aa03-d39c4dcd56ea/products").then(data => console.log(data))
  },[])

  return (
    <div className="App">
      <h1>Hello Word</h1>
    </div>
  );
}
