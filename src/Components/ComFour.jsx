import React,{useContext}from 'react';
import {userContext} from '../userContext/UserContext';

const ComFour = () => {
    const user = useContext(userContext);
    console.log(user);
    return (
        <div>
            <h3>{user.name}</h3>
            <h3>{user.Religion}</h3>
            
        </div>
    );
};

export default ComFour;