import { GameModeProvider } from './context/gameMode';
import { UserProvider } from './context/user';
import Layout from './containers/Layout';
import { Server } from "miragejs";
import games from './settings/games';

new Server({
  routes() {
    this.namespace = "api";
		this.get("/games/", () => {
			return games[Math.floor(Math.random() * 3)];
    });
  }
});

function App() {
  return (
    <div className="App">
      <GameModeProvider>
        <UserProvider>
          <Layout />
        </UserProvider>
      </GameModeProvider>
    </div>
  );
}

export default App;
