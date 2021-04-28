import React from 'react'

const Loader = (props) => {
return (
            <div class="ui active inverted dimmer">
                <div class="ui big text loader">{props.message}</div>
                {/* Simlar to default props */}
                {/* <div class="ui big text loader">{props.message || "Loading..."}</div> */}
            </div>
);
}
Loader.defaultProps= {
message : "Loading..!"
}
export default Loader;