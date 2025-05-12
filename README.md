
# Bazaar Digital World

**Bazaar Digital World** is an open-source e-commerce platform that brings the vibrant experience of traditional Indian marketplaces into the digital realm. Inspired by the bustling bazaars of Delhi, this project aims to provide a seamless online shopping experience for users and a robust management system for vendors.

## 🛍️ Features

- **User-Friendly Interface**: Intuitive design ensuring easy navigation for users of all ages.
- **Vendor Dashboard**: Comprehensive tools for vendors to manage products, track orders, and analyze sales.
- **Secure Transactions**: Integration with reliable payment gateways to ensure safe and swift transactions.
- **Responsive Design**: Optimized for desktops, tablets, and mobile devices.
- **Search & Filter**: Advanced search and filtering options to help users find products quickly.
- **Wishlist & Cart**: Features allowing users to save favorite items and manage their shopping cart efficiently.

## 🛠️ Tech Stack

- **Frontend**: React.js, Redux, HTML5, CSS3
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Payment Gateway**: Razorpay Integration
- **Deployment**: Docker, AWS EC2

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or above)
- MongoDB
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Raghav2309s/bazaar-digital-world.git
   cd bazaar-digital-world
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   ```

4. **Run the application:**
   ```bash
   npm start
   ```

   The application will be accessible at `http://localhost:5000`.

## 📁 Project Structure

```
bazaar-digital-world/
├── client/                 # Frontend source code
├── server/                 # Backend source code
├── .env                    # Environment variables
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add your message here'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a pull request.

Please ensure your code adheres to the project's coding standards and includes relevant tests.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 📬 Contact

For any inquiries or feedback, please contact:

- **Raghav Singhal** - [GitHub](https://github.com/Raghav2309s)
