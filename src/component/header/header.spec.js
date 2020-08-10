import React from 'react';
import {shallow} from 'enzyme';
import Header from './index';
import {findbyTestAttr} from './../../../Utils';

const setUp = (prpos={}) => {
    const component = shallow(<Header {...prpos}/> );
    return component;
}

describe('Header component', () => {
    let component;
    
    
    // beforeEach is basically run before every single test 
    beforeEach(() => {
        component = setUp();
    });
    it('Should render without errors', () => {
        const wrapper = findbyTestAttr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Should render a logo', () => {
        const logo = findbyTestAttr(component, 'logoIMG'); 
        expect(logo.length).toBe(1);
    });
});