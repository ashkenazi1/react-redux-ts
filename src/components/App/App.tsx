import { Provider } from 'react-redux'
import { store } from '../../store'
import RepositoriesList from '../RepositoriesList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Search for a Repository</h1>

        <RepositoriesList />
      </div>
    </Provider>
  );
}

export default App;
