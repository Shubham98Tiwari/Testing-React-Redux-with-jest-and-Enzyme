import React from "react";
import { shallow } from "enzyme";
import { findbyTestAttr, testStore } from "./../Utils";
import App from "./App";

const setup = (initialState) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store}/>).childAt(0).dive();
    // console.log(wrapper.debug());
    return wrapper;
}

describe('App Component', () => {

    let wrapper;

    beforeEach(() => {
        const initialState = {
            posts: [{
                title: 'Example title 1',
                body: 'Some text'
            }, {
                title: 'Example title 2',
                body: 'Some text'
            }, {
                title: 'Example title 3',
                body: 'Some text'
            }]
        }
        wrapper = setup(initialState);
    });

    it('Should render without errors', () => {
        const component = findbyTestAttr(wrapper, 'appComponent');
        expect(component.length).toBe(1);
    });

    it('exampleMethod_updatesState method updates the state as expected', () => {
        const classInstance = wrapper.instance();
        classInstance.exampleMethod_updatesState();
        const newState = classInstance.state.hideBtn;
        // console.log(newState);
        expect(newState).toBe(true);
    });

    it('exampleMethod_returnsAValue method returns the value as expected', () => {
        const classInstance = wrapper.instance();
        const newValue = classInstance.exampleMethod_returnsAValue(23);
        console.log(newValue);
        expect(newValue).toBe(24);
    });
});