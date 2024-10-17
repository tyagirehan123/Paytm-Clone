import { useState } from "react"
import { Bottomwarning } from "../component/BottomWarning"
import { Button } from "../component/Button"
import { Heading } from "../component/heading"
import { Inputbox } from "../component/inputBox"
import { Subheading } from "../component/SubHeading"
import { useNavigate } from "react-router-dom"
import axios  from "axios"
export const Signin = () => {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate();
    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <Subheading label={"Enter your credentials to access your account"} />
        <Inputbox onChange={e=>{
          setUsername(e.target.value)
        }}placeholder="harkirat@gmail.com" label={"Email"} />
        <Inputbox  onChange={e=>{
          setPassword(e.target.value)
        }}placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button onClick={async()=>{
                const response=await axios.post("http://localhost:3000/api/v1/user/signin",{
                  username,
                  password  
                })
                localStorage.setItem("token",response.data.token)
               navigate("/dashboard")
            }} label={"Sign in"}></Button>
        </div>
        <Bottomwarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}