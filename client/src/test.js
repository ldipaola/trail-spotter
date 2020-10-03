import React from "react";
import { connect } from "react-redux";
import { increment } from "./store/actions/test";

const mapStatesToProps = (state) => {
    console.log(state)
    return {
        counter: state.test.counter 
    }
};
const mapDispatchToProps = {
    increment: increment
};

function Test(props) {
    return (
        <div>
            <h1>{props.counter}</h1>
            <button onClick={props.increment}></button>
        </div>
    )
}

export default connect(mapStatesToProps, mapDispatchToProps)(Test);