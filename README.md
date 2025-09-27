# FoodVilla - A Food Delivery Application

FoodVilla is a modern, single-page food delivery application built with React. It showcases a clean user interface for browsing restaurants, viewing menus, and managing a food cart, all powered by live data from Swiggy's public API. This project is a demonstration of core and advanced React concepts, including state management, routing, performance optimization, and testing.

---

## Key Features

- **Live Restaurant Data:** Fetches and displays a list of available restaurants in real-time using Swiggy's live public API.
- **Dynamic Search and Filtering:** Allows users to search for restaurants by name and filter the list to show only top-rated options.
- **Shimmer UI Loading States:** Implements a professional shimmer effect to provide a better user experience while data is being fetched.
- **Detailed Restaurant Menus:** Features a dedicated page for each restaurant, displaying its menu with a clean, accordion-style layout for categories.
- **State-of-the-Art State Management:**
  - **React Context API:** Used for managing and providing user information across the application.
  - **Redux Toolkit:** Implemented for robust management of the food cart, handling actions like adding and clearing items.
- **Comprehensive Routing:** Built with React Router DOM to provide seamless navigation between the Home, About, Contact, and individual Restaurant Menu pages.
- **Performance Optimization:** Utilizes lazy loading (code splitting) to load certain components on demand, improving the application's initial load time.
- **Custom Hooks:** Built with custom hooks like `useOnlineStatus` and `useRestaurantMenu` to abstract and reuse complex logic, keeping components clean and readable.
- **Unit Testing:** Core components like the Header are tested using Jest and React Testing Library to ensure they are rendered and function correctly.

---

## Technologies Used

This project is built with a modern and powerful tech stack to create a fast, scalable, and maintainable web application.

- **React.js:** The core JavaScript library for building the user interface with a component-based architecture.
- **Parcel:** A blazing-fast, zero-configuration web application bundler used for compiling and serving the project.
- **React Router DOM:** A standard library for handling client-side routing in React applications, enabling navigation without page reloads.
- **Redux Toolkit:** The official, recommended toolset for efficient Redux development. It simplifies store setup, reducers, and actions for robust state management.
- **Tailwind CSS:** A utility-first CSS framework used for rapidly building custom user interfaces with a modern design.
- **Jest:** A delightful JavaScript testing framework with a focus on simplicity, used for writing unit tests.
- **React Testing Library:** A lightweight solution for testing React components that encourages good testing practices.

---

## Future Enhancements 

This project provides a solid foundation that can be extended with several advanced features to become a full-fledged application.

- **User Authentication:** Implement a complete login/logout system to allow users to create accounts and manage their profiles.
- **Backend API and Database:** Develop a custom backend API using Node.js/Express and a database like MongoDB to manage restaurants, users, and orders.
- **Payment Gateway Integration:** Integrate a payment system like Stripe or Razorpay to allow users to complete their orders.
- **Order History Page:** Create a dedicated page for users to view their past orders and their status.
- **Advanced Filtering & Sorting:** Add more sophisticated options to filter restaurants by cuisine, price, delivery time, and other criteria.
- **End-to-End Testing:** Incorporate end-to-end tests using a framework like Cypress to automate and verify complete user flows.
- **Offline Support:** Implement Progressive Web App (PWA) features using service workers to provide a better experience with limited or no internet connectivity.

---

## Application Structure

- **`AppLayout`** (Root Component)

  - Renders the main layout, including the `Header`, `Footer`, and the main content area.

  - **`Header`**

    - Contains the application **Logo**.
    - Displays **Navigation Items** (Home, About, Contact, Cart).

  - **`Body`**

    - Includes the **Search Bar** and filter functionality.
    - Manages the `RestaurantContainer`.

    - **`RestaurantContainer`**

      - Displays a list of `RestaurantCard` components.
      - Shows a **Shimmer UI** during data fetching.

      - **`RestaurantCard`**
        - Represents a single restaurant.
        - Displays:
          - Image
          - Name, Cuisine, Star Rating

  - **`Footer`**
    - Contains **Copyright** information.
    - Includes important **Links**, **Address**, and **Contact** details.

## Setup and Installation

To run this project locally, please follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/naveenmoka/My-React-Journey.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd My-React-Journey
    ```

3.  **Install the dependencies:**

    ```bash
    npm install
    ```

4.  **Start the development server:**

    ```bash
    npm start
    ```

    The application will be available at `http://localhost:1234`.

5.  **Run the tests:**

    ```bash
    npm test
    ```
