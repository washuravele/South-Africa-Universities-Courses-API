# South Africa Universities Courses API

A RESTful API built with **Node.js** and **Express** that provides structured data on **South African universities**, including available courses, faculties, entry requirements, and university information.
```
🔗 **Live API (Render):**  
https://south-africa-universities-courses-api.onrender.com/
```

This API is designed for **frontend applications**, **career guidance platforms**, and **third-party integrations** that require reliable and well-structured university data.

---

## 🚀 Features

- 📚 Retrieve **all university courses** across South African universities
- 🎓 Get **courses by university name**
- 🏫 Filter courses by **university and faculty**
- 🧾 Access detailed **entry requirements**
  - Compulsory subjects
  - Minimum subject levels
  - APS score options
  - Exclusions (e.g. Life Orientation)
- 🌍 Fetch **university information**
  - Physical address
  - Official website
  - Application opening dates
- 🔁 Clean, consistent **JSON responses**
- ☁️ Deployed and hosted on **Render**

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **Body-Parser**
- **JSON data source** (ready for PostgreSQL migration)
- **Render** (Hosting)

---

## 📁 Project Structure
├── courses.json # Universities, faculties & course data
├── universities.json # Universities general information
├── index.js # Express server
├── package.json
└── README.md


---

## ⚙️ Installation & Local Setup

1. **Clone the repository**
```bash
git clone https://github.com/washuravele/South-Africa-Universities-Courses-API.git
```
2. **Navigate into the project**
``` bash
cd South-Africa-Universities-Courses-API
```

3. **Install dependencies**
``` bash
npm install
```


4. **Start the server**
``` bash
node index.js
```

```bash
 📍 Local server will run at:
 http://localhost:4000
```


---

## 🌍 Live API (Production)
``` Base URL
https://south-africa-universities-courses-api.onrender.com
```
---

## 🌍 🔗 API Endpoints

1. **Get all universities courses**
``` bash
GET /universitiesCoursers
```
```
live:https://south-africa-universities-courses-api.onrender.com/universitiesCoursers
```


2. **Get courses by university name**
``` bash
GET /university/:uniName
```
```
live:https://south-africa-universities-courses-api.onrender.com/university/Vaal University of Technology
```


3. **Get courses by university and faculty**
``` bash
GET /university/:uniName/:faculty

```
```
live:https://south-africa-universities-courses-api.onrender.com/university/Vaal University of Technology/Faculty of Engineering & Technology
```


4. **Get all universities information**
``` bash
GET /universities-Infor
```
```
live:https://south-africa-universities-courses-api.onrender.com/universities-Infor
```

5. **Get specific university information by acronym**
``` bash
GET /university-Infor/:acronym
```
```
live:https://south-africa-universities-courses-api.onrender.com/university-Infor/vut
```

---
## 📦 Sample JSON Response
```json
{
  "name": "Dip: Information Technology",
  "duration": "3 years",
  "requirements": {
    "compulsory": [
      { "subject": "English", "minLevel": 4 },
      { "subject": "Mathematics", "minLevel": 4 }
    ],
    "apsOptions": [
      { "minScore": 26, "note": "Exclude Life Orientation" }
    ]
  }
}
```

## 🔗Use Cases
* 🎯 Career guidance & matric results platforms

* 📱 University prospectus applications

* 🎓 Qualification eligibility checkers

* 🌐 Third-party education services

* 📊 Data analysis & research projects


## 🔮Future Improvements

* 🔐 Authentication & API keys

* 🗄️ PostgreSQL database integration

* 🔍 Advanced filtering & search queries

* 📘 Swagger / OpenAPI documentation

* ⚡ Caching & performance optimization

* 🌍 Versioned public API (v1, v2)


## 👨‍💻 Author

**Washu Ravele**
Aspiring Software Developer

* GitHub: [https://github.com/washuravele](https://github.com/washuravele)

---

## 📄 License

This project is for educational and portfolio purposes.
