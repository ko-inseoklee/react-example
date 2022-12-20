const CounterView = ({count, onClickMinus, onClickPlus}: any) => {
    return <div>
        <p>{count}</p>
        <button onClick={onClickMinus}>-</button>
        <button onClick={onClickPlus}>+</button>
    </div>
}

export default CounterView;