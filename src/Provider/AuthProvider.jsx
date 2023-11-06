import { createContext, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword,  getAuth, signInWithPopup} from "firebase/auth";
import app from "../Firebase/Firebase.config";
const GoogleProvider = new GoogleAuthProvider();

const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password);
    }


    const GoogleAccount = () => 
    {
        setLoading(true);
        return signInWithPopup(auth, GoogleProvider);
    }



    const userInfo = {
        user,
        loading,
        createUser,
        GoogleAccount
    }

    return (
        <AuthContext.Provider value={userInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;