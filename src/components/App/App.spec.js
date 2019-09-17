import { shallow } from 'enzyme';
import React from 'react';
import { MemoryRouter, Route, Link } from 'react-router';
import App from './App';
import PrimaryLanguage from '../PrimaryLanguage/PrimaryLanguage';
import Search from '../Search/Search';
import Player from '../Player/Player';


describe("App", () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    ));

    it('should render a <div />', () => {
        console.log(wrapper);
        expect(wrapper.find('div').length).toEqual(1);
    });
    it('should render the PrimaryLanguage Component', () => {
        expect(wrapper.find(PrimaryLanguage)).toHaveLength(1);
    });
    it('should render the Search Component', () => {
        expect(wrapper.containsMatchingElement(<Search />)).toEqual(true);
    });
    it('should render the Player Component', () => {
        expect(wrapper.containsMatchingElement(<Player />)).toEqual(true);
    });
//    it('should render correctly', () => {
//        expect(wrapper).toMatchSnapshot();
//    });
});
