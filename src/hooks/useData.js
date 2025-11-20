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

    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch("/lessonCard.json")
            .then(res => res.json())
            .then(data => setCards(data));
    }, []);

    const [best, setBest] = useState([]);
    useEffect(() => {
        fetch("/bestC.json")
            .then(res => res.json())
            .then(data => setBest(data));
    }, []);

    return { data, btn, cards, best };
};

export default useData;
