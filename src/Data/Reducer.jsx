const reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING": {
            return {
                ...state,
                IsLoading: true,
                IsError: false,
            }
        }
        case "SET_ERROR": {
            return {
                ...state,
                IsError: true,
                IsLoading: false,
            }
        }
        case "GET_DATA": {
            return {
                ...state,
                items: action.payload.items,
                IsLoading: false,
                IsError: false,
            }
        }
        case "SEARCH_DATA": {
            return {
                ...state,
                SearchItems: action.payload.items,
                IsLoading: false,
                IsError: false,
            }
        }
        case "SINGLE_DATA": {
            console.log(action.payload.items);
            return {
                ...state,
                SingleDetails: action.payload.items,
                IsLoading: false,
                IsError: false,
            }
        }
        case "CHANNEL_DATA": {
            console.log(action.payload.items);
            return {
                ...state,
                ChannelDetails: action.payload.items,
                IsLoading: false,
                IsError: false,
            }
        }
        case "COMMENTS_DATA": {
            return {
                ...state,
                Comments: action.payload.items,
                IsLoading: false,
                IsError: false,
            }
        }
        case "REALTED_DATA": {
            return {
                ...state,
                Recommeded: action.payload.items,
                IsLoading: false,
                IsError: false,
            }
        }
        case "HANDLE_CATEGORY": {
            console.log("Reducer CategoryId:", action.payload.CategoryId);
            return {
                ...state,
                CategoryId: action.payload.CategoryId,
            }
        }
        case "OFFCANVAS_CLOSE": {
            return {
                ...state,
                show: false,
            }
        }
        case "OFFCANVAS_SHOW": {
            return {
                ...state,
                show: true,
            }
        }
        case "SET_SEARCH_QUERY": {
            // console.log(action.payload);
            return {
                ...state,
                searchQuery: action.payload
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

export { reducer }