import React from 'react'
import { useState } from 'react';

const Content = () => {
    const [name, setName] = useState('Nabil');
    const [count, setCount] = useState(0);
    const HandleNameChange = () => {
        const nameArray = ['Nabil', 'Munnu'];
        const int = Math.floor(Math.random()*2);
        setName(nameArray[int]);
    }
    const handleClick = () =>{
        if(count <10){
            setCount(count+1);
        }
        else{
            setCount('onek marcho amare. Betha lage na amar???')
        }
    }
    return (
        <main>
            Hi {name}..!
            <br />
            <h2>{count}</h2>
            <button onClick={HandleNameChange}>Click</button>
            <button onClick={handleClick}>Click to count</button>
        </main>
    )
}

export default Content