import React from 'react';
import { Link } from 'react-router-dom';

const Previsao = () => {
    return (
        <div>
            <h1>Página previsao</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                </ul>
            </nav>
        </div>
    );
}

export default Previsao;