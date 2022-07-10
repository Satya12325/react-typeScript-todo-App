import React from 'react';
import {Todo} from "../Modal"
import "./Cards.css"


interface Props{
    data: Todo[];
    setData: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const Cards:React.FC<Props> = ({data,setData}) =>{
    return (
        <div className="cards">
            {
      data.map((data) =>
      
        <div>
          <div>
          {data.todo}

          </div>
            <div>

            </div>        

        </div>
      
      )
     }
        </div>
    )
}

export default Cards
