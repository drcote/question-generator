import './question-item.css';

const QuestionItem = ({ question }) => {
	return (
		<div className='Question-item'>
			<p>{question}</p>
			<input type="text" placeholder='*Введите текст' />
		</div>
	);
}

export default QuestionItem;