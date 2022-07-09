import "./Input.css";




const InputField:React.FC = () => {
        return (
            <>
            <form className="form">
                <input type="input" 
                placeholder="Enter some thing..."
                className="input-box"
                />
                <button className="input-btn">+</button>
            </form>
            </>
        )
}

export default InputField;