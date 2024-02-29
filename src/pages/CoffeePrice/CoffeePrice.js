import React from 'react';
import { PeopleSay } from '../../components/PeopleSay/PeopleSay';
import { CoffeeOrder } from '../../components/CoffeeOrder/CoffeeOrder';


export const CoffeePrice = () => {
    return (
        <div>
            <CoffeeOrder />
            <PeopleSay />
        </div>
    );
}