# Course Enrollment System (SPA) using React and Tailwind CSS

The React project appears to be a Course Enrollment System or an Educational Course Selection application. It allows users to browse a list of courses and enroll in them, keeping track of their selected courses and providing information about their credit hours and total price.

1. **Features:**
*Course Listing:
    The project displays a list of available courses to users. Each course is presented as a card with details such as the course name, image, description, price, and credit hours.

*Course Selection:
    Users can select courses of interest by clicking the "Select" button on the course card.
    The system checks if the selected course exceeds the maximum credit limit (20 credit hours) and provides feedback through toast notifications.

*Shopping Cart:
    A shopping cart-like component, named "Cart," displays information about the selected courses.
    It shows the names of the selected courses, the total credit hours of the selected courses, and the remaining credit hours that can be enrolled.The total price of the selected courses is also displayed in USD.

*Responsive Design:
    The project uses CSS classes (e.g., max-w-7xl, mx-auto, lg:flex-row, etc.) to achieve responsive design, allowing the application to adapt to different screen sizes.


2. **State management**
    The component uses the (useState) hook to manage several pieces of state:
        *allCourses: An array that initially holds an empty list of courses.
        *selectedCourses: An array that keeps track of the courses selected by the user.
        *totalCreditHour: Represents the total credit hours of selected courses.
        *remainingCreditHour: Represents the remaining credit hours (20 - totalCreditHour).
        *totalPrice: Represents the total price of the selected courses.