import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsPersonCircle } from 'react-icons/bs';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

import HomeLayout from "../../Layouts/HomeLayout";
import { forgotPassword, getUserData, resetPassword, updatePassword, updateProfile } from "../../Redux/Slices/AuthSlice";

function ResetPassward() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [data, setData] = useState({

       password:""
     
    });

const resetToken = useParams()
const {resetId} = resetToken
console.log('reset Id ' ,resetId)
    function handleInputChange(e) {
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value
        })
    }

    async function onFormSubmit(e) {
        e.preventDefault();
        if(!data.password) {
            toast.error("All fields are mandatory");
            return;
        }
       

       const response =  await dispatch(resetPassword([resetId,data]));
       if(response.success){
        navigate('/login')
       }
        await dispatch(getUserData());


    }

    return (
        <HomeLayout>
            <div className="flex items-center justify-center h-[100vh]">
                <form
                    onSubmit={onFormSubmit}
                    className="flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-80 min-h-[26rem] shadow-[0_0_10px_black]"
                >
                    <h1 className="text-center text-2xl font-semibold text-black">Update Password</h1>
                   

                    <div className="flex flex-col gap-1">
                        <label htmlFor="Email" className="text-lg font-semibold text-black">Enter New Password</label>
                        <input 
                            required
                            type="passward"
                            name="password"
                            id="fullName"
                            placeholder="Enter your new password"
                            className="bg-transparent px-2 py-1 border text-gray-700"
                            value={data.password}
                            onChange={handleInputChange}
                        
                        />
                    </div>
                    <button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 text-lg cursor-pointer">
                        Submit
                    </button>
                    
                </form>
            </div>
        </HomeLayout>
    );
}

export default ResetPassward;