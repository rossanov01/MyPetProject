import React, { useEffect } from 'react';
import { Offer } from '../../components/Offer/Offer';
import { Menu } from '../../components/Menu/Menu';
import { PeopleSay } from '../../components/PeopleSay/PeopleSay';
import { useDispatch } from 'react-redux';
import { fetchData } from '../../Redux/coffee/coffeeSlice';


export const MainPage = () => {
    return (
        <div>
            <Offer />
            <Menu />
            <PeopleSay />
        </div>
    );
}