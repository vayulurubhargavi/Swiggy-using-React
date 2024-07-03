import React from 'react';
// import User from '../components/User';
import UserClass from '../components/UserClass';
import {UserContext} from '../utils/userContext';

class About extends React.Component{
  constructor(props) {
    super(props);
    // console.log('parent constructor');
  
  }
  
 async componentDidMount() {
    // console.log('parent ComponentDidMount called.... ');
   // used to make the api calls
  
  }

  render() {
    // console.log('parent render');
    
    return (
      
      <div className='About'>
          <h3>About page</h3>
        <h5>This is Namaste react web series</h5> 
        <h6  className='font-bold'>Author:
          <UserContext.Consumer >
            {({ userInfo }) => userInfo }
          </UserContext.Consumer>
        </h6>
        {/* <User name={'Vayuluru Bhargavi (function)'} /> */}
        <UserClass  />
        {/* <UserClass name={'Henry David(class)'} location={'UK'} />
        <UserClass name={'Elon Musk(class)'}  location={'US'} /> */}
        </div>
       
  )
    
  }
}
// const About = () => {
//   return (
//       <div className='About'>
//           <h3>About page</h3>
//       <h5>This is Namaste react web series</h5> 
//       {/* <User name={'Vayuluru Bhargavi (function)'} /> */}
//       <UserClass name={'vayuluru Bhargavi(class)'}  location={'chennai'} />
//      </div>
//   )
// }

export default About;