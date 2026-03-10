import "./App.css";
import Header from "./components/Header";
import LinkButton from "./components/LinkButton";
import { links } from "./data/links";

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <Header
          title="VIBECLUE"
          subtitle={
            <>
              Все мои ссылки в одном месте.
              <br />
              Буду рад вас видеть!
            </>
          }
        />

        <main className="links-list">
          {links.map((link) => (
            <LinkButton
              key={link.url}
              label={link.label}
              url={link.url}
              description={link.description}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
