import * as React from "react";
import Alert from "react-bootstrap/Alert";

function Alerts (props) {
    let childr = props.children;
    return (
        <>
        {/* {[
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
        ].map((variant, idx) => (
            <Alert key={idx} variant={variant}>
                This is a {variant} alert — check it out!
            </Alert>
        ))} */}
            {/* <Alert variant="success"> */}
                {/* {props.children} */}
            {/* </Alert> */}
            
            {React.Children.count(props.children)}
            
            {
                React.Children.map(childr, (child, index) => {
                    if (index >= 1) {
                        return child;
                    }
                })
            }
        </>
    )
}

export default Alerts;