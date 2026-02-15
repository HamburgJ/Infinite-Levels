import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Level from './components/Levels/Level';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentLevel } from './store';
import { setNavigatingFromHistory } from './store/middleware/historyMiddleware';
import GlobalStyles from './styles/GlobalStyles';
import CommonLayout from './components/Layout/CommonLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inventory from './components/UI/Inventory';
import Breadcrumbs from './components/UI/Breadcrumbs';

const GameContainer = () => {
  const currentLevel = useSelector((state) => state.game.currentLevel);
  const dispatch = useDispatch();

  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.level !== undefined) {
        setNavigatingFromHistory(true);
        dispatch(setCurrentLevel(event.state.level));
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [dispatch]);

  return <Level levelNumber={currentLevel} />;
};

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <CommonLayout>
        <GameContainer />
        <Inventory />
        <Breadcrumbs />
      </CommonLayout>
    </Provider>
  );
}

export default App;
