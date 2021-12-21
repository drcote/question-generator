import { Component } from 'react';
import './question.css';
import QuestionItem from "../question-item"

class Question extends Component {

  state = {
    answers: []
  }

  insertDataToSate = (id, question, answer) => {
    this.setState(({ answers }) => {
      const index = answers.findIndex(elem => elem.id === id);
      let newArr = [];
      if (index === -1) {
        newArr = [...answers, { id, question, answer }];
      }
      else {
        newArr = [...answers.slice(0, index), { id, question, answer }, ...answers.slice(index + 1)];
      }
      console.log(index, newArr);
      return {
        answers: newArr
      }
    })
  }

  writeQuestionsToLS = (e) => {
    e.preventDefault();
    const { answers } = this.state;
    answers.forEach(item => {
      localStorage.setItem(item.question, item.answer);
    })
  }

  clearFormInput = () => {

  }

  render() {
    const elements = this.props.data.map(item => {
      const { id, question } = item;
      return (
        <QuestionItem
          key={id}
          question={question}
          insertDataToSate={(e) => this.insertDataToSate(id, question, e.currentTarget.value)} />
      )
    });

    return (
      <form>
        {elements}
        < input
          type="submit"
          className='question__button'
          value='Отправить'
          onClick={this.writeQuestionsToLS} />
      </form >
    )
  }
}

export default Question;


