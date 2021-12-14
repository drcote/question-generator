import './question.css';
import QuestionItem from "../question-item"

const Question = ({ data }) => {

  const elements = data.map(item => {
    const { id, ...itemProps } = item;
    return (
      <QuestionItem key={id} {...itemProps} />
    )
  });

  return (
    <div>
      {elements}
      <button className='question__button'>
        Отправить
      </button>
    </div>
  )
}

export default Question;