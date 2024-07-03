import { MENU_API } from "./constant";
import { useState,useEffect } from "react";
 const useFetch = (resid) => {
     const [resInfo, setResInfo] = useState(null);
     useEffect(() => {
        fetchMenu();
      }, [])
      
      const fetchMenu = async () => {
      const data = await fetch('https://corsproxy.io/?'+MENU_API+resid);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    
        // console.log(resInfo);
      }
     return resInfo;

}

export default useFetch;