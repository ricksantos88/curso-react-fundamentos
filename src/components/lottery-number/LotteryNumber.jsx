import React, { useState } from 'react'

import './LotteryNumber.css'

const LotteryNumber = (props) => {
    function generateNumberNotContained(min, max, array) {
        const aleatory = parseInt(Math.random() * (max + 1 - min)) + min;
        return array.includes(aleatory)
            ? generateNumberNotContained(min, max, array)
            : aleatory;
    }

    function generateNumbers(qtt) {
        const numbers = Array(qtt)
            .fill(0)
            .reduce((nums) => {
                const newNumbers = generateNumberNotContained(1, 60, nums);
                return [...nums, newNumbers];
            }, [])
            .sort((n1, n2) => n1 - n2);

        return numbers;
    }

    const [qtt, setQtt] = useState(props.qtt || 5);
    const initialNumbers = generateNumbers(qtt);
    const [numbers, setNumbers] = useState(initialNumbers);

    return (
        <div className="Mega">
            <h2>Lottery Numbers</h2>
            <h3>{numbers.join(" ")}</h3>
            <div>
                <label>Quantity of numbers</label>
                <input
                    min="6"
                    max="15"
                    type="number"
                    value={qtt}
                    onChange={(e) => {
                        setQtt(+e.target.value)
                        setNumbers(generateNumbers(+e.target.value))
                    }}
                />
            </div>
            <button onClick={(_) => setNumbers(generateNumbers(qtt))}>
                Generate Numbers
            </button>
        </div>
    );
};

export default LotteryNumber;