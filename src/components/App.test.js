import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

it('should render correctly', () => {
    expect(app).toMatchSnapshot();
});

it('initialises the `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
});

it('add a new gift to `state` when clicking the `add gift` button', () => {
    app.find('.btn-add').simulate('click');
    expect(app.state().gifts).toEqual([{ id: 1 }]);
});