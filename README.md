# Simple Market Management Project

This project is a basic **Market Management System** built with Django on the backend and React with TypeScript on the frontend. The purpose of this project is to provide an introductory application for learning **TypeScript** while implementing a simple market management system.


## Technologies Used

### Backend (Django)
- **Django**: A Python web framework used to create the backend API.
- **SQLite**: A lightweight database for development purposes.
- **Django Rest Framework (DRF)**: To build the API endpoints.
- **Python 3.x**: The language used to create the backend system.

### Frontend (React + TypeScript)
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript, used for adding static typing.
- **Node.js**: Backend runtime for JavaScript/TypeScript.
- **NPM**: Node Package Manager to manage dependencies.

## Project Features
- **Product Management**: You can list, add, and view details of products in the market.
- **API integration**: The frontend consumes the API built in Django.
- **TypeScript Support**: TypeScript is used to ensure type safety and provide a better development experience.

## Backend Setup

1. **Clone the repository** and navigate into the backend directory:
    ```bash
    git clone https://github.com/PopovEva/ts_market_django-react-ts.git
    cd backend
    ```

2. **Create a virtual environment** and install dependencies:
    ```bash
    python -m venv env
    source env/bin/activate  # On Windows: env\Scripts\activate
    pip install -r requirements.txt
    ```

3. **Apply the migrations** and create the database:
    ```bash
    python manage.py migrate
    ```

4. **Run the development server**:
    ```bash
    python manage.py runserver
    ```

The backend server should now be running at `http://127.0.0.1:8000/`.

## Frontend Setup

1. Navigate into the frontend directory:
    ```bash
    cd frontend/my-app
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the React development server:
    ```bash
    npm start
    ```

The frontend server should now be running at `http://localhost:3000/`.

## API Endpoints

The following are some basic API endpoints created with Django Rest Framework:

- `/api/products/`: List and create products.
- `/api/products/<id>/`: Retrieve, update, and delete product details.

## How to Use

- Open the frontend in your browser (`http://localhost:3000/`).
- The application allows you to view a list of products and add new products using the form on the frontend.
- The frontend communicates with the Django backend via the API.

## Key Files Overview

### Backend
- **models.py**: Defines the models for the products.
- **serializers.py**: Converts complex data types (like querysets) to native Python datatypes for API responses.
- **urls.py**: Routes for API endpoints.
- **views.py**: Handles the logic for different API requests.

### Frontend
- **App.tsx**: Main application component where other components are rendered.
- **Product.tsx**: Component used for displaying product-related information.
- **index.tsx**: Entry point for the React application.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.




