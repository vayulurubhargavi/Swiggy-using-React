import RestaurantCard from "./RestaurantCard"; 
// import resList from '../utils/mockData';
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [reslist, setReslist] = useState([]);
    const [filteredReslist, setfilteredReslist] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() =>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8352188&lng=80.2010804&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        console.log(json?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        // optional chaining
        setReslist(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredReslist(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }
    // conditonal rendering
    // if (reslist.length === 0) {
    //     return <Shimmer/>
    // }
    return reslist.length === 0? <Shimmer/>:(
        <div className='body'>
            <div className="filter">
                <div className="search-input" >
                    <input type="type"
                        className='search-box'
                        value={searchText}
                        onChange={(e)=>{setSearchText(e.target.value)}} />
                    <button onClick={() => {
                        // console.log(searchText);
                        //FILTER the restauarant card and update the ui
                        const filteredRes = reslist.filter((res) => {
                            return res.info.name.toLowerCase().includes(searchText);
                        })
                        
                        setfilteredReslist(filteredRes);
                       
                        // console.log(searchText);
                        // console.log(filteredResList);
                    }}>search</button>
                </div>
                <button className='search'
                onClick={() => {
                    // console.log('button clicked');
                    const filterlist = reslist.filter((res) => res.info.avgRating > 4.1);
                    // console.log(filterlist);
                    setfilteredReslist(filterlist);
                }}
                >TopRatedRes</button>

            </div>
            
            <div className='res-container'>
                {/* restauarant card component   */}
               
                {/* <RestaurantCard name='subway' cuisine='burger,sandwich' stars='4.4'/> */}
                {/* <RestaurantCard  name='kfc' cuisine='chicken,rolls' stars='4.5'/> */}
                {filteredReslist.map((restauarant) => {
                    return <RestaurantCard key={restauarant.info.id}  resObj={restauarant} />
                })}
               
            </div>
        </div>
    )
}



export default Body;