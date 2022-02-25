import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = (props) => {

    return (
        <div>
            <p>Your favorite pizza on demand</p>

            <Link to='/pizza'>
                <button id='order-pizza'> Order Pizza </button>
            </Link>
        </div>
    )
}

export default Home;