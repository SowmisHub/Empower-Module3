import React from "react";

function HeavyComponent() {
  console.log("🔥 HeavyComponent rendered");

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Heavy Component</h3>
      <p>This is a heavy UI section.</p>
    </div>
  );
}

export default React.memo(HeavyComponent);
