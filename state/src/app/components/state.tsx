"use client"
import { useState } from "react"

export default function State(){

    const [count,setCount] = useState(0)
    return(
        <div>
            <p className=" text-center text-6xl mb-10">
                My Count is: {count}
            </p>
            <div className="flex space-x-3 justify-center">
            <button onClick={()=> setCount(count + 1)} className="bg-black text-white w-40 h-16 text-3xl rounded-md hover:bg-blue-900">Increment</button>
            <button onClick={()=> setCount(count - 1)} className="bg-black text-white w-40 h-16 text-3xl rounded-md hover:bg-blue-900">decremnt</button>
            
            </div>
            <div className="flex justify-center mt-8">
            <button onClick={()=> setCount(0)} className="bg-black text-white w-32 h-12 text-2xl rounded-md hover:bg-blue-900 ">Reset</button>
            </div>
        </div>
    )
}