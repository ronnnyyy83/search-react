import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from '../components/Search';
import debounce from 'lodash.debounce';
import { getSuggestions } from '../api';

class SearchContainer extends Component {
	constructor(props) {
		super(props);
		this.onSearchTextChange = this.onSearchTextChange.bind(this);
		this.onSearchFocus = this.onSearchFocus.bind(this);
		this.onSearchBlur = this.onSearchBlur.bind(this);
		this.onSearchItemSelected = this.onSearchItemSelected.bind(this);
		this.makeSearch = debounce(this.makeSearch.bind(this), 500);
		this.state = {
			items: [],
			isSearchActive: false,
		}
	}
	render() {
		return (
			<div>
				<Search
					items={this.state.items}
					onSelected={this.onSearchItemSelected}
					onValueChange={this.onSearchTextChange}
					renderItem={(item) => <span>{item.searchterm}</span>}
					isActive={this.state.isSearchActive}
					onFocus={this.onSearchFocus}
					onBlur={this.onSearchBlur}
				/>
			</div>
		);
	}

	onSearchTextChange(searchText) {
		this.setState({
			searchText
		});

		if (searchText && searchText.length > 2) {
			this.makeSearch(searchText);
		} else {
			this.setState({
				items: []
			});
		}
	}

	onSearchItemSelected(item) {
		alert(`You have selected ${item.searchterm}`);
	}

	makeSearch(searchText) {
		getSuggestions(searchText)
			.then(items => {
				this.setState({
					items: items.suggestions
				});
			})
			.catch(err => {
				alert('Oops something went wrong!');
			});
	}

	onSearchFocus() {
		this.setState({
			isSearchActive: true
		});
	}

	onSearchBlur() {
		this.setState({
			isSearchActive: false
		});
	}
}

SearchContainer.propTypes = {

};

export default SearchContainer;