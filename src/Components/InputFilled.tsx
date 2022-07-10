import "./Input.css";
import {useRef} from "react";

interface Props{
    todo:string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e:React.FormEvent) => void;
} 

const InputField:React.FC<Props> = ({todo,setTodo,handleAdd}) => {
       
    const inputRef = useRef<HTMLInputElement>(null)
    
    return (
            <>
            <form className="form" onSubmit={(e)=>{
                handleAdd(e);
                inputRef.current?.blur();
            }}>
                <input type="input"
                ref={inputRef} 
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
                placeholder="Enter some thing..."
                className="input-box"
                />
                <button className="input-btn" type="submit">+</button>
            </form>
            </>
        )
}

export default InputField;