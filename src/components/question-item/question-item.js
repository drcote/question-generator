import './question-item.css';

const QuestionItem = () => {
	return (
		<div className='Question-item'>
			<p>Что такое делегирование событий?</p>
			<input type="text" placeholder='*Введите текст' />
		</div>
	);
}

export default QuestionItem;