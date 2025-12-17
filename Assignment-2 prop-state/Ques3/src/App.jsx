import MessageCard from "./MessageCard";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <MessageCard
        title="Welcome"
        message="This is my first reusable React component."
      />

      <MessageCard
        title="React Props"
        message="Props help us pass data to components."
      />

      <MessageCard
        title="Reusable UI"
        message="The same component is used with different data."
      />

      <MessageCard
        title="Success"
        message="This card is rendered using props!"
      />
    </div>
  );
}

export default App;
