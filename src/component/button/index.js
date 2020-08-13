import React,{ Component } from "react";
import PropTypes from "prop-types";

class SharedButton extends Component {

    submitEvent() {
        if(this.props.eventEmit){
            this.props.eventEmit();
        }
    }

    render() {
        const {buttonText} = this.props;
        
        return(
            <button onClick={() => this.submitEvent()} data-test="buttonComponent">
                {buttonText}
            </button>
        );
    }
}

SharedButton.propTypes = {
    buttonText: PropTypes.string,
    eventEmit: PropTypes.func
};
export default SharedButton;