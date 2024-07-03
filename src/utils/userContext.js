import { createContext,useState,useEffect } from "react";


const UserContext = createContext();

function UserContextProvider(props) {

    const [userInfo, setUserInfo] = useState('default  user');

    useEffect(() => {
        setUserInfo('vayuluru bhargavi')
   
    }, [])
    console.log(userInfo); //gettting default user itself 
    return (
        <>
        <UserContext.Provider value={{userInfo}}>
            {props.children}
        </UserContext.Provider>
         </>
    )
}


export  { UserContext, UserContextProvider};