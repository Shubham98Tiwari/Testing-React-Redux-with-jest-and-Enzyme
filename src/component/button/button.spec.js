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
        let mockFunc; // define mockFunc

        beforeEach(() => {
            mockFunc = jest.fn(); //initiate
            const props = {
                buttonText: 'Example Button Text',
                eventEmit: mockFunc  // assign mockFunc
            };
            wrapper = shallow(<SharedButton {...props}/>)
        });

        it('Should render a button', () => {
            const button = findbyTestAttr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        });

        // start test
        it('Should emit callback on click event', () => {
            const button = findbyTestAttr(wrapper, 'buttonComponent');
            button.simulate('click'); //simulate click event
            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1);
        });
    });
});