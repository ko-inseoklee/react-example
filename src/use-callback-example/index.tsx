import { useState } from "react";

export const UseCallbackExample: React.FC = () => {
    
    const [todos, setTodos] = useState<string[]>([]);

    const addTodos = () => {
        const inputElement = document.getElementById('use-callback-input-1') as HTMLInputElement;
        setTodos([...todos, inputElement.value]);
        
        //input tag 초기화
        inputElement.value = null!;
    }

    return <div
        style={{
            display:'flex',
            flexDirection:'column',
        }}
        placeholder="TODO 입력"
    >
        <div>
            <input id={"use-callback-input-1"} onKeyUp={(event: any) => {
                if(event.code === 'Enter') {
                    addTodos();
                }
            }}/>
            <button onClick={addTodos}>추가</button>
        </div>
        <div> {
            todos.map((el: string) => <div>{el}</div>)    
        }</div>
    </div>
}