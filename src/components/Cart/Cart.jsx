import PropTypes from 'prop-types';

const Cart = ({selectedCourses}) => {
    console.log(selectedCourses);
    return (
        <div>
            <div>
            <h1>Cart</h1>
            </div>
            {
                selectedCourses.map((course) => (
                    
                        <li key={course.id} className='list-decimal'>{course.course_name}</li>
                    
                ))
            }
        </div>
    );
};


Cart.propTypes = {
    selectedCourses: PropTypes.object.isRequired
};
export default Cart;