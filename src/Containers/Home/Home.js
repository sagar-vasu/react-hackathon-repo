import React from 'react'
import { connect } from 'react-redux'
import { Button, Navbar } from '../../Components'
import { userLogout, isLogin } from '../../Store/Actions/Auth-Action'

class Home extends React.Component {
    componentDidMount() {
        this.props.isLogin(this.props.history)
    }
    render() {
        return (
            <div>
                <div>
                    <Navbar path={this.props.history} onClick={() => this.props.userLogout()} data={this.props.currentUser} />
                </div>
                <h1>{this.props.currentUser.userName}</h1>
              
            </div>
        )
    }
}

// redux connect  


const mapStateToProps = state => {
    console.log(state)
    return {
        currentUser: state.AuthReducer.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userLogout: () => dispatch(userLogout()),
        isLogin: (path) => dispatch(isLogin(path))


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)