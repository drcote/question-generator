import QuestionItem from '../question-item';
import SendButton from '../send-button';
import './app.css';
import data from '../../db.json';

const App = () => {

  fetch(data)
  .then(data => data.json())
  .then(res => console.log(res));

  return (
    <div className="App">
      <QuestionItem />
      <SendButton />
    </div>
  );
}

export default App;

