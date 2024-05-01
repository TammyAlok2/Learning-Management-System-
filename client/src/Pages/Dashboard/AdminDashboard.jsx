import { ArcElement, BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title,Tooltip } from "chart.js";
import { useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { BsCollectionPlayFill, BsTrash } from "react-icons/bs";
import {FaUsers} from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";
import { GiMoneyStack } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import HomeLayout from "../../Layouts/HomeLayout";
import { deleteCourse, getAllCourses } from "../../Redux/Slices/CourseSlice";
import { getPaymentRecord } from "../../Redux/Slices/RazorpaySlice";
import { getStatsData } from "../../Redux/Slices/StatSlice";
ChartJS.register(ArcElement, BarElement, CategoryScale, Legend, LinearScale, Title, Tooltip);

function AdminDashboard() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const { allUsersCount, subscribedCount } = useSelector((state) => state.stat);

    const { allPayments, monthlySalesRecord } = useSelector((state) => state.razorpay);


    const userData = {
        labels: ["Registered User", "Enrolled User"],
        fontColor: "white",
        datasets: [
            {
                label: "User Details",
                data: [allUsersCount, subscribedCount],
                backgroundColor: ["yellow", "green"],
                borderWidth: 1,
                borderColor: ["yellow","green"]
            },
        ]
    };

    const salesData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        fontColor: "white",
        datasets: [
            {
                label: "Sales / Month",
                data: monthlySalesRecord,
                backgroundColor: ["red"],
                borderColor: ["white"],
                borderWidth: 2
            }

        ]
    }

    const myCourses = useSelector((state) => state?.course?.courseData);

    async function onCourseDelete(id) {
        if(window.confirm("Are you sure you want to delete the course ? ")) {
            const res = await dispatch(deleteCourse(id));
            console.log(res);
            if(res?.payload?.success) {
                await dispatch(getAllCourses());
            }
        }
    }


    useEffect(() => {
        (
            async () => {
                await dispatch(getAllCourses());
                await dispatch(getStatsData());
                await dispatch(getPaymentRecord())
            }
        )()
    }, [])

    return (
        <HomeLayout>
            <div className="min-h-[90vh] pt-5 flex flex-col flex-wrap gap-20 text-white">
                <h1 className="text-center text-5xl font-semibold text-yellow-500">
                    Admin Dashboard
                </h1>

                <div className="grid grid-cols-1  m-auto mx-10">
                    <div className="flex flex-wrap items-center gap-10 p-5 shadow-lg rounded-md">
                        <div className="w-80 h-80 ">
                            <Pie data={userData}/>
                        </div>

                        <div className="grid grid-cols-2 gap-5">
                            <div className="flex  items-center justify-between p-5 gap-5 rounded-md shadow-md">
                                <div className="flex flex-col items-center">
                                    <p className="font-semibold text-black">Registered Users</p>
                                    <h3 className="text-4xl font-bold text-green-500">{allUsersCount}</h3>
                                </div>
                                <FaUsers className="text-yellow-500 text-5xl"/>
                            </div>
                            <div className="flex items-center justify-between p-5 gap-5 rounded-md shadow-md">
                                <div className="flex flex-col items-center">
                                    <p className="font-semibold text-black">Subscribed Users</p>
                                    <h3 className="text-4xl font-bold text-yellow-800">{subscribedCount}</h3>
                                </div>
                                <FaUsers className="text-green-500 text-5xl"/>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-5 p-5 shadow-lg rounded-md">
                        <div className="h-80 w-full relative">
                            <Bar  className="absolute bottom-0 h-80 " data={salesData} />
                        </div>

                        <div className="grid grid-cols-2 gap-5">
                            <div className="flex items-center justify-between p-5 gap-5 rounded-md shadow-md">
                                <div className="flex flex-col items-center">
                                    <p className="font-semibold text-black">Subscription Count</p>
                                    <h3 className="text-4xl font-bold text-red-400">{allPayments?.count}</h3>
                                </div>
                                <FcSalesPerformance className="text-yellow-500 text-5xl"/>
                            </div>
                            <div className="flex items-center justify-between p-5 gap-5 rounded-md shadow-md">
                                <div className="flex flex-col items-center">
                                    <p className="font-semibold text-black">Total Revenue</p>
                                    <h3 className="text-4xl font-bold text-green-800">{allPayments?.count * 499}</h3>
                                </div>
                                <GiMoneyStack className="text-green-500 text-5xl"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" text-black mx-[10%] w-[80%] self-center flex-col items-center gap-10 pt-5 mb-10">
                    <div className="flex w-full items-center justify-around mb-10">
                        <h1 className="text-center text-3xl font-semibold">
                            Courses overview
                        </h1>

                        <button
                            onClick={() => {
                                navigate("/course/create")
                            }}
                            className="w-fit bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 rounded py-2 px-4 font-semibold text-lg cursor-pointer"
                        >
                            Create new course
                        </button>
                    </div>

                    <div className="overflow-x-auto relative">
                        <table class=" min-w-40 text-sm rtl:text-right text-gray-700 text-center ">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 min-w-45 ">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        S. No.
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Course Title
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Course Category
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Instructor
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Total Lectures
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Description
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                {myCourses?.map((course, idx) => {
                                    return (
                                        <tr key={course._id}>
                                            <td class="px-6 py-4">{idx + 1}</td>
                                            <td class="px-6 py-4">
                                                <textarea readOnly value={course?.title} className="w-40 h-auto bg-transparent resize-none"></textarea>
                                            </td>
                                            <td class="px-6 py-4">
                                                {course?.category}
                                            </td>
                                            <td class="px-6 py-4">
                                                {course?.createdBy}
                                            </td>
                                            <td className="text-center px-6 py-4">
                                                {course?.numberOfLectures}
                                            </td>
                                            <td className="max-w-28 text-ellipsis whitespace-nowrap flex-wrap px-6 py-4">
                                                <textarea
                                                    value={course?.description}
                                                    readOnly
                                                    className="w-70 h-auto bg-transparent resize-none flex-wrap"
                                                >

                                                </textarea>
                                            </td >
                                            <td className="flex flex-wrap items-center gap-4 px-6 py-4">
                                                <button
                                                    className="bg-green-500 hover:bg-green-600 transition-all ease-in-out duration-300 text-xl py-2 px-4 rounded-md font-bold"
                                                    onClick={() => navigate("/course/displaylectures", { state: { ...course } })}
                                                >
                                                    <BsCollectionPlayFill />
                                                </button>
                                                <button
                                                    className="bg-red-500 hover:bg-red-600 transition-all ease-in-out duration-300 text-xl py-2 px-4 rounded-md font-bold"
                                                    onClick={() => onCourseDelete(course?._id)}
                                                >
                                                    <BsTrash />
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}

export default AdminDashboard;