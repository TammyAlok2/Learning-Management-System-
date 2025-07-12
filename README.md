
# 📚 E-Learning Platform

A full-featured **online course management system** where **admins** can create and manage courses, upload video content, and track analytics, while **users** can browse, purchase, and access high-quality video lessons.

---

## 🚀 Features

### 🎓 For Admins
- Create, update, and delete courses
- Upload video lessons and course materials
- View analytics: course sales, user progress, engagement
- Manage users and monitor course performance

### 👨‍🎓 For Users
- Browse available courses
- Purchase and enroll in courses securely
- Watch HD video lessons with progress tracking
- Access content anytime from any device

---

## 🛠️ Tech Stack

| Tech         | Usage                         |
|--------------|-------------------------------|
| **Frontend** | React / Next.js (with Tailwind CSS) |
| **Backend**  | Node.js / Express             |
| **Database** | MongoDB / PostgreSQL          |
| **Authentication** | JWT / OAuth (e.g., Google)  |
| **Video Upload** | AWS S3 / Cloudinary        |
| **Analytics** | Custom Dashboards / Chart.js  |
| **Payment**  | Stripe / Razorpay             |

---

## 🔧 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/elearning-platform.git

# Navigate to project folder
cd elearning-platform

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install

# Setup environment variables (.env)
# Example: MONGO_URI, JWT_SECRET, STRIPE_SECRET_KEY, CLOUDINARY_API_KEY, etc.

# Start the servers
npm run dev      # or start client and server separately
