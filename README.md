# 💎 Quartz Store

> **A Modern Product Management App built with React & Redux Toolkit.**

**Quartz** is a dynamic single-page application (SPA) designed to simulate a real-world e-commerce dashboard. The primary focus of this project is to implement a robust **Global State Management** architecture using Redux Toolkit, wrapped in a clean, responsive UI powered by Tailwind CSS.

---

## 🎯 Project Focus & Learning Goals

This project serves as a practical implementation of advanced Front-End concepts:

* **State Management:** Moving away from "Prop Drilling" to a centralized **Redux Store** for managing Cart and Product data.
* **Modern Styling:** Utilizing **Tailwind CSS v4** for a utility-first, responsive design approach.
* **Routing:** implementing **React Router v6** for seamless client-side navigation.
* **Clean Architecture:** Separating Logic (Slices/Reducers) from UI (Components).

## 🛠️ Tech Stack

* **Framework:** [React.js](https://reactjs.org/) (Vite)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **State Management:** Redux Toolkit (RTK) & React-Redux
* **Routing:** React Router DOM
* **Icons:** React Icons / Phosphor Icons

## ✨ Key Features

### 🛒 Consumer Side
* **Product Browse:** Display available products in a responsive grid layout.
* **Smart Cart:** Add/Remove items with real-time updates to the cart counter and total price.
* **Favorites:** Mark items as favorites (persisted state).

### ⚙️ Admin Side
* **Dashboard View:** A centralized view to manage inventory.
* **Create Product:** A dynamic form to add new items to the global store.
* **Edit/Delete:** Full control over existing products.

## 🚀 Getting Started

Follow these steps to run the project locally:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/quartz-store.git](https://github.com/your-username/quartz-store.git)
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

## 📂 Project Structure

```bash
src/
├── app/             # Redux Store configuration
├── components/      # Reusable UI components (Navbar, Cards, Buttons)
├── features/        # Redux Slices (cartSlice, productsSlice)
├── pages/           # Application Views (Home, Admin, Create)
└── App.jsx          # Main Entry with Routing