import React from "react";
import { findbyTestAttr, checkProp } from "./../../../Utils";
import  SharedButton  from "./index";
import { shallow } from "enzyme";
describe('SharedButton Component', () => {

    describe('Checking PropTypes', () => {

        it('Should not throw a warning', () => {
            const expectedProp = {
                buttonText: 'Example Button Text',
                eventEmit: () => {}
            };
            const propError = checkProp(SharedButton, expectedProp);
            expect(propError).toBeUndefined();
        });
    });
    
    describe('Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                buttonText: 'Example Button Text',
                eventEmit: () => {}
            };
            wrapper = shallow(<SharedButton {...props}/>)
        });
        it('Should render a button', () => {
            const button = findbyTestAttr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        });
    });
});