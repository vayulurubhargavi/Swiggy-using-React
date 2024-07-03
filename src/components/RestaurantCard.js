import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    // console.log('props received :',props);

    const { resObj } = props;
    // console.log('resobj:',resObj);
    const { cloudinaryImageId, name, avgRating, sla,cuisines, areaName, costForTwo } = resObj.info;
    return (
        <div className='res-card'>
            <img className='res-logo' src={CDN_URL+cloudinaryImageId} alt="res-img" />
            <h3>{name}</h3>
            <div className='res-info'>
                <h4>{avgRating}/5<span>&nbsp; &bull;{sla.slaString}</span></h4>
                <p >{cuisines.join(',')}</p>
                <p>{areaName}</p>
                <p>{costForTwo}</p>
            </div>
            
        </div>
    )
}



// higher order component-a fn that takes another component and enhances the component with new features

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        // console.log(props);
        const { resObj } = props;
       
        return (
                <div  className="relative">
                <h4   className="absolute  right-18 left-4 bg-black text-white p-2 rounded-md  m-0 text-lg">{resObj.info.aggregatedDiscountInfoV3.header + resObj.info.aggregatedDiscountInfoV3.subHeader}</h4>
                <RestaurantCard  {...props} />
                </div >
        )
    }
    
}
export default RestaurantCard;