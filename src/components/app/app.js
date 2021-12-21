import './app.css';
import data from '../../db.json';
import Question from '../question';

const App = () => {

  return (
    <div className="App">
      <Question data={data.data} />
    </div>
  );
}

export default App;

