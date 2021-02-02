import React from 'react';

import HomeForm from '../components/HomeForm';
import HomeList from '../components/HomeList';

const Home = () => (
    <div className="title">
        <h4>Home</h4>
        <p>Essa é minha página inicial.</p>
        <div class="formListagem">
            <HomeForm />
            <HomeList />
        </div>
    </div>
);

export default Home;