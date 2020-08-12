import React from "react";
import { shallow } from "enzyme";
import { findbyTestAttr, checkProp } from "./../../../Utils";
import ListItem from "./index";
import { italics } from "prop-types/lib/ReactPropTypesSecret";

describe('ListItem Component', () => {

    describe('Check PropType', () => {

        it('Should NOT throw a warning', () => {
            const expextedProps = {
                title: "Test Title",
                desc: "Test Description"
            }
            const propErr = checkProp(ListItem, expextedProps);
            expect(propErr).toBeUndefined();
        });
    });

    describe('Component Rednders', () => {

        let wrapper;
        beforeEach(() => {
            const props = { 
                title: "Test Title",
                desc: "Test Description"
            }
            wrapper = shallow(<ListItem {...props}/>);
        });

        it('Should render without errors', () => {
            const component = findbyTestAttr(wrapper, 'listItemComponent');
            expect(component.length).toBe(1);
        });

        it('Should render a title', () => {
            const component = findbyTestAttr(wrapper, 'itemTitle');
            expect(component.length).toBe(1);
        });

        it('Should render a description', () => {
            const component = findbyTestAttr(wrapper, 'itemDesc');
            expect(component.length).toBe(1);
        });
    });

    describe('Should NOT render', () => {
        let wrapper;
        beforeEach(() => {
            const props = { 
                
                desc: "Test Description"
            }
            wrapper = shallow(<ListItem {...props}/>);
        });

        it('Component is not rendered', () => {
            const component = findbyTestAttr(wrapper, 'listItemComponent');
            expect(component.length).toBe(0);
        });
    });
});