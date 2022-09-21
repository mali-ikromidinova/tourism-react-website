import CardItem from "./CardItem";
import './Cards.css';

const Cards = () => {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_items">
                        <CardItem 
                        src="images/img-9.jpg"
                        text="Explore the hidden waterfall deep inside Amazon Jungle"
                        label="Adventure"
                        path='/services'
                        />
                        <CardItem 
                        src="images/img-2.jpg"
                        text="Travel through the Islands of Bali in a Private Cruise"
                        label="Luxury"
                        path='/services'
                        />
                    </ul>
                    
                    <ul className="cards_items">
                        <CardItem 
                        src="images/img-3.jpg"
                        text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                        label="Mystery"
                        path='/services'
                        />
                        <CardItem 
                        src="images/img-4.jpg"
                        text="Experience Footbal on the Top of Himalayan Mountains"
                        label="Adventures"
                        path='/products'
                        />
                        <CardItem 
                        src="images/img-8.jpg"
                        text="Ride through the Sahara Desert on a guided camel tour"
                        label="Adrenaline"
                        path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default Cards;