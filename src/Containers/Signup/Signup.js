import React from 'react'
import { connect } from 'react-redux'
import { userSignup, FacebookLogin } from '../../Store/Actions/Auth-Action'
// import './Signup.scss'
import firebase from '../../Config/Firebase/Firebase'
import { MDBNavbar, MDBNavbarBrand, MDBRow, MDBIcon, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import './Signup.css'
import { Paper } from '../../Components';
import Grid from '@material-ui/core/Grid';


class Signup extends React.Component {

    constructor() {
        super()
        this.state = {
            userName: '',
            userEmail: '',
            userPassword: '',
            userImage: ''
        }
    }


    // Function to save inputs value in state

    handleChange = (e) => {
        this.setState(
            { [e.target.id]: e.target.value }
        )
    }

    // Function to upload Image

    uploadImage = async (e) => {
        let imageName = e.target.files[0].name
        let ref = firebase.storage().ref('/').child(`users/${imageName}`)
        await ref.put(e.target.files[0])
        ref.getDownloadURL().then((url) => {
            console.log(url)
            this.setState({
                userImage: url
            })
        })

    }


    // Signup Fuction


    Signup = (obj, path) => {
        if (!obj.userName) {
            this.setState({ warning: 'Please Enter userName' })
            setTimeout(() => {
                this.setState({ warning: '' })

            }, 2000);
        }
        else if (!obj.userEmail) {
            this.setState({ warning: 'Please Enter userEmail' })
            setTimeout(() => {
                this.setState({ warning: '' })

            }, 2000);
        }
        else if (!obj.userPassword) {
            this.setState({ warning: 'Please Enter userPassword' })
            setTimeout(() => {
                this.setState({ warning: '' })

            }, 2000);
        }
        else if (obj.userPassword !== obj.confrimPassword) {
            this.setState({ warning: 'Please Enter confrimPassword' })
            setTimeout(() => {
                this.setState({ warning: '' })

            }, 2000);
        }
        else {
            obj.userEmail = obj.userEmail.toLowerCase()
            this.props.userSignup(obj, path)
        }

    }



    render() {
        return (
            <div>

                <MDBNavbar color="special-color-dark"  >
                    <MDBNavbarBrand href="#">
                        <h5 className="my-1">
                            &nbsp; App Name
                </h5>
                    </MDBNavbarBrand>
                </MDBNavbar>
                <div style={{ marginTop: "50px" }}>
                    <Grid container justify='center'  >
                        <Grid item xs={12} sm={12} md={8} lg={5}>
                            <Paper>
                                <div className="header pt-3 grey lighten-2">
                                    <MDBRow className="d-flex justify-content-center">
                                        <h3 className="deep-grey-text pb-1 mx-5">
                                            SIgnup
                                     </h3>
                                    </MDBRow>
                                </div>
                                <MDBCardBody >
                                    <MDBInput label="Your Name" className='input' id='userName' type="text" onChange={this.handleChange} group validate />

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
                                    <MDBInput
                                        label="Retype password"
                                        group
                                        id="confrimPassword"
                                        onChange={this.handleChange}
                                        type="password"
                                        validate
                                        containerClass="mb-0" className='input'
                                    />

                                    <MDBInput
                                        group
                                        id="file"
                                        onChange={(e) => this.uploadImage(e)}
                                        type="file"
                                        validate
                                        containerClass="mb-0" className='input'
                                    />
                                    <p style={{ color: "red" }}>
                                        {this.state.warning}
                                    </p>
                                    <p style={{ color: "red" }}>
                                        {this.props.signupErr}
                                    </p>
                                    <div className="text-center mb-4 ">
                                        <p>
                                            <MDBBtn size='md' style={{ width: '300px' }} color="deep-purple" social="fb" onClick={() => this.Signup(this.state, this.props.history)}>
                                                <MDBIcon icon="sign-in-alt" /> Signup Now
                                        </MDBBtn>
                                        </p>
                                        <MDBBtn size='md' style={{ width: '300px' }} color="blue" social="fb" onClick={() => this.props.FacebookLogin()}>
                                            <MDBIcon fab icon="facebook-f" className="pr-1" /> Login With Facebook
                                </MDBBtn>
                                    </div>
                                    <p className="font-small grey-text d-flex justify-content-center">
                                        Don't have an account?
                                    <a
                                            onClick={() => this.props.history.push('/login')}
                                            className="dark-grey-text font-weight-bold ml-1"
                                        >
                                            Sign up
                                     </a>
                                    </p>
                                </MDBCardBody>
                            </Paper>


                        </Grid>
                    </Grid>

                    {/* <div className="cont">
                <div className="form sign-in">
                    <label>
                        <span>Name</span>
                        <input id='userName' ref={this.userName} type="text" onChange={this.handleChange} />
                    </label>
                    <label>
                        <span>Email</span>
                        <input id='userEmail' ref={this.userEmail} type="email" onChange={this.handleChange} />
                    </label>
                    <label>
                        <span>Password</span>
                        <input id='userPassword' ref={this.userPassword} type="password" onChange={this.handleChange} />
                    </label>
                    <label>
                        <span></span>
                        <input type="file" onChange={(e) => this.uploadImage(e)} />
                    </label>
                    <span style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>{this.props.signupErr}</span>
                    <button type="button" className="submit" style={{ borderRadius: '70px' }} onClick={() => this.Signup(this.state,this.props.history)} >Sign In</button>
                    <button type="button" className="fb-btn" style={{ borderRadius: '70px' }} onClick={() => this.FacebookLogin()} >Connect with <span>facebook</span></button>
                </div>
                <div className="sub-cont">
                    <div className="img">
                        <div className="img__text m--up">
                            <h2>One of us?</h2>
                            <p>If you already has an account, just sign in. We've missed you!</p>
                        </div>
                        <div className="img__btn" onClick={() => this.props.history.push('/login')}>
                            <span className="m--up" >Sign In</span>
                        </div>
                    </div>
                </div>
            </div> */}
                </div>
            </div>


        )
    }
}

// redux connect


const mapStateToProps = state => {
    return {
        signupErr: state.AuthReducer.signupErr,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userSignup: (userobj, path) => dispatch(userSignup(userobj, path)),
        FacebookLogin: () => dispatch(FacebookLogin())


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)