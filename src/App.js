import Home from "./pages/Home";

function App() {
  return (
    <div className="container">
      <h1
        style={{
          textAlign: "center",
          color: '#ffffff',
          fontSize: "3rem",
          padding: "1rem",
        }}
      >
        Welcome to the game of 🦠
      </h1>
      <h2 style={{
          textAlign: "center",
          color: '#ffffff',
          fontSize: "1.5rem",
          padding: ".5rem",
        }}>Made by <a href="https://jay-software.com">jay software</a></h2>
      <Home/>
    </div>
  );
}

export default App;
