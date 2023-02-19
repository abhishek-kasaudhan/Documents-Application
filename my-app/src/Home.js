import { Button } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate=useNavigate()
    const[loginloading ,setloginLoading]=useState(false)
    const[signuploading ,setsignupLoading]=useState(false)
    const handleLogIn=()=>{
        setloginLoading(true)
        setTimeout(
            () => {
                setloginLoading(false)
                navigate('/Login') 
                return (console.log('loggingIn'))},
            5000
          );
    }
    const handleSignUp =()=>{
        setsignupLoading(true)
        setTimeout(
            () => {
                setsignupLoading(false)
                navigate('/Signup') 
                return (console.log('Signup'))},
            5000
          );
    }

    return (
     <div className="flex flex-col items-center mt-[20px] gap-[20px]">
        <img src="./Thinkwik.png" height="400" width="500" alt="logo" />
        <div className="text-[35px] font-bold text-[#EB5C55]">Thinkwik</div>
        <div className="text-[14px] mt-[-10px]">A TECHNOLOGY AGENCY BUILDING
            DIGITAL PRODUCTS THAT MATTER</div>
    <Button onClick={handleLogIn} loading={loginloading} className=" w-[200px] bg-[#EB5C55] text-white font-bold h-12">
        <span className="tracking-[2px]"> LOG IN</span>
    </Button>
    <Button onClick={handleSignUp} loading={signuploading} className=" w-[200px] bg-[#EB5C55] font-bold text-white h-12">
        <span className="tracking-[2px]"> SIGN UP</span>
    </Button>
    </div>)
    
};
export default Home;