import { useState } from "react";
import { useEffect } from "react";


const Courses = () => {
    // useState hook for fetched data
    const[allCourses, setAllCourses] = useState([]);
    // useEffect hook for fetching data
    useEffect(()=>{
        fetch("./courses.json")
        .then(res => res.json())
        .then(data => setAllCourses(data))
    }, [])
        console.log(allCourses)
    return (
        <div>
            <div className="card-container w-64 h-96 border-2 p-4">
                <img src="https://i.ibb.co/DGcWy6q/Rectangle-2-2.png" alt="" />
                <h2>Introduction to C Programming</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <div className="flex justify-around">
                    <p>$ Price : 15000</p>
                    <p>Credit : 1hr</p>
                </div>
                <button className="btn btn-primary bg-red-500 w-full p-2 rounded-lg">Select</button>
            </div>
        </div>
    );
};

export default Courses;