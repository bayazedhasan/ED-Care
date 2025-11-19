import React, { useEffect, useState } from 'react';

const useData = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch("/learnData.json")
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
     const [btn,setBtn] = useState([])
    useEffect(()=>{
        fetch("/btnData.json")
        .then(res=>res.json())
        .then(data=>setBtn(data))
    },[])
    return {data,btn}
        
;
};

export default useData;