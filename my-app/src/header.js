import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAction } from "./store";
import { useState } from "react";

const Header = () => {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const currentUser = useSelector(state => state.currentUser);
    const[loading ,setLoading]=useState(false)
    const dispatch = useDispatch();
    const navigate=useNavigate();
    
    const handleLogout = () => {
        setLoading(true)
        setTimeout(
            () => {
                setLoading(false) 
                dispatch(logoutAction())
                navigate('/') 
                return (console.log('logout'))},
            5000
          );    
    };
    
    return (
    <div className="flex flex-col items-center gap-[20px] mt-[20px]">
    {isLoggedIn && currentUser && <p className="text-[35px] font-bold text-[#EB5C55]">Logged in as {currentUser.email}</p>}
    {isLoggedIn && <Button loading={loading} onClick={handleLogout} className=" w-[150px] bg-[#EB5C55] font-bold text-white h-">
        <span className="tracking-[2px]"> LOG OUT</span>
    </Button>}
    </div>
    );
};
export default Header;
