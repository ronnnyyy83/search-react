import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class Search extends Component {
	constructor(props) {
		super(props);
		this.inputRef = React.createRef();		
		this.onInputValueChange = this.onInputValueChange.bind(this);
		this.clear = this.clear.bind(this);
		this.state = {
			inputValue: null
		}
	}	

	render() {
		const { onFocus, onBlur, isActive } = this.props;
		const isActiveClass = isActive ? 'isActive' : '';
		return (
			<div
				className={`search-container ${isActiveClass}`}
				onFocus={onFocus}
				onBlur={onBlur}
				tabIndex="-1">
				<div className="input-container">
					<input
						ref={this.inputRef}
						type="text"
						onKeyUp={e => this.onInputValueChange(e.target.value)} // this is required by the assignment, I would prefer a controlled component normally by setting value and onChange props
					/>
					<i className="fa fa-close" onClick={this.clear}></i>
					<i className="fa fa-search"></i>
				</div>
				{this.renderList()}
			</div>
		);
	}

	onInputValueChange(value) {
		this.setState({
			inputValue: value
		});

		if (this.props.onValueChange) {
			this.props.onValueChange(value)
		}
	}

	renderList() {
		const { items, renderItem, isActive, onSelected } = this.props;

		if (isActive && items && items.length) {
			return (
				<div className="popup-list">
					<ul className="list-container">
						{items.map((item, index) => (
							<li key={index} className="list-item" onMouseDownCapture={() => onSelected(item)}>
								{renderItem(item)}
							</li>
						))}
					</ul>
				</div>
			)
		}

		return null;
	}

	clear() {
		this.inputRef.current.value = null;
		this.onInputValueChange(null);
	}
}

Search.propTypes = {
	items: PropTypes.array,
	onSelected: PropTypes.func,
	onValueChange: PropTypes.func,
	renderItem: PropTypes.func,
	isActive: PropTypes.bool,
	onFocus: PropTypes.func,
	onBlur: PropTypes.func,
};

Search.defaultProps = {
	renderItem: p => p,
}

export default Search;