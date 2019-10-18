import React from 'react'
import Grid from '@material-ui/core/Grid';
import './Main.css'
import Img from '../../Images/main2.png'
import { isLogin } from '../../Store/Actions/Auth-Action'
import { connect } from 'react-redux'

class Main extends React.Component {


    constructor() {
        super()
        this.state = {
            name: ''
        }
    }

    componentDidMount() {
        this.props.isLogin(this.props.history)
    }
    render() {
        return (
            <div>
                <Grid container
                    spacing={0}
                    align="center"
                    justify="center"
                    direction="row">
                    <Grid item xs={6} sm={6} md={6} lg={6} >
                        <div className='col1' >
                            <h1 style={{ marginTop: "100px" }} >Welcome to App</h1>
                            <img src={Img} alt='website logo' width='400px' />
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <div className='col1' >
                            <h1>Join Us Today</h1>
                            <button className='button1' onClick={() => this.props.history.push("/signup")} >
                                Signup  now
                            </button>
                            <button className='button1' onClick={() => this.props.history.push('/login')}>
                                Login now
                            </button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}



// redux connect  


const mapDispatchToProps = dispatch => {
    return {
        isLogin: (path) => dispatch(isLogin(path))

    }
}

export default connect(null, mapDispatchToProps)(Main)
