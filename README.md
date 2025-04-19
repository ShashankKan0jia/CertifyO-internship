# Frontend Developer Tasks

This project contains multiple tasks designed to showcase your skills in frontend development. The tasks include static webpage creation, form validation, a to-do list app in React, and a responsive navigation bar with an image gallery.

## Tasks Overview

1. **Task 1: Create a Simple Static Webpage**
   - Build a webpage with a header, footer, and main content section using basic HTML and CSS.
   - Skills: HTML, CSS, Layout Design.

2. **Task 2: Create a Form with Input Validation**
   - Create a form with fields like name, email, and message.
   - Implement client-side validation (e.g., ensure the email is in the correct format).
   - Skills: HTML, CSS, JavaScript (for form validation).

3. **Task 3: Create a To-Do List using React**
   - Build a simple to-do list application with the following features:
     - Add a new to-do item
     - Mark a to-do item as complete/incomplete
     - Remove a to-do item
     - Display the list dynamically
   - Libraries/Tools: React, optionally use a styling library like Bootstrap or Material-UI for a polished UI.
   - Skills: React, JSX, State Management, Event Handling, Basic Styling.

4. **Task 4: Build a Responsive Navigation Bar & Image Gallery**
   - Create a navigation bar that adjusts for mobile and desktop views. Use media queries to ensure it looks good on various screen sizes. The navigation should include:
     - A logo
     - A menu
     - A toggle button for mobile views
   - Implement an image gallery where images can be clicked to open in a larger view with a simple lightbox effect.
   - Skills: HTML, CSS, Media Queries, JavaScript (for menu toggle and lightbox effect).

## Technologies Used

- **HTML**: For structuring the webpage.
- **CSS**: For styling the page, implementing media queries, and creating responsive layouts.
- **JavaScript**: For adding functionality like form validation, dynamic to-do list updates, and lightbox effect.
- **React**: For the To-Do List app.
- **Media Queries**: For making the navigation bar responsive.
- **Local Storage**: For saving the to-do list data persistently.

## How to Run the Project Locally

1. **Clone or Download the Repository**:
   - Clone the repository to your local machine:
     ```bash
     git clone <repository-url>
     ```

2. **Open the Project Folder**:
   - Navigate into the project directory:
     ```bash
     cd Frontend-Developer-Tasks
     ```

3. **Install Dependencies for Task 3 (React)**:
   - If you haven’t done so already, create the React app by running:
     ```bash
     npx create-react-app Task3
     ```
   - Replace `Task3/src` and `Task3/public` files with the corresponding ones from the project.

4. **Open `index.html` or `index.js`**:
   - For **static webpage (Task 1)** and **form (Task 2)**, open `index.html` in any browser.
   - For the **React app (Task 3)**, navigate to the React app folder and run:
     ```bash
     npm start
     ```

5. **View the App**:
   - The app will open in your browser at `http://localhost:3000`.

## External Libraries and Tools Used

- **React** (for Task 3)
- **Bootstrap/Material-UI** (optional for UI enhancement)
- **Lightbox.js** (for the image gallery lightbox effect, optional)
  
## Key Design and Implementation Choices

### Task 1 - Static Webpage:
- Simple HTML and CSS layout to showcase your ability to create a basic webpage structure with a header, footer, and main content area.

### Task 2 - Form Validation:
- Client-side form validation using JavaScript to ensure that the email format is correct and all fields are filled in before submission.

### Task 3 - To-Do List (React):
- React was used to handle the dynamic nature of adding/removing to-do items. The list updates instantly without page reloads.
- Local Storage is used to persist the list between page refreshes.

### Task 4 - Responsive Navigation Bar & Image Gallery:
- Used **media queries** to create a navigation bar that works well on both mobile and desktop views.
- **Hamburger menu** is used for mobile views for a cleaner UI.
- Simple **JavaScript lightbox** effect for the image gallery, allowing users to cycle through images.

## Additional Features

- **Animations**: Smooth transitions in the lightbox and fade-in effects.
- **Responsiveness**: Ensured that both the navigation bar and the image gallery are fully responsive.
- **Modularity**: The code is organized into different tasks and components, making it easy to follow and modify.


## Questions & Feedback

Feel free to reach out with any questions, comments, or feedback!

---

This README provides an overview of your **Frontend Developer Tasks**, gives step-by-step instructions for running the project locally, and outlines the tools and libraries used. It also includes explanations for any key design and implementation choices.

---
