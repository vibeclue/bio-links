import "./App.css";
import Header from "./components/Header";
import LinkButton from "./components/LinkButton";
import { links } from "./data/links";

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <Header
          title="Bio Links"
          subtitle="Все мои ###### в одном ретро-пространстве"
        />

        <main className="links-list">
          {links.map((link) => (
            <LinkButton key={link.url} label={link.label} url={link.url} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
