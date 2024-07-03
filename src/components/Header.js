import { useContext, useState } from "react";
import  LOGO_URL  from "../utils/constant"; 
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import {UserContext} from "../utils/userContext";
import { DarkThemeContext } from "../utils/DarkTheme";
import { useSelector } from "react-redux";
//  import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
// import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const Header = () => { 
    const [btn, setBtn] = useState('Login');
    const onlineStatus = useOnlineStatus();

    const  {userInfo}  = useContext(UserContext);
    console.log(userInfo);
    const { theme ,toggleTheme} = useContext(DarkThemeContext);
    console.log(theme);
   
    // subscribe to store to get the data using selector
    const cartItems = useSelector((store) => store.cart.items);
    
    return (
       
        <div className='header' >
            {/* logo and nav items */}
            <div className=' flex flex-row flex-wrap items-center justify-center'>
                <img className='logo rounded-full' src={LOGO_URL} alt='foo-app-logo' />
                <p className="text-xl italic font-extrabold text-orange-600  ">SWIGGY</p>
            </div>
            <div className='nav-items'>
                <ul >
                    <li className="font-bold">{ onlineStatus? `${userInfo}✅` : '🛑📶'}</li>
                    <li>
                    <Link to='/'>Home</Link> 
                    </li>
                    <li>
                       <Link to='/about'>About</Link> 
                    </li>
                    <li>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li>
                        <Link to='/cart'>🛒</Link><span>{cartItems.length}</span></li>
                    <li>
                        <Link to='/grocery'>Grocery</Link>
                    </li>
                     <button className=" mr-2 " onClick={toggleTheme}>{theme? 'lightmode' : 'darkmode'}</button>
                    <button className="login-button"
                        onClick={() => {btn === "Login" ? setBtn('Logout'):setBtn('Login')}}>{btn}</button>
                </ul>
            </div>
            </div>
      
    )
}
export default Header;