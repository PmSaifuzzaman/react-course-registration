import PropTypes from "prop-types";

const Cart = ({
  selectedCourses,
  totalCreditHour,
  remainingCreditHour,
  totalPrice,
}) => {
  console.log(selectedCourses);
  return (
    <div className="w-72 p-6 rounded-xl bg-white">
      <div>
        <h3 className="py-4 text-lg text-blue-500 font-bold">
          Credit Hour Remaining {remainingCreditHour} hr
        </h3>
        <hr />
        <h3 className="py-4 text-xl font-bold">Course Name</h3>
      </div>
      {selectedCourses.map((course) => (
        <li key={course.id} className="list-decimal">
          {course.course_name}
        </li>
      ))}
      <br />
      <hr />
      <p className="py-4">Total Credit Hour: {totalCreditHour}</p>
      <hr />
      <p className="py-4">Total Price: {totalPrice} USD</p>
    </div>
  );
};

Cart.propTypes = {
  selectedCourses: PropTypes.object.isRequired,
  totalCreditHour: PropTypes.object.isRequired,
  remainingCreditHour: PropTypes.object.isRequired,
  totalPrice: PropTypes.object.isRequired,
};
export default Cart;
