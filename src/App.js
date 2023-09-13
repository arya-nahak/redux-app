import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Counter from './Redux/Views/Counter';
import createStore_ from './Redux/Store/Store';
import Data_view from './Redux/Views/Data_view';

function App() {
  return (
    <>
      <Provider store={createStore_}>
        <Counter/>
        <Data_view/>
      </Provider>
    </>
  );
}

export default App;
