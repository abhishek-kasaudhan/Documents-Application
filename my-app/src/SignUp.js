import { Button, Input } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUpAction } from "./store";

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading,setLoading]=useState(false);
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const handleSignup = (e) => {
      e.preventDefault();
      setLoading(true);
      setTimeout(
        () => {
            setLoading(false) 
            dispatch(signUpAction({ name, email, password }));
            navigate('/') 
            return (console.log('backtohomescreen'))},
        5000
      );
    };
    return (
        <div className="flex flex-col  gap-[20px] items-center mt-[150px]">
        <div className="text-[40px] text-[#EB5C55] font-bold">Name</div>
        <Input className="w-[500px] h-[50px] text-[20px] font-bold " value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your Name"  />
        <div className="text-[40px] text-[#EB5C55] font-bold">Email Id</div>
        <Input className="w-[500px] h-[50px] text-[20px] font-bold " value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email Id"  />
        <div className="text-[40px] text-[#EB5C55] font-bold" >Password</div>
        <Input.Password className="w-[500px] h-[50px] text-[20px] font-bold " value={password} onChange={(e) => setPassword(e.target.value)} placeholder="************" />
        {<Button disabled={!(email && name && password)} laoding={loading} onClick={handleSignup} className="w-[500px] mt-[50px] !bg-[#EB5C55] font-bold text-white h-[50px]">
        <span className="tracking-[2px]">Sign Up</span>
        </Button>}
    </div>  
    );
};
export default Signup;