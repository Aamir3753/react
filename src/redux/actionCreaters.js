import * as ActionTypes from './ActionTypes';
import { DISHES } from '../Shared/dishes';
import { LEADERS } from '../Shared/leaders';
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
    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000)
}
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
})