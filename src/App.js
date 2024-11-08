import { Provider } from 'react-redux';
import { store } from './store';
import Level from './components/Levels/Level';
import { useSelector } from 'react-redux';
import GlobalStyles from './styles/GlobalStyles';
import CommonLayout from './components/Layout/CommonLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inventory from './components/UI/Inventory';

const GameContainer = () => {
  const currentLevel = useSelector((state) => state.game.currentLevel);
  return <Level levelNumber={currentLevel} />;
};

function App() {
  console.log("App is running");
  return (
      <Provider store={store}>
        <GlobalStyles />
        <CommonLayout>
          <GameContainer />
          <Inventory />
        </CommonLayout>
      </Provider>
  );
}

export default App;
