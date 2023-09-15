import { useState } from "react";
import { useEffect } from "react";
import { FaReadme } from "react-icons/fa";
import Cart from "../Cart/Cart";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Courses = () => {
  // useState hook for fetched data
  const [allCourses, setAllCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalCreditHour, setTotalCreditHour] = useState(0);
  const [remainingCreditHour, setRemainingCreditHour] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  // useEffect hook for fetching data
  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setAllCourses(data));
  }, []);
  // Button click function
  const handleSelectButton = (course) => {
    const isExists = selectedCourses.find((item) => item.id == course.id);

    let count = course.credit;
    let initialPrice = course.price;

    if (isExists) {
      return toast("Already enrolled this course");
    } else {
      setSelectedCourses([...selectedCourses, course]);

      selectedCourses.forEach((item) => {
        count = count + item.credit;
      });
      const remainingCreditHour = 20 - count;

      selectedCourses.forEach((item) => {
        initialPrice = initialPrice + item.price;
      });

      if (count > 20) {
        toast("Maximum credit limit exceed");
      } else {
        setTotalCreditHour(count);
        setRemainingCreditHour(remainingCreditHour);
        setTotalPrice(initialPrice);
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto flex flex-col-reverse gap-4 lg:flex-row lg:justify-between">
      <div className="card-container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Map all courses dinamically */}
        {allCourses.map((course) => (
          <div key={course.id} className="card w-72 bg-white rounded-xl p-4">
            <img src={course.image} alt="" />
            <h2 className="text-base font-bold py-4">{course.course_name}</h2>
            <p>{course.details}</p>
            <div className="flex justify-between items-center">
              <p className="py-5 ">$ Price : {course.price}</p>
              <p className="flex items-center gap-3">
                <FaReadme /> Credit : {course.credit} hr
              </p>
            </div>
            <button
              onClick={() => handleSelectButton(course)}
              className="btn btn-primary text-white bg-blue-500 w-full p-2 rounded-lg"
            >
              Select
            </button>
            <ToastContainer />
          </div>
        ))}
      </div>
      <div className="cart mx-auto">
        <Cart
          selectedCourses={selectedCourses}
          totalCreditHour={totalCreditHour}
          remainingCreditHour={remainingCreditHour}
          totalPrice={totalPrice}
        ></Cart>
      </div>
    </div>
  );
};

export default Courses;
