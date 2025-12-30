import { useState, useMemo, useCallback } from "react";
import ProductList from "./components/ProductList";
import "./App.css";

const productsData = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Headphones", price: 3000 }
];

function App() {
  const [count, setCount] = useState(0);
  const [products] = useState(productsData);

  /* ✅ useMemo: total price recalculates only when products change */
  const totalPrice = useMemo(() => {
    console.log("Calculating total price");
    return products.reduce((sum, item) => sum + item.price, 0);
  }, [products]);

  /* ✅ useCallback: function reference stays same */
  const handleSelectProduct = useCallback((product) => {
    console.log("Selected:", product.name);
  }, []);

  console.log("App rendered");

  return (
    <div className="container">
      <div className="card">
        <h2>Total Price: ₹{totalPrice}</h2>

        <button
          className="button"
          onClick={() => setCount(count + 1)}
        >
          Counter: {count}
        </button>

        <ProductList
          products={products}
          onSelectProduct={handleSelectProduct}
        />
      </div>
    </div>
  );
}

export default App;
