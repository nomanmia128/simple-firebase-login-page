import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase.init";
import { useState } from "react";


const Login = () => {

    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSingIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result);
                setUser(result.user);
            })
            .catch(error => {
                console.log('ERROR', error);
                setUser(null);
            })
    }


    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            console.log('sign out done')
            setUser(null);
        })
        .catch( error => console.log(error));
    }

    const handleGithubSignIn = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result => {
            console.log(result.user);
            setUser(result.user);
        })
        .catch(error => console.log('ERROR', error))
    }

    // if user exists ? signout : sign in 

    return (
        <div>
            {/* <button onClick={handleGoogleSingIn}>Login with Google</button>
            <button onClick={handleSignOut}>Sign Out</button> */}
            
            {
                user ?
                <button onClick={handleSignOut}>Sign Out</button>
                :
                <>
                <button onClick={handleGoogleSingIn}>Login with Google</button>
                <button onClick={handleGithubSignIn}>Login with Github</button>
                </>
            }

            {
                user && <div>
                    <h4>USER Name: {user.displayName}</h4>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL } alt="" />
                   
                </div>
            }
        </div>
    );
};

export default Login;