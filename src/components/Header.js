import React from 'react';
import { Link, Route } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <h3>This is Bloom Pizza</h3>
            <Link to='/'>
                <button>Home</button>
            </Link>
            <Link to='/pizza'>
                <button>Pizza</button>
            </Link>
            <Link to='/cart'>
                <button>Cart</button>
            </Link>
        </div>
    )
}