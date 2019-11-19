import Booking1 from '../images/booking_1.jpg';
import Booking2 from '../images/booking_2.jpg';
import Booking3 from '../images/booking_3.jpg';
const initState = {
    posts: [ {
                    id: '1',
                    price: "$150",
                    image: Booking1,
                    categories: "Single Room"
                },
                {
                    id: '2',
                    price: "$150",
                    image: Booking2,
                    categories: "Single Room"
                },
                {
                    id: '3',
                    price: "$150",
                    image: Booking3,
                    categories: "Single Room"
                },  
                {
                    id: '4',
                    price: "$150",
                    image: Booking1,
                    categories: "Single Room"
                },
                {
                    id: '5',
                    price: "$150",
                    image: Booking2,
                    categories: "Single Room"
                },
                {
                    id: '6',
                    price: "$150",
                    image: Booking3,
                    categories: "Single Room"
                }] }
function rootReducer(state = initState, action){
    return state;
}
export default rootReducer;