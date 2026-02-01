import { useState } from "react"

const products = [
  { id: 1, name: "The Lakes Single Malt", category: "Single Malt", price: 120, image: "/images/lakes-single-malt.jpg" },
  { id: 2, name: "Bombay Sapphire", category: "Gin", price: 45, image: "/images/bombay-sapphire.jpg" },
  { id: 3, name: "The Real McCoy Rum", category: "Rum", price: 65, image: "/images/real-mccoy-rum.jpg" },
  { id: 4, name: "Hennessy VSOP", category: "Cognac", price: 85, image: "/images/hennessy-vsop.jpg" },
  { id: 5, name: "Smirnoff No. 21", category: "Vodka", price: 40, image: "/images/smirnoff-21.jpg" },
  { id: 6, name: "Tamdhu 12 Year Old", category: "Scotch Whisky", price: 75, image: "/images/tamdhu-12.jpg" },
  { id: 7, name: "Guardian Bourbon", category: "Bourbon", price: 55, image: "/images/guardian-bourbon.jpg" },
  { id: 8, name: "Agave Soul Blanco", category: "Tequila", price: 48, image: "/images/agave-soul.jpg" },
  { id: 9, name: "Rebel Vell", category: "Rye Whiskey", price: 60, image: "/images/rebel-vell.jpg" },
  { id: 10, name: "Elderflower Liqueur", category: "Liqueur", price: 32, image: "/images/elderflower-liqueur.jpg" },
  { id: 11, name: "Navy Strength Gin", category: "Gin", price: 52, image: "/images/navy-strength-gin.jpg" },
  { id: 12, name: "Irish Oak Finish", category: "Irish Whiskey", price: 68, image: "/images/irish-oak.jpg" },
  { id: 13, name: "Crystal Peak Vodka", category: "Vodka", price: 35, image: "/images/crystal-peak.jpg" },
  { id: 14, name: "Espresso Martini Mix", category: "Liqueur", price: 28, image: "/images/espresso-martini.jpg" },
  { id: 15, name: "Japanese Harmony", category: "Japanese Whisky", price: 95, image: "/images/japanese-harmony.jpg" },
  { id: 16, name: "Amber Anejo Tequila", category: "Tequila", price: 72, image: "/images/amber-anejo.jpg" },
  { id: 17, name: "Black Spiced Rum", category: "Rum", price: 42, image: "/images/black-spiced-rum.jpg" },
  { id: 18, name: "Pear & Cinnamon Brandy", category: "Brandy", price: 38, image: "/images/pear-cinnamon.jpg" },
  { id: 19, name: "Island Coconut Rum", category: "Rum", price: 22, image: "/images/coconut-rum.jpg" },
  { id: 20, name: "Cask Strength Reserve", category: "Single Malt", price: 150, image: "/images/cask-strength.jpg" },
]

export default function Products({ addToCart }) {
  return (
    <div className="grid">
      {products.map(product => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.category}</p>
          <strong>${product.price}</strong>
          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  )
}
