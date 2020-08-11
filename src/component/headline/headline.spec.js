import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";
import { findbyTestAttr, checkProp } from "./../../../Utils";

const setUp = (prpos={}) => {
    const component = shallow(<Headline {...prpos}/> );
    return component;
}

describe('Headline Component', () => {

    let wrapper;

    describe('Checking prop types', () => {

        it('Should not throw a warning', () => {
            const expectedProps = {
                header: 'Test Header',
                desc: 'Test Description',
                tempArr: [{
                    fName: 'Test fName',
                    lName: 'Test lName',
                    email: 'test@gmail.com',
                    age: 22,
                    onlineStatus: false
                }]
            };
            const propsErr = checkProp(Headline, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });

    describe('Have props', () => {
        beforeEach(() => {
            const props = {
                header: "Test Header",
                desc: "Test Desc"
            };
            wrapper = setUp(props)
        });

        it('Should render without errors', () => {
            const component = findbyTestAttr(wrapper, 'HeadlineComponent'); 
            expect(component.length).toBe(1);
        })

        it('Should rendera a H1', () => {
            const h1 = findbyTestAttr(wrapper, 'header'); 
            expect(h1.length).toBe(1);
        })

        it('Should rendera a desc', () => {
            const desc = findbyTestAttr(wrapper, 'descWrapper'); 
            expect(desc.length).toBe(1);
        })
    });

    describe('Have NO props', () => {
        beforeEach(() => {
           wrapper = setUp();
        });
        it('Should not render', () => {
            const component = findbyTestAttr(wrapper, 'headlineComponent');
            expect(component.length).toBe(0);
        })
    });

});