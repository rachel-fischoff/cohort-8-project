import React, { Component } from "react";
import Trix from "trix";

class Wysiwyg extends React.Component {
    constructor(props) {
        super(props);
        this.trixInput = React.createRef();
    }

    componentDidMount() {
        this.trixInput.current.addEventListener("trix-change", event => {
            console.log("trix change event fired");
            this.props.onChange(event.target.innerHTML); //calling custom event
        });
    }

    render() {
        return (
            <div>
                <input type="hidden" id="trix" value={this.props.value} />
                <trix-editor input="trix" ref={this.trixInput} />
            </div>
        );
    }
}

export default Wysiwyg;