import RestaurantCard from "./RestaurantCard"; 
// import resList from '../utils/mockData';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestaurantCard";

const Body = () => {
    const [reslist, setReslist] = useState([]);
    const [filteredReslist, setfilteredReslist] = useState([]);
    const [searchText, setSearchText] = useState('');


    useEffect(() =>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        // console.log(json?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        // optional chaining
        setReslist(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredReslist(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(reslist);

    }
    // conditonal rendering
    // if (reslist.length === 0) {
    //     return <Shimmer/>
    // }
     
    const onlineStatus = useOnlineStatus(); 
    if (onlineStatus === false) {
        return  <h1>You are Offline !!  Please check your internet connection....</h1>
    }
     
    // using the higher order component
    const RestaturantCardPromoted = withPromotedLabel(RestaurantCard);

    return reslist.length === 0? <Shimmer/>:(
        <div className='body'>
            <div className="filter">
                <div className="search-input" >
                    <input type="type"
                        className='search-box rounded-md m-0.5  border-spacing-2 p-2 mr-1.5'
                        value={searchText}
                        onChange={(e) => { setSearchText(e.target.value) }}
                      
                    />
                    <button className=' login-button ' onClick={() => {
                        //FILTER the restauarant card and update the ui
                        const filteredRes = reslist.filter((res) => {
                            return res.info.name.toLowerCase().includes(searchText);
                        })                      
                        setfilteredReslist(filteredRes);
                    }}>Search</button>
                </div>
                <button className=' login-button'
                    onClick={() => {
                    const filterlist = reslist.filter((res) => res.info.avgRating > 4.1);
                    // console.log(filterlist);
                    setfilteredReslist(filterlist);
                }}
                >TopRatedRes</button>
            </div>
            
            <div className='res-container'>
                {/* restauarant card component   */}
                {filteredReslist.map((restauarant) => {
                    return <Link to={'/restaurants/' +restauarant.info.id}>
                        {restauarant.info.aggregatedDiscountInfoV3 ?
                            <RestaturantCardPromoted key={restauarant.info.id} resObj={restauarant} /> :
                            <RestaurantCard key={restauarant.info.id} resObj={restauarant} />}
                    </Link>
                })}
               
            </div>
        </div>
    )
}



export default Body;