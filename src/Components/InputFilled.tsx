import "./Input.css";


interface Props{
    todo:string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e:React.FormEvent) => void;
} 

const InputField:React.FC<Props> = ({todo,setTodo,handleAdd}) => {
        return (
            <>
            <form className="form" onSubmit={handleAdd}>
                <input type="input" 
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