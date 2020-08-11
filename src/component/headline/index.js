import React, { Component } from "react";
import { PropTypes } from "prop-types"; // import prop types

export default class Headline extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {header, desc} = this.props;

        if(!header) {
            return null;
        }

        return (
            <div data-test="HeadlineComponent">
                <h1 data-test="header">{header}</h1>
                <p data-test="descWrapper">
                    {desc}
                </p>
            </div>
        )
    }
}

// specify prop types for Headline
Headline.propTypes = {
    // specify data types for props
    header: PropTypes.string,
    desc: PropTypes.string,
    tempArr: PropTypes.arrayOf(PropTypes.shape({
        fName: PropTypes.string,
        lName: PropTypes.string,
        email: PropTypes.string,
        age: PropTypes.number,
        onlineStatus: PropTypes.bool
    }))
}