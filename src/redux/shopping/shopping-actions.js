import * as actionTypes from './shopping-types';

export const addtoThali  = (itemID) =>{
    return {
        type: actionTypes.ADD_TO_THALI,
        payload:{
            id:itemID,
        }
    }
}

export const removeFromThali = (itemID) =>{
    return {
        type:actionTypes.REMOVE_FROM_THALI,
        payload:{
            id:itemID,
        }
    }
}