import React, { useState } from "react";
import PropTypes from "prop-types";

import "../../styles/List.scss";
import ListItem from "./ListItem.jsx";

const List = props => {
	const [data, setData] = useState([]);
	const [list, setList] = useState(["Go to Gym", "Read", "Make dinner"]);
	// function to update the tasks in the list
	const handleSubmit = ev => {
		ev.preventDefault();
		setList([...list, data]);
	};
	// function to remove tasks from the list
	const handleClik = i => {
		setList(list.filter((val, position) => position !== i));
	};

	return (
		<>
			<div id="myDIV" className="header ">
				<h2>My To Do List</h2>
				<form onSubmit={ev => handleSubmit(ev)}>
					<div className="d-flex justify-content-center">
						<input
							type="text"
							id="myInput"
							placeholder={props.placeholder}
							onChange={ev => setData(ev.target.value)}
						/>
					</div>
				</form>
			</div>
			<ul>
				{list.map((value, i) => (
					<ListItem
						key={i}
						ix={i}
						valueR={value}
						removeHandler={() => handleClik(i)}
					/>
				))}
			</ul>
		</>
	);
};

List.propTypes = {
	placeholder: PropTypes.string
};
export default List;
