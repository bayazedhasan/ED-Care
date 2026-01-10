"use client";
import { useEffect, useState } from 'react';

const useData = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("/learnData.json")
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    const [btn, setBtn] = useState([]);
    useEffect(() => {
        fetch("/btnData.json")
            .then(res => res.json())
            .then(data => setBtn(data));
    }, []);

    const [cardss, setCardss] = useState([]);
    useEffect(() => {
        fetch("/lessonCard.json")
            .then(res => res.json())
            .then(data => setCardss(data));
    }, []);

    const [best, setBest] = useState([]);
    useEffect(() => {
        fetch("/bestC.json")
            .then(res => res.json())
            .then(data => setBest(data));
    }, []);
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch("/bookData.json")
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);
    const [blogs,setBlogs] = useState([])
    useEffect(()=>{
        fetch("/blogData.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])


    return { data, btn, blogs, cardss, best, books};

};
export default useData;
