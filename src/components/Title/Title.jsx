import { useState, useEffect } from 'react';
import './Title.css';

const FULL_TEXT = 'hello, friend.';

const Title = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count >= FULL_TEXT.length) return;
        const id = setTimeout(() => setCount(count + 1), 100);
        return () => clearTimeout(id);
    }, [count]);

    return (
        <div>
            <h1>
                {FULL_TEXT.slice(0, count)}
                <span className="cursor">_</span>
            </h1>
        </div>
    );
};

export default Title;
