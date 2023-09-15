import { useState } from "react";
import { useEffect } from "react";
import { FaReadme } from 'react-icons/fa';

const Courses = () => {
  // useState hook for fetched data
  const [allCourses, setAllCourses] = useState([]);
  // useEffect hook for fetching data
  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setAllCourses(data));
  }, []);
  console.log(allCourses);
  return (
    <div className="max-w-7xl mx-auto flex justify-between">
      <div className="card-container grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Map all courses dinamically */}
        {allCourses.map((course) => (
          <div key={course.id} className="card w-72 bg-white rounded-xl p-4">
            <img src={course.image} alt="" />
            <h2 className="text-base font-bold py-4">{course.course_name}</h2>
            <p>
              {course.details}
            </p>
            <div className="flex justify-between items-center">
              <p className="py-5 ">$ Price : {course.price}</p>
              <p className="flex items-center gap-3"><FaReadme/> Credit : {course.credit} hr</p>
            </div>
            <button className="btn btn-primary text-white bg-blue-500 w-full p-2 rounded-lg">
              Select
            </button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h1>Cart</h1>
      </div>
    </div>
  );
};

export default Courses;
