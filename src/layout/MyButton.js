import React, { Component, useState, useContext, useMemo } from 'react';


export default function MyButton() {
    const [count1 , setCount1] = useState(0);
    const [count2 , setCount2] = useState(0);
    const [count3 , setCount3] = useState(0);

    const handleClick1 = React.useCallback(() => {
        setCount1(count1+1);
        console.log('boom');
    }, [count2]);
    
    const handleClick2 = () => {
        setCount2(count2+1);
        console.log('trach');
    };

    const artur = useMemo(() => {setCount3(count3+1); return count3;}, [count2]);
    console.log(artur);

    return(
        <React.Fragment>
            <button onClick={handleClick1}>Artur1</button>
            <div>{count1}</div>
            <button onClick={handleClick2}>Artur2</button>
            <div>{count2}</div>
            <div>{artur}</div>
        </React.Fragment>
    );
}