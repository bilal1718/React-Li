import React from "react";
import Navbar from "./Components/nav"
import Hero from "./Components/hero"
import Card from "./Components/card"
import dataInfo from "./Components/data"
import './App.css'


export default function App(){
     const cards=dataInfo.map(item=>{
      return(
        <Card 
          key={item.id}
          {...item}
        />
      )
     })
  return(
    <div>
      <Navbar />
      <Hero />
      <section className="cardsList">
                {cards}
            </section>
    </div>
  )
}