import firebase from '../../Config/Firebase/Firebase'


// Already Login User 

function isLogin(path) {
    return async dispatch => {
        await firebase.auth().onAuthStateChanged(user => {
            if (user) {
                firebase.firestore().collection('users').doc(user.uid).get().then(res => {
                    dispatch({ type: 'ALREADY_USER', payload: res.data() })
                    if (path) {
                        path.push('/home')
                    }
                })
            }
        });
    }

}

// Facebook Login

function FacebookLogin() {

    return async dispatch => {
        var provider = new firebase.auth.FacebookAuthProvider();
        provider.setCustomParameters({
            display: "popup"
        });
        firebase.auth().signInWithPopup(provider).then(function (result) {
            var user = result.user;
            let obj = {
                userImage: user.photoURL,
                userName: user.displayName,
                uid: user.uid
            };
            firebase.firestore().collection('users').doc(obj.uid).set(obj).then(() => {
                dispatch({ type: 'FACEBOOK_LOGIN_SUCCESS', payload: obj })
            })
        })
            .catch(function (error) {
                console.log(`error ==>`, error);
            });

    }

}


// userSignup Function

function userSignup(userobj, path) {
    return async dispatch => {
        await firebase.auth().createUserWithEmailAndPassword(userobj.userEmail, userobj.userPassword).then(res => {
            userobj.uid = res.user.uid
            firebase.firestore().collection('users').doc(res.user.uid).set(userobj).then(() => {
                firebase.auth().currentUser.sendEmailVerification().then(function () {
                    // Email sent.
                    path.push('/verify', { email: res.user.email })
                    dispatch({ type: 'SIGNUP_SUCCESS', payload: userobj })

                })
            })
        }).catch(err => {
            dispatch({ type: 'SHOW_SIGNUP_ERROR', payload: err.code })
        })
    }

}

// user login function

function userLogin(userobj, path) {
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(userobj.userEmail, userobj.userPassword).then((res) => {
            if (!res.user.emailVerified) {
                path.push('/verify', { email: res.user.email })
            }
            else {
                dispatch({ type: 'LOGIN_SUCCESS' })
            }
        }).catch(err => {
            dispatch({ type: 'SHOW_LOGIN_ERROR', payload: err.code })
        })
    }
}


// user Logout Function

function userLogout() {
    return async dispatch => {
        await firebase.auth().signOut().then(function () {
            console.log('Signed Out');
            dispatch({ type: 'LOGOUT_SUCCESS' })
        }, function (err) {
            console.ERROR('Sign Out ERROR', err);
        });

    }
}

// Send email Link

function sendEmailLink() {
    return async dispatch => {
        await firebase.auth().currentUser.sendEmailVerification().then(function () {
            alert('email send')
            dispatch({ type: 'EMAIL_SENT_SUCCESS' })
        })
    }
}


// Reset User Passowrd
function resetPassword(email, path) {
    return async dispatch => {
        await firebase.auth().sendPasswordResetEmail(email).then(function () {
            dispatch({ type: 'FORGET_SUCCESS' })
            setTimeout(() => { path.push('/login') }, 3000)
        }).catch(err => {
            dispatch({ type: 'FORGET_ERROR', payload: err.code })
        })
    }
}


export {
    userSignup,
    userLogin,
    userLogout,
    isLogin,
    FacebookLogin,
    sendEmailLink,
    resetPassword
}