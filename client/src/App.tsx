import { useEffect } from 'react';
import { Header } from './components/header';
import {api} from './services/api'

export function App() {

  useEffect(()=> {
    api.get("/catalogue/90d054b0-c727-4d75-aa03-d39c4dcd56ea/products").then(data => console.log(data))
  },[])

  return (
    <>
      <Header />
      <h1>Hello Word</h1>
    </>
  );
}
