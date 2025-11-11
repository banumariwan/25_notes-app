📱 Note App

A modern full-stack notes application built with Django and React.
Add, edit, and delete notes with a clean, responsive UI, perfect for desktop and mobile.

🚀 Features

📝 Create, edit, and delete notes

📱 Responsive, mobile-friendly design

⚡ Fast and smooth frontend with React

🔒 Backend powered by Django REST Framework

🛠️ Tech Stack
Layer	Technology
Backend	Django, Django REST Framework
Frontend	React, Axios
Database	SQLite (default)
Styling	CSS
Version Control	Git & GitHub
⚙️ Installation
1️⃣ Clone the repository
git clone https://github.com/banumariwan/RedmiProject.git


2️⃣ Backend Setup (Django)
cd backend
python -m venv venv
venv\Scripts\activate       # Windows
# or source venv/bin/activate  # Linux/Mac
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

3️⃣ Frontend Setup (React)
cd ../frontend
npm install
npm start


The frontend runs on http://localhost:3000
 by default.
Make sure the backend is running to handle API requests.

💡 Usage

Open the app in your browser

Add new notes using the form 📝

Edit notes ✏️ or delete 🗑️ as needed

All changes are saved in the backend database

🤝 Contributing

Fork the repository 🍴

Create a new feature branch (git checkout -b feature-name)

Commit your changes (git commit -m "Add new feature")

Push to your branch (git push origin feature-name)

Open a Pull Request 🔀
