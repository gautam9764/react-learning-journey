import Counter from "./components/Counter";
import MultiUpdate from "./components/MultiUpdate";
import UserCard from "./components/UserCard";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>React State Management Examples</h1>
        <p>Learn different ways to manage state in React</p>
      </header>

      <main className="app-main">
        <section className="component-section">
          <Counter />
        </section>

        <section className="component-section">
          <ShoppingCart />
        </section>

        <section className="component-section">
          <UserCard />
        </section>

        <section className="component-section">
          <MultiUpdate />
        </section>
      </main>
    </div>
  );
}

export default App;
