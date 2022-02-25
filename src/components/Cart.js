import React from 'react';

export default function Cart (props) {
    const { pizza } = props;

    return(
        <div className='myCart'>
            <p>{pizza.name}</p>
            <p>{pizza.size}</p>

            {
                !!pizza.toppings && !!pizza.toppings.length &&
                <div>
                    Toppings:
                    <ul>
                        {pizza.toppings.map((top, idx) => (
                            <li key={idx}>{ top }</li>
                        ))}
                    </ul>
                </div>
            }   

            <p>{pizza.special}</p>
        </div>
    )
}