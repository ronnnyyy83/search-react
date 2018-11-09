import React from 'react';
import { mount } from 'enzyme';
import Search from './index.jsx';

describe('Search', () => {
	it('should not has isActive on default', () => {
		const props = {
			items: [],
			renderItem: () => { },
			isActive: false,
		};

		const searchEl = mount(<Search {...props} />);
		let searchItem = searchEl.find('.search-container').at(0);
		expect(searchItem.hasClass('isActive')).toEqual(false);
	})

	it('should has isActive on focus', () => {
		const props = {
			items: [],
			renderItem: () => { },
			isActive: true,
		};

		const searchEl = mount(<Search {...props} />);
		let searchItem = searchEl.find('.search-container').at(0);
		expect(searchItem.hasClass('isActive')).toEqual(true);		
	})
	
	it('should has items', () => {
		const props = {
			items: Array(10).fill(0).map((p, i) => ({
				name: `item ${i}`,
				id: i
			})),
			renderItem: item => (<span>{item.name}</span>),
			isActive: true,
		};

		const searchEl = mount(<Search {...props} />);
		let searchItem = searchEl.find('.list-container');

		expect(searchItem.find('li').at(0).text()).toEqual('item 0');
		expect(searchItem.find('li').length).toEqual(10);
	})
});