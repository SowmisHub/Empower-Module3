import { useState, lazy, Suspense } from "react";
import "./App.css";

/* ✅ Lazy loading */
const HeavyComponent = lazy(() => import("./components/HeavyComponent"));

function App() {
  const [count, setCount] = useState(0);

  console.log("Parent App rendered");

  return (
    <div className="container">
      <div className="card">
        <h2>Counter: {count}</h2>

        <button
          className="button"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>

        {/* ✅ Lazy loaded heavy component */}
        <Suspense fallback={<p>Loading heavy component...</p>}>
          <HeavyComponent />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
