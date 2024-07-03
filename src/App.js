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

import React, { Suspense, lazy, useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import  Cart  from './components/Cart';

import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/ContactUs';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';

import Shimmer from '../src/components/Shimmer';
 import { Provider } from 'react-redux';


 import { DarkThemeContext, DarkThemeContextProvider } from './utils/DarkTheme';
import { UserContextProvider } from './utils/userContext';
import appStore from './utils/appStore';

// const heading = React.createElement("h1", { id: "heading" }, 'hello, welcome to react!!');

const AppLayout = () => {
  
  
    
    // console.log(username);
     const {theme}  = useContext(DarkThemeContext);


    return (
        <Provider store={appStore}>

        <UserContextProvider>
        <div className={theme ? 'bg-black text-white' : 'bg-white text-black'}>
            {/* <UserContextProvider>                    */}
            <Header />           
            {/* using of outlet to show the nested ui to show up */}
             <Outlet />            
            {/* </UserContextProvider> */}
            </div>   
            </UserContextProvider>
                
         </Provider>
    )
}

const Grocery = lazy(() => import('../src/components/Grocery'));//dynamic import of a module
// chunking/code splitting/on-demand loading/lazy loading/dynamic bundling

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element:<Body/>
            },
            {
                path: '/about',
                element:<About/>
            }, {
                path: '/contact',
                element:<Contact />
            }, {
                path: '/restaurants/:resid',
                element :<RestaurantMenu/>
            }, {
                path:'/grocery',
                element: <Suspense fallback={<Shimmer/>}>
                               <Grocery />
                        </Suspense>
            }, {
                path: '/cart',
                element:<Cart />
            }
            
        ]
    }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    
      <DarkThemeContextProvider>     
      <RouterProvider
        router={appRouter}
        // fallbackElement= {<Loader/>}
        />
        </DarkThemeContextProvider>
       
        </React.StrictMode>
    );
