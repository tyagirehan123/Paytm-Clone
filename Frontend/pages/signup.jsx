import { useState } from "react";
import { Heading } from "../component/heading";
import { Subheading } from "../component/SubHeading";
import { Inputbox } from "../component/inputBox";
import { useNavigate } from "react-router-dom";
import { Bottomwarning } from "../component/BottomWarning"
import {Button} from "../component/Button"
import axios from "axios"
export const Signup=()=>{
    const[firstName,setFirstname]=useState("")
    const[lastName,setLastname]=useState("")
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const navigate=useNavigate();
    return<div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label={"Sign up"}></Heading>
            <Subheading label={"Enter your infromation to create an account"}></Subheading>
            <Inputbox onChange={e=>{
                setFirstname(e.target.value)
            }} placeholder="John" label={"firstName"}></Inputbox>
            <Inputbox onChange={e=>{
                setLastname(e.target.value)
            }} placeholder="Doe" label={"lastName"}></Inputbox>
            <Inputbox onChange={e=>{
                setUsername(e.target.value)
            }} placeholder={"JohnDoe@gmail.com"}  label={"Username"}></Inputbox>
            <Inputbox onChange={e => {
                setPassword(e.target.value)
        }} placeholder="123456" label={"Password"}></Inputbox>
        <div className="pt-4">
            <Button onClick={async()=>{
                const response=await axios.post("http://localhost:3000/api/v1/user/signup",{
                  username,
                  firstName,
                  lastName,
                  password
                    
                })
                localStorage.setItem("token",response.data.token)
               navigate("/dashboard")
            }} label={"Sign up"}></Button>
    </div>
    <Bottomwarning label={"Already have an account"} buttontext={"Sign in"} to={"/signin"}></Bottomwarning>    
     </div>
    </div>
    </div>
}
