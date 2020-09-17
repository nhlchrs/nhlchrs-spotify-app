export const initialState ={
    user : null,
    playlist : [],
    playing : false,
    item : null,
    // token:"BQDnmCGNubJfVyZMgMvp1LYnYBxLhvQIUV4k6-xS_c4GEQ53zv…qZCnyKyjSxY0lvojgiI0VKEFp9-XD5cll8TiSprz6aOpZrDEk"
}

const reducer = (state, action )=>{
    console.log(action);
    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user : action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            }
        case 'SET_PLAYLIST':
            return{
                ...state,
                playlists : action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly:action.discover_weekly
            }
            default:
                return state;
    }   
}
export default reducer;