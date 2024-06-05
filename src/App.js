// const reactElement_heading = React.createElement(
//     "h1",
//     { id: "heading" },
//     "Hello world !! from React");
//    const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(reactElement_heading);
   

{/* <div class="parent">
    <div class="child1">
        <h1>I am child1 h1 heading tag </h1>
    </div>
    <div class="child2">
        <h1>I am child2 h1 heading tag </h1>
    </div>
</div> */}

import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import RestaurantCard from './components/RestaurantCard';

// const heading = React.createElement("h1", { id: "heading" }, 'hello, welcome to react!!');






const AppLayout = () => {
    return(
         <div className='App'>
            <Header/>
            <Body/>
         </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);
