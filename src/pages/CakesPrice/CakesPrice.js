import React from 'react';
import { PeopleSay } from '../../components/PeopleSay/PeopleSay';
import { CakesOrder } from '../../components/CakesOrder/CakesOrder';


export const CakesPrice = () => {
    return (
        <div>
            <CakesOrder />
            <PeopleSay />
        </div>
    );
}