import "./ExpenseDate.css";

function ExpenseDate(props) {
	const month = props.date.toLocaleString("da-DK", { month: "short" });
	const year = props.date.toLocaleString("da-DK", { day: "2-digit" });
	const date = props.date.getFullYear();

	return (
		<div className="expense-date">
			<div className="expense-date__month">{month}</div>
			<div className="expense-year">{year}</div>
			<div className="expense-day">{date}</div>
		</div>
	);
}

export default ExpenseDate;
