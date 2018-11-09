import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Search from '../components/Search';

const items = Array(10).fill(0).map((p, i) => ({
	name: `item ${i}`,
	id: i
}));

const actions = {
	onSelected: action('item selected'),
	onValueChange: action('search text changed'),
	onFocus: action('focus'),
	onBlur: action('blur')
};

storiesOf('Search', module)
	.add('default', () => <Search items={[]} isActive={false} {...actions}/>)
	.add('focus', () => <Search items={[]} isActive={true} {...actions}/>)
	.add('with Items', () => <Search
		items={items}
		isActive={true}		
		renderItem={item => (
			<span>{item.name}</span>
		)}
		{...actions}
	/>)