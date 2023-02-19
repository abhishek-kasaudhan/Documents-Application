import { Button, Form, Input } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction } from "./store";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[loading ,setLoading]=useState(false)
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const handleLogin = (e) => {
      e.preventDefault();
      setLoading(true)
        setTimeout(
            () => {
                setLoading(false)
                dispatch(loginAction({ email, password }))
                navigate('/documents')
                return (console.log('loggedIn'))},
            5000
          );   
    };
    return (
        <div className="flex flex-col  gap-[20px] items-center mt-[200px]">
            <div className="text-[40px] text-[#EB5C55] font-bold">Email Id</div>
            <Input type="email"  className="w-[500px] h-[50px] text-[20px] font-bold " value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email ID"  />
            <div className="text-[40px] text-[#EB5C55] font-bold" >Password</div>
            <Input.Password className="w-[500px] h-[50px] text-[20px] font-bold " value={password} onChange={(e) => setPassword(e.target.value)} placeholder="************" />
            {<Button disabled={!(email && password)} loading={loading} onClick={handleLogin} className="w-[500px] mt-[50px] !bg-[#EB5C55] font-bold text-white h-[50px]">
            <span className="tracking-[2px]">LOG IN</span>
            </Button>}   
        </div>   
    );
};

export default Login;
