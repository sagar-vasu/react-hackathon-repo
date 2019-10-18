import React from 'react'
import './Profile.css'
import { Navbar, Map } from '../../Components'
import { connect } from 'react-redux'
import { isLogin, userLogout } from '../../Store/Actions/Auth-Action'



class Profile extends React.Component {
    constructor() {
        super()
        this.state = {
            profileDate: ''
        }
    }
    componentDidMount() {
        this.props.isLogin(this.props.history)

    }
    render() {
        return (
            <div>
                <Navbar path={this.props.history} onClick={() => this.props.userLogout()} data={this.props.currentUser} />
                <div className="card">
                    <div className="card-header">
                        <img src={this.props.currentUser.userImage} alt="Profile Image" className="profile-img" />
                    </div>
                    <div className="card-body">
                        <p className="full-name">{this.props.currentUser.userName}</p>
                        <p className="username">{this.props.currentUser.userEmail}</p>
                        <Map />
                    </div>
                    <div className="card-footer">
                        <div className="col vr">
                            <p><span className="count"></span> user Profile</p>
                        </div>

                    </div>
                </div>
            </div>


        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.AuthReducer.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        isLogin: () => dispatch(isLogin()),
        userLogout: () => dispatch(userLogout()),



    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)





