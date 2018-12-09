import { DISHES } from '../Shared/dishes';
import { LEADERS } from '../Shared/leaders';
import { PROMOTIONS } from '../Shared/promotions';
import { COMMENTS } from '../Shared/comments';
export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};
export const Reducer = (state = initialState, action) => {
    return state;
}