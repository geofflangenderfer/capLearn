import adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, render, mount } from 'enzyme';
import React from 'react';
import { MemoryRouter, Route, Link } from 'react-router';
import App from './App';
import Dropdown from './Dropdown';
import Search from './Search';

Enzyme.configure({ adapter: new adapter() });

//test("in Dropdown, clicking each language resolves to the correct URL", () => {
//    const wrapped = mount(
//        <MemoryRouter>
//            <Dropdown />
//        </MemoryRouter>
//    );
//
//    //console.log(wrapped.find(Link));
//    expect(wrapped.find(Link)).toBe(true);
//    //console.log(ref_dropdown.props.children);
//    //console.log(Dropdown.props.children);
//
//});

describe("<Dropdown />", () => {
    it('renders all language links', () => {
        const dropdown = shallow(<Dropdown />);
        Object.keys(dropdown.state.languages).map(language => 
            expect(dropdown.find(language).length).toEqual(1)
        );
    });
});
