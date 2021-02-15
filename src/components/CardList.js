import React from 'react';
import Card from './Card'

const CardList = ({ robots }) => {

    //const cardsArray = robots.map((user, i) => <Card key={i} id={robots[i]}/>);

    return (
        <div>
            {robots.map((user, i) => <Card key={i} id={robots[i]}/>)}
        </div>
    )
}

export default CardList;