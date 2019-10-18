import React, { Fragment } from "react";
import { MDBBtn, MDBIcon, MDBContainer, } from "mdbreact";

class Button extends React.Component {
    render() {
        return (
            <Fragment>
                {/* <MDBBtn color="primary">Primary</MDBBtn>
                <MDBBtn>Default</MDBBtn>
                <MDBBtn color="secondary">Secondary</MDBBtn>
                <MDBBtn color="success">Success</MDBBtn>
                <MDBBtn color="info">Info</MDBBtn>
                <MDBBtn color="warning">Warning</MDBBtn>
                <MDBBtn color="danger">Danger</MDBBtn> */}
                <MDBBtn  color={this.props.color} onClick={this.props.onClick}>{this.props.children}</MDBBtn>
                {/* indigo */}
            </Fragment>
        );

    }
}


class SocialBtn extends React.Component {
    render() {
        return (
            <MDBContainer>
                <MDBBtn size="lg" tag="a" floating social="fb">
                    <MDBIcon fab icon="facebook-f" />
                </MDBBtn>
            </MDBContainer>


        )
    }
}

export {
    Button, SocialBtn
};