import React, { createContext, useContext, useReducer, useEffect, useState } from "react";
import { reducer } from "./Reducer";
import { useNavigate } from "react-router-dom";

export const API_KEY = process.env.REACT_APP_API_KEY;
export const BASE_API_URL = `https://www.googleapis.com/youtube/v3`;
const Appcontext = createContext();
export const UserDefaultImg = `/img/User-img.png`;


const initialState = {
    IsLoading: true,
    IsError: false,
    maxResults: 50,
    regionCode: "IN",
    items: [],
    CategoryId: 0,
    show: false,
    searchQuery: "",
    Searchparams: "",
    SearchItems: [],
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const Navigate = useNavigate();

    // uploaded 
    function getTimeDifference(uploadDate) {
        // Parse the date from the video uploaded date
        const uploadDateObj = new Date(uploadDate);

        // Get the current date
        const currentDate = new Date();

        // Calculate the difference in time (in milliseconds)
        const timeDifference = currentDate - uploadDateObj;

        // Convert time difference to days
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        // Convert time difference to months (approximate)
        const monthsDifference = Math.floor(daysDifference / 30.44); // 30.44 is the average number of days in a month

        // Calculate remaining days after accounting for the months
        const remainingDays = daysDifference % 30.44;

        // Construct the result string conditionally
        let result = '';
        if (monthsDifference > 0) {
            result += `${monthsDifference} months`;
        }
        if (Math.floor(remainingDays) > 0) {
            if (result) {
                result += `, `;
            }
            result += `${Math.floor(remainingDays)} days`;
        }
        if (!result) {
            result = '0 days';
        }

        return `${result} ago`;
    }

    // duration 
    function parseDuration(duration) {
        let hours = 0, minutes = 0, seconds = 0;
        const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

        if (match[1]) hours = parseInt(match[1].slice(0, -1));
        if (match[2]) minutes = parseInt(match[2].slice(0, -1));
        if (match[3]) seconds = parseInt(match[3].slice(0, -1));

        return `${hours > 0 ? hours + ':' : ''}${minutes > 0 ? (hours > 0 && minutes < 10 ? '0' : '') + minutes + ':' : '0:'}${seconds < 10 ? '0' : ''}${seconds}`;
    }

    // handleCategory
    const handleCategory = (Categorydata) => {
        // console.log(Categorydata);
        dispatch({
            type: "HANDLE_CATEGORY",
            payload: {
                CategoryId: Categorydata,
            },
        })
    }
    // handle Offcanvas
    const handleClose = () => {
        dispatch({
            type: "OFFCANVAS_CLOSE"
        });
    }
    const handleShow = () => {
        dispatch({
            type: "OFFCANVAS_SHOW"
        });
    }
    const handleQuery = (searchdata) => {
        dispatch({
            type: "SET_SEARCH_QUERY",
            payload: searchdata,
        })
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (state.searchQuery) {
            Navigate(`/Search?query=${state.searchQuery}`);
        }
    }



    // views 
    function nFormatter(num) {
        if (num >= 1000000000) {
            return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
        }
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        return num;
    }

    const fetchdata = async (url, actionType) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data.items);
            if (data.items) {
                dispatch({
                    type: actionType,
                    payload: {
                        items: data.items,
                    }
                })
            } else {
                dispatch({ type: "SET_ERROR" })
            }
        } catch (error) {
            console.log(error);
        }
    }




    // fetch data useffect
    useEffect(() => {
        setTimeout(() => {
            fetchdata(`${BASE_API_URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${state.maxResults}&regionCode=${state.regionCode}&videoCategoryId=${state.CategoryId}&key=${API_KEY}`, "GET_DATA");
            fetchdata(`${BASE_API_URL}/search?part=snippet&maxResults=${state.maxResults}&type=video&q=${state.searchQuery}&key=${API_KEY}`, "SEARCH_DATA");
        }, 2000);
    }, [state.CategoryId, state.searchQuery]);

    return (
        <>
            <Appcontext.Provider value={{ ...state, nFormatter, getTimeDifference, parseDuration, handleCategory, handleClose, handleShow, handleQuery, handleFormSubmit }}>{children}</Appcontext.Provider>
        </>
    )
}

const UseGlobalContext = () => {
    return useContext(Appcontext);
}

export { Appcontext, AppProvider, UseGlobalContext }