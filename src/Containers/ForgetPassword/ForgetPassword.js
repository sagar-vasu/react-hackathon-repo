import React from 'react'
import { connect } from 'react-redux'
import { resetPassword } from '../../Store/Actions/Auth-Action'
import { MDBNavbar, MDBNavbarBrand, MDBRow, MDBIcon, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import { Paper } from '../../Components';
import Grid from '@material-ui/core/Grid';

class forgetPassword extends React.Component {

    constructor() {
        super()
        this.state = {
            email: '',
        }
    }

    handelChange = (e) => {
        this.setState(
            { [e.target.id]: e.target.value }
        )
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
                                            Forget Password
                                    </h3>
                                    </MDBRow>
                                </div>
                                <MDBCardBody >
                                    <MDBInput label="Your email" className='input' id='email' type="email" onChange={this.handelChange} group validate />
                                    <p style={{ color: "green" }}>
                                        {this.props.foregetSuc}
                                    </p>
                                    <p style={{ color: "red" }}>
                                        {this.props.forgetErr}
                                    </p>
                                    <div className="text-center mb-4 ">
                                        <p>
                                            <MDBBtn size='md' style={{ width: '300px' }} color="deep-purple" social="fb" onClick={() => this.props.resetPassword(this.state.email, this.props.history)}>
                                                <MDBIcon icon="key" /> Sennd Link
                                        </MDBBtn>
                                        </p>
                                    </div>

                                </MDBCardBody>
                            </Paper>


                        </Grid>
                    </Grid>
                </div>
            </div >



        )
    }
}


const mapStateToProps = state => {
    return {
        forgetErr: state.AuthReducer.forgetErr,
        foregetSuc: state.AuthReducer.foregetSuc

    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetPassword: (email, path) => dispatch(resetPassword(email, path))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(forgetPassword)
