function Shop({ searchQuery }) {
  const products = [
    {
      id: 1,
      name: "Jack Daniel's",
      category: "Whiskey",
      volume: "750ml",
      alcoholic: true
    },
    {
      id: 2,
      name: "Heineken",
      category: "Beer",
      volume: "500ml",
      alcoholic: true
    },
    {
      id: 3,
      name: "Coca-Cola",
      category: "Soft Drink",
      volume: "1L",
      alcoholic: false
    }
  ]

  const query = searchQuery.toLowerCase()

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query) ||
    p.volume.toLowerCase().includes(query) ||
    (query === "alcoholic" && p.alcoholic) ||
    (query === "non alcoholic" && !p.alcoholic)
  )

  return (
    <div>
      {filteredProducts.length === 0 ? (
        <p>No drinks found 🍹</p>
      ) : (
        filteredProducts.map(p => (
          <div key={p.id}>
            <h3>{p.name}</h3>
            <p>{p.category} • {p.volume}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default Shop
