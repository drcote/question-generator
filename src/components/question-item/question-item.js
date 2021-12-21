import './question-item.css';

const QuestionItem = ({ question, insertDataToSate }) => {

	return (
		<div className='Question-item'>
			<p>{question}</p>
			<input
				type="text"
				placeholder='*Введите текст'
				onChange={insertDataToSate} />
		</div>
	);

}

export default QuestionItem;