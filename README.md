
# ZapPay 💸

## Overview

ZapPay is a mobile transaction application built with **React Native (Expo + TypeScript)** and **FastAPI**, powered by the **StarkZap SDK** for seamless financial operations.

The app enables users to deposit funds, send and receive money, and track their transaction history through a clean and intuitive interface. It is designed to feel like a traditional fintech application while leveraging modern blockchain infrastructure behind the scenes.

---

## ✨ Features

* 💰 View real-time wallet balance
* 📤 Send money to other users
* 📥 Receive funds via wallet address
* ➕ Deposit funds into wallet
* 📜 View transaction history
* 👤 Manage user profile

---

## 🎯 Goal

ZapPay aims to provide a simple and scalable financial application that abstracts away blockchain complexity, allowing users to interact with digital money as easily as using a traditional banking app.

---

## 🧰 Tech Stack

### Frontend

* React Native
* Expo
* TypeScript
* Expo Router

### Backend

* FastAPI

### Payments Layer

* StarkZap SDK

---

## 🏗️ Architecture

The application follows a clean client-server architecture:

1. The mobile app handles user interaction and UI
2. The backend manages business logic and API endpoints
3. StarkZap SDK handles wallet creation, transactions, and balance management

---

## 🔄 How It Works

### Send Money Flow

1. User enters recipient and amount
2. Request is sent to the backend
3. Backend processes transaction using StarkZap
4. Response is returned to the app
5. UI updates with new balance and transaction status

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

* Node.js
* Python 3.10+
* Expo CLI

---

### Frontend Setup

```bash
git clone https://github.com/your-username/zappay.git
cd zappay
npm install
npx expo start
```

---

### Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

---

## 🔐 Environment Variables

Create a `.env` file in the backend and include:

```env
STARKZAP_API_KEY=your_api_key_here
DATABASE_URL=your_database_url_here
SECRET_KEY=your_secret_key_here
```

---

## 📡 API Overview

### Auth

* `POST /auth/register` – Create account
* `POST /auth/login` – Login user

### Wallet

* `GET /wallet/balance` – Get current balance
* `POST /wallet/create` – Create wallet

### Transactions

* `POST /transactions/send` – Send money
* `GET /transactions/history` – Get transaction history

---

## 🧠 Design Principles

* Keep the user experience simple and intuitive
* Abstract blockchain complexity from the user
* Maintain clean separation between frontend and backend
* Use a service-based approach for payment integration

---

## 🤝 Contributing

Contributions are welcome. Feel free to fork the repository and submit a pull request.

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 💡 Final Note

ZapPay is more than just a demo — it is a foundation for building modern financial applications that combine the simplicity of traditional fintech with the power of blockchain infrastructure.
