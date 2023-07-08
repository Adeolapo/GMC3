import { useState } from "react"


function Person(){
    let show = true

const [display,setDisplay]= useState(show)

    function click(){
        setDisplay(() =>{
           return show =!show
        })
    }
    return(
        <div className="carde">
            <img src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
            <div className={display}>
                <h1>Ade Brown</h1>
                <h3>Surgeon</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid molestias voluptatem expedita eum vitae libero quam suscipit quas optio accusantium?</p>
            </div>
            <button onClick={click}>Show</button>
        </div>
    )
}

export default Person