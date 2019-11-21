import Booking1 from '../images/booking_1.jpg';
import Booking2 from '../images/booking_2.jpg';
import Booking3 from '../images/booking_3.jpg';
import { showSingleProduct } from '../actions';
const initState = {
    posts: [ {
                    id: '1',
                    price: "$150",
                    image: Booking1,
                    categories: "Single Room",
                    name: "Room Luxury 1",
                    service: "- Wifi free ",
                    decription: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Suspendisse sollicitudin velit sed leo."
                },
                {
                    id: '2',
                    price: "$250",
                    image: Booking2,
                    categories: "Luxury Room",
                    name: "Room Luxury 2",
                    service: "- Coctail free ",
                    decription: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Suspendisse sollicitudin velit sed leo."
                },
                {
                    id: '3',
                    price: "$350",
                    image: Booking3,
                    categories: "Family Room",
                    name: "Room Luxury 3",
                    service: "- Cake free ",
                    decription: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Suspendisse sollicitudin velit sed leo."
                },  
                {
                    id: '4',
                    price: "$450",
                    image: Booking1,
                    categories: "Luxury Room",
                    name: "Room Luxury 4",
                    service: "- Coke free ",
                    decription: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Suspendisse sollicitudin velit sed leo."
                },
                {
                    id: '5',
                    price: "$550",
                    image: Booking2,
                    categories: "Family Room",
                    name: "Room Luxury 5",
                    service: "- PC free ",
                    decription: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Suspendisse sollicitudin velit sed leo."
                },
                {
                    id: '6',
                    price: "$650",
                    image: Booking3,
                    categories: "Single Room",
                    name: "Room Luxury 6",
                    service: "- Wifi free ",
                    decription: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Suspendisse sollicitudin velit sed leo."
                }] }
function rootReducer(state = initState, action){
    switch (action.type) {
        case showSingleProduct: {
            return {
                ...state
            }
        }
        default: return state;
    }
}
export default rootReducer;