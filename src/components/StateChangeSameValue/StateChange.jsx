import React, { useEffect, useState } from 'react'

const StateChange = () => {
    const [count, setCount] = useState(1);
    console.log("🚀 ~ StateChange ~ count:", count)


    useEffect(() => {
        if (count == 2) {
            console.log('useEffect called', count);
        }
    }, [count]);


    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => {
                if (count == 2) {
                    setCount(2)
                } else {
                    setCount(count + 1)

                }
            }}>+</button>
        </div>
    )
}

export default StateChange