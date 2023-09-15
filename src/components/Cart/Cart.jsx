import PropTypes from 'prop-types';

const Cart = ({selectedCourses, totalCreditHour, remainingCreditHour, totalPrice}) => {
    console.log(selectedCourses);
    return (
        <div>
            <div>
                <h3>Credit Hour Remaining: {remainingCreditHour}</h3>
            <h3>Course Name</h3>
            </div>
            {
                selectedCourses.map((course) => (
                    
                        <li key={course.id} className='list-decimal'>{course.course_name}</li>
                    
                ))
            }
            <hr />
            <p>Total credit Hour:{totalCreditHour}</p>
            <p>Total Price:{totalPrice}USD</p>
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