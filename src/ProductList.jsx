import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

// 3 categories, har ek mein 6 plants
const categories = [
  {
    name: "Indoor Plants",
    plants: [
      { id: "ip1", name: "Monstera Deliciosa", price: 45, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&q=80", description: "Large tropical leaves, perfect statement plant." },
      { id: "ip2", name: "Snake Plant", price: 30, image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=600&q=80", description: "Hardy plant that thrives in low light." },
      { id: "ip3", name: "Peace Lily", price: 35, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&q=80", description: "Elegant white blooms, great air purifier." },
      { id: "ip4", name: "Spider Plant", price: 25, image: "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=600&q=80", description: "Easy-care plant with arching green leaves." },
      { id: "ip5", name: "Rubber Plant", price: 40, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600&q=80", description: "Glossy deep-green leaves, bold look." },
      { id: "ip6", name: "Golden Pothos", price: 20, image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=600&q=80", description: "Trailing vines, perfect for shelves." },
    ],
  },
  {
    name: "Succulents",
    plants: [
      { id: "s1", name: "Aloe Vera", price: 15, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&q=80", description: "Medicinal succulent, needs little water." },
      { id: "s2", name: "Echeveria", price: 12, image: "https://images.unsplash.com/photo-1591958911259-bee2173bdccc?w=600&q=80", description: "Beautiful rosette-shaped succulent." },
      { id: "s3", name: "Jade Plant", price: 18, image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?w=600&q=80", description: "Lucky plant with thick green leaves." },
      { id: "s4", name: "Haworthia", price: 14, image: "https://images.unsplash.com/photo-1611211232932-da3113c5b960?w=600&q=80", description: "Compact striped succulent for desks." },
      { id: "s5", name: "Burro's Tail", price: 16, image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=600&q=80", description: "Cascading succulent for hanging pots." },
      { id: "s6", name: "Panda Plant", price: 13, image: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?w=600&q=80", description: "Fuzzy silver leaves with brown edges." },
    ],
  },
  {
    name: "Flowering Plants",
    plants: [
      { id: "f1", name: "Orchid", price: 50, image: "https://images.unsplash.com/photo-1526565782131-a13074f0dbbb?w=600&q=80", description: "Exotic blooms that last for months." },
      { id: "f2", name: "Anthurium", price: 42, image: "https://images.unsplash.com/photo-1602923668104-8f9e03e77e62?w=600&q=80", description: "Bright heart-shaped red flowers." },
      { id: "f3", name: "African Violet", price: 22, image: "https://images.unsplash.com/photo-1614594895304-fe7116ac3b58?w=600&q=80", description: "Charming purple blooms for windowsills." },
      { id: "f4", name: "Bromeliad", price: 38, image: "https://images.unsplash.com/photo-1545241047-6083a3684587?w=600&q=80", description: "Bold tropical colors, low maintenance." },
      { id: "f5", name: "Kalanchoe", price: 18, image: "https://images.unsplash.com/photo-1519336056116-bc0f1771dec8?w=600&q=80", description: "Clusters of tiny bright flowers." },
      { id: "f6", name: "Begonia", price: 28, image: "https://images.unsplash.com/photo-1508022713622-df2d8fb7b4cd?w=600&q=80", description: "Colorful leaves and delicate flowers." },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // check karo plant pehle se cart mein hai
  const isInCart = (id) => cartItems.some((item) => item.id === id);

  const handleAdd = (plant) => {
    dispatch(addItem(plant)); // Redux mein add karo
  };

  return (
    <div className="plants-page">
      {categories.map((cat) => (
        <div key={cat.name} className="category">
          <h2>{cat.name}</h2>
          <div className="plant-grid">
            {cat.plants.map((plant) => (
              <div key={plant.id} className="plant-card">
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p className="price">${plant.price}</p>
                <p className="desc">{plant.description}</p>
                <button
                  className="add-btn"
                  disabled={isInCart(plant.id)}
                  onClick={() => handleAdd(plant)}
                >
                  {isInCart(plant.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
