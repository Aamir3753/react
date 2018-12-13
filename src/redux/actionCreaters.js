import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../Shared/baseUrls';
export const addComment = (dishId, author, rating, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId,
        author,
        rating,
        comment
    }
});
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading());
    return fetch(baseUrl + "dishes")
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(err => console.log(err));
}
export const fetchPromos = () => (dispatch) => {
    dispatch(loadingPromos());
    fetch(baseUrl + "promotions")
        .then(res => res.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(err => console.log(err));
}
export const fetchComments = ()=>(dispatch)=>{
    fetch(baseUrl+"comments")
    .then(res=>res.json())
    .then(com=>dispatch(addComments(com)))
    .catch(err=>console.log(err));
}
const addComments = (com)=>({
    type:ActionTypes.DISPLAY_COMMENTS,
    payload:com
})
const dishesLoading = () => ({
    type: ActionTypes.LOADING_DISHES,
});
const dishesLoadingFaild = (errMess) => ({
    type: ActionTypes.LOADING_FAILED,
    payload: errMess
});
const addDishes = dishes => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});
const addPromos = promos => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
})
const loadingPromos = () => ({
    type: ActionTypes.LOADING_PROMOS
})
const faildPromos = errMess => ({
    type: ActionTypes.PROMOS_FAILD,
    payload: errMess
})