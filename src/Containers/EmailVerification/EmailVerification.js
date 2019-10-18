import React from 'react'
import { Paper, Button } from '../../Components'
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux";
import { MDBNavbar, MDBNavbarBrand } from 'mdbreact';
import './EmailVerification.css'
import { sendEmailLink } from "../../Store/Actions/Auth-Action";
class Verification extends React.Component {

    constructor() {
        super()
        this.state = {
            email: ''
        }

    }


    sendLink = () => {
        this.props.sendEmailLink()

    }

    render() {

        return (
            <div>
                <div>
                    <MDBNavbar color="special-color-dark"  >

                        <h5 style={{ cursor: "pointer", color: 'white' }} onClick={() => this.props.history.push('/login')} >
                            &nbsp; App Name
</h5>

                    </MDBNavbar>
                </div>
                <div className='box' >
                    <Grid justify='center' container>
                        <Grid item xs={12} sm={12} lg={5} md={10}>
                            <Paper>
                                <p className="h4 text-center py-4">Verify your Email </p>

                                <div style={{ textAlign: 'center' }}>
                                    <img width='30%' src='https://www.pnglot.com/pngfile/detail/231-2319966_gmail-logo-png-transparent-background-css-animated-email.png' alt='verify-email' />
                                    <p>
                                        <Button color='deep-purple' style={{ textAlign: 'center' }} onClick={this.sendLink}>Resend Email</Button>

                                    </p>
                                </div>

                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </div >



        )
    }
}

// redux

const mapDispatchToProps = dispatch => {
    return {
        sendEmailLink: () => dispatch(sendEmailLink())

    }
}

export default connect(null, mapDispatchToProps)(Verification)

