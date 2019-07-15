import React from 'react';
import { BASE_URL } from "./Config";

const bringUrl = (url) => {
    return  `${BASE_URL}${url}`;
}


const Helper = (url,method,body) => {
    if(method === "POST")
    {
        return (
            fetch(bringUrl(url),{
                method: "POST",
                    headers : {
                        "Content-Type" : "application/json"
                    },
                    body : JSON.stringify(body)
            })
            .then((res)=> {
                return res.json();
            })
        );
    }else if(method === "GET"){
        return (
            fetch(bringUrl(url))
            .then((res)=> {
                return res.json();
            })
        );
    }
}

export default Helper;