# Food Delivery App

**Food Delivery App**, a full-stack project designed to showcase my skills in building modern web applications. This app is a part of my portfolio and demonstrates my ability to work with both frontend and backend technologies. The app allows users to browse food items, place food orders, and make payments using Stripe.

## Technologies Used

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web development.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Redux**: A state management library for managing global state in React applications.
- **React Router**: A library for routing and navigation in React applications.
- **React Query**: A library for fetching, caching, and updating data in React applications.
- **Axios**: A promise-based HTTP client for making API requests.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.

### Backend
- **Laravel**: A PHP framework for building web applications.
- **Laravel Sanctum**: A lightweight authentication system for SPAs (Single Page Applications).
- **Stripe**: A payment processing platform for handling online payments.

## Features

- **User Authentication**: Users can register, log in, and log out.
- **Menu Items**: Users can view the menu items available.
- **Order Placement**: Users can place orders for food items.
- **Payment Processing**: Users can make payments using Stripe.
- **Order History**: Users can view their past orders.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **Composer**: [Download and install Composer](https://getcomposer.org/)
- **PHP**: [Download and install PHP](https://www.php.net/downloads.php)
- **MySQL**: [Download and install MySQL](https://dev.mysql.com/downloads/installer/)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/food-delivery-app.git
   cd food-delivery-app
   ```

2. **Install Frontend Dependencies**

   Navigate to the `frontend` directory and install the dependencies:

   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**

   Navigate to the `backend` directory and install the dependencies:

   ```bash
   cd backend
   composer install
   ```

4. **Set Up Environment Variables**

   - Create a `.env` file in the `backend` and `frontend` directory based on the `.env.example` file.

   ```bash
   cp .env.example .env
   ```
5. **Generate App Key**
   - Navigate to the `backend` directory and generate app key

   ```bash
   php artisan key:generate
   ```
6. **Run Migrations and Seeders**

   - Navigate to the `backend` directory and Run the following commands to set up the database:

   ```bash
   php artisan migrate --seed
   ```

7. **Start the Backend Server**

   Navigate back to the `frontend` directory and Start the Laravel development server:

   ```bash
   php artisan serve
   ```

8. **Start the Frontend Development Server**

   Navigate to the `frontend` directory and start the Vite development server:

   ```bash
   npm run dev
   ```
