import { useState } from "react"
import CounterView from "./CounterView";

const Counter = (): JSX.Element => {
    const [count, setCount] = useState<number>(0);

    const onClickMinus = () => setCount(prev => prev - 1);
    const onClickPlus = () => setCount(prev => prev + 1);

    const props = {
        count,          // count = count;
        onClickMinus,   // onClickMinus = onClickMinus
        onClickPlus,    // onClickPlus = onClickPlus
    }

    return <CounterView {...props}/>
}

export default Counter;