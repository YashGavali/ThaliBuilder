import * as actionTypes from './shopping-types';

const INITIAL_STATE = {
    ingredients: [
        {
            id:1,
            name:"Chapati",
            price:20,
            image:"https://media.istockphoto.com/photos/traditional-indian-roti-ready-to-serve-picture-id526846282?k=20&m=526846282&s=612x612&w=0&h=H8iikcm6552wIy62TYBmPHn_aiARx9sayRc8r0Fk2Vw="
        },
        {
            id:2,
            name:"Pickle",
            price:10,
            image:"https://media.istockphoto.com/photos/image-of-wooden-bowl-containing-green-mango-chutney-surrounded-by-picture-id1338317884?k=20&m=1338317884&s=612x612&w=0&h=5U21vMLMhdMUf1zPnMO3vQ6SuL5YOl2MHIfT1f4NX8w="
        },
        {
            id:3,
            name:"Curd",
            price:15,
            image:"https://media.istockphoto.com/photos/yogurt-is-good-for-health-with-black-background-picture-id1214850940?s=612x612"
        },
        {
            id:4,
            name:"Sweet",
            price:50,
            image:"https://media.istockphoto.com/photos/gulab-jamun-with-ice-cream-dessert-or-sweet-of-indian-subcontinent-picture-id1365064083?k=20&m=1365064083&s=612x612&w=0&h=zketdQEQgVA6isBx0M8hBJKNKke2pX6EPx9PKx1IsSw="
        },
        {
            id:5,
            name:"Daal",
            price:80,
            image:"https://media.istockphoto.com/photos/indian-dal-traditional-indian-soup-lentils-indian-dhal-spicy-curry-in-picture-id1130228942?k=20&m=1130228942&s=612x612&w=0&h=-2R7oo0QPMFxCewert99fFDd12I-PhVzETWR3MvHfcc="
        },
        {
            id:6,
            name:"Paneer Dish",
            price:100,
            image:"https://media.istockphoto.com/photos/green-peas-or-matar-paneer-curry-recipe-served-in-a-bowl-selective-picture-id1077980738?k=20&m=1077980738&s=612x612&w=0&h=iZchEQHJPRbIgfas9lgntFkLRqNOV9cuTIREovzU468="
        },

    ],               // {id,name,price,image}
    finalThali: [],                 // {id,name,price,image,quantity}
    currentItem: null,
};

const shopReducer = (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case actionTypes.ADD_TO_THALI:
            const item = state.ingredients.find((ingredient) => ingredient.id === action.payload.id);
            const inThali = state.finalThali.find(item => item.id === action.payload.id ? true : false)
            return {
                ...state,
                finalThali: inThali ? state.finalThali.map(item => item.id === action.payload.id ? {...item, qty: item.qty + 1}: item ) : [...state.finalThali, {...item,qty : 1}],
            };
        case actionTypes.REMOVE_FROM_THALI:

            return {
                ...state,
                finalThali : state.finalThali.filter(item => item.id !== action.payload.id),
            }
        default:
            return state;
    }
};

export default shopReducer;