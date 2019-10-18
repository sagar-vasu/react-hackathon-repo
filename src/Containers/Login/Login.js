import React from 'react'
import { connect } from 'react-redux'
import { userLogin, FacebookLogin } from '../../Store/Actions/Auth-Action'
import { MDBNavbar, MDBNavbarBrand, MDBRow, MDBIcon, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import './Login.css'
import { Paper } from '../../Components';
import Grid from '@material-ui/core/Grid';

class Login extends React.Component {

    constructor() {
        super()
        this.state = {
            userEmail: '',
            userPassword: '',
        }
    }

    // Function to save inputs value in state

    handleChange = (e) => {
        this.setState(
            { [e.target.id]: e.target.value }
        )
    }

    // USER LOGIN FUNCTION

    Login = (obj, path) => {

        if (!obj.userEmail) {
            this.setState({ warning: 'Please Enter Email' })
            setTimeout(() => {
                this.setState({ warning: '' })

            }, 2000);
        }
        else if (!obj.userPassword) {
            this.setState({ warning: 'Please Enter Password' })
            setTimeout(() => {
                this.setState({ warning: '' })

            }, 2000);
        }
        else {
            this.props.userLogin(obj, path)
        }

    }

    render() {
        return (
            <div>

                <MDBNavbar color="special-color-dark"  >
                    <h5 style={{ cursor: "pointer", color: 'white' }} onClick={() => this.props.history.push('/login')} >
                        &nbsp; App Name
                    </h5>
                </MDBNavbar>
                <div className='login'>
                    <Grid container justify='center'  >
                        <Grid item xs={12} sm={12} md={8} lg={5}>
                            <Paper>
                                <div className="header pt-3 grey lighten-2">
                                    <MDBRow className="d-flex justify-content-center">
                                        <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                                            Log in
                                        </h3>
                                    </MDBRow>
                                </div>
                                <MDBCardBody >
                                    <MDBInput label="Your email" className='input' id='userEmail' type="email" onChange={this.handleChange} group validate />
                                    <MDBInput
                                        label="Your password"
                                        group
                                        id="userPassword"
                                        onChange={this.handleChange}
                                        type="password"
                                        validate
                                        containerClass="mb-0" className='input'
                                    />
                                    <p style={{ color: "green" }}>
                                        {this.props.loginSuc}
                                    </p>
                                    <p style={{ color: "red" }}>
                                        {this.state.warning}
                                    </p>
                                    <p style={{ color: "red" }}>
                                        {this.props.loginErr}
                                    </p>
                                    <p className="font-small grey-text d-flex justify-content-end">
                                        Forgot
                                        <a
                                            onClick={() => this.props.history.push('/forget')}
                                            className="dark-grey-text font-weight-bold ml-1"
                                        >
                                            Password?
                                    </a>
                                    </p>
                                    <div className="text-center mb-4 ">
                                        <p>
                                            <MDBBtn size='md' style={{ width: '300px' }} color="deep-purple" social="fb" onClick={() => this.Login(this.state, this.props.history)}>
                                                <MDBIcon icon="sign-in-alt" /> Login Now
                                        </MDBBtn>
                                        </p>
                                        <MDBBtn size='md' style={{ width: '300px' }} color="blue" social="fb" onClick={() => this.props.FacebookLogin()}>
                                            <MDBIcon fab icon="facebook-f" className="pr-1" /> Login With Facebook
                                    </MDBBtn>
                                    </div>
                                    <p className="font-small grey-text d-flex justify-content-center">
                                        Don't have an account?
                                <a
                                            onClick={() => this.props.history.push('/signup')}
                                            className="dark-grey-text font-weight-bold ml-1"
                                        >
                                            Sign up
                                </a>
                                    </p>
                                </MDBCardBody>
                            </Paper>


                        </Grid>
                    </Grid>
                </div>
            </div>



        )
    }
}

const mapStateToProps = state => {
    return {
        loginErr: state.AuthReducer.loginErr,
        loginSuc: state.AuthReducer.loginSuc
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userLogin: (userobj, path) => dispatch(userLogin(userobj, path)),
        FacebookLogin: () => dispatch(FacebookLogin())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

