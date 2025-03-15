# DevOverflow

🚀 **Live Demo**  
Explore the live demonstration of the project: **[DevOverflow](https://your-live-demo-link.com)**  

---

## 📝 Description  
DevOverflow is a **Q&A platform for developers** to ask questions, share knowledge, and learn from each other.  
Built with **Next.js, Tailwind CSS, Clerk, MongoDB, and more**, it offers a seamless user experience with modern UI and authentication.  

---

## 📖 Table of Contents  

- [✨ Technologies Used](#-technologies-used)  
- [🧰 Get Started](#-get-started)  
- [⚙️ Installation and Run Locally](#️-installation-and-run-locally)  
- [📜 Scripts](#-scripts)  
- [🔒 Environment Variables](#-environment-variables)  
- [🚀 Deployment](#-deployment)  
- [🔧 Contributing](#-contributing)  
- [📩 Bug / Feature Request](#-bug--feature-request)  
- [💎 Acknowledgements](#-acknowledgements)  

---

## ✨ Technologies Used  
DevOverflow is built using the following technologies:  

- **Next.js 14** – React framework for SSR & static generation  
- **MongoDB & Mongoose** – NoSQL database for scalable data storage  
- **Clerk** – Authentication & user management  
- **Tailwind CSS** – Utility-first CSS framework  
- **ShadCN** – Pre-built UI components  
- **Zod** – Schema validation for TypeScript  
- **Svix** – Webhook management  
- **TinyMCE** – Rich text editor integration  

---

## 🧰 Get Started  

To run this project locally, follow these instructions.  

### 📋 Prerequisites  
Ensure you have the following installed on your machine:  

- **Node.js**  
- **NPM**  
- **Git**  

---

## ⚙️ Installation and Run Locally  

### Step 0: Configure Services  

Before running the project, set up the required services:  

1. **Clerk Authentication**  
   - Create a **[Clerk account](https://clerk.dev/)**  
   - Set `CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` in `.env`  
   - Configure sign-in, sign-up, and redirect URLs in **Clerk Dashboard**  

2. **MongoDB Database**  
   - Create a MongoDB database  
   - Set `MONGODB_URL` in `.env`  

3. **TinyMCE Editor**  
   - Create a **[TinyMCE account](https://www.tiny.cloud/)**  
   - Set `NEXT_PUBLIC_TINYMCE_API_KEY` in `.env`  

4. **Webhook Setup (Clerk)**  
   - Create a webhook in **Clerk Dashboard**  
   - Set the webhook URL: `http://<YOUR-DOMAIN>/api/webhook/clerk`  
   - Select **"user"** event and create the webhook  
   - Store `CLERK_WEBHOOK_SECRET` in `.env`  

---

### Step 1: Clone Repository  

```bash
git clone https://github.com/ladunjexa/nextjs14-devoverflow.git
cd nextjs14-devoverflow

Step 2: Install Dependencies

npm install

Step 3: Start the Development Server

npm run dev

Step 4: Open in Browser

Visit http://localhost:3000 to see the application running.


---

📜 Scripts


---

🔒 Environment Variables

Create a .env file in the root directory and add the following:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<CLERK_PUBLISHABLE_KEY>
CLERK_SECRET_KEY=<CLERK_SECRET_KEY>
NEXT_CLERK_WEBHOOK_SECRET=<CLERK_WEBHOOK_SECRET>

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

NEXT_PUBLIC_TINYMCE_API_KEY=<YOUR_TINY_MCE_API_KEY>
MONGODB_URL=<YOUR_MONGODB_URL>
NEXT_PUBLIC_SERVER_URL=<YOUR_SERVER_URL>


---

🚀 Deployment

Deploy to Production (Manual)

Create an optimized production build:

npm run build

Deploy on Vercel (Recommended)

The easiest way to deploy this Next.js app is using Vercel.



Deploy on Netlify

You can also deploy this Next.js app with Netlify.



For more details, check out the Next.js deployment documentation.


---

🔧 Contributing

Contributions are always welcome! To contribute:

1. Fork the repository


2. Create a new branch

git checkout -b improve-feature


3. Make your changes


4. Commit the changes

git commit -m "Improve feature"


5. Push to the branch

git push origin improve-feature


6. Create a Pull Request 🎉




---

📩 Bug / Feature Request

If you find a bug or have a feature request, please open an issue.


---

💎 Acknowledgements

Special thanks to the following technologies & libraries that made this project possible:

Next.js

MongoDB & Mongoose

Clerk

ShadCN

Tailwind CSS

TinyMCE

Svix

Vercel



---

📚 References

This project follows best practices inspired by industry leaders and online resources.


---

⭐ Show Your Support

If you found this project useful, star this repository! ⭐

[![GitHub stars](https://img.shields.io/github/stars/ladunjexa/nextjs14-devoverflow.svg?style=social)](https://github.com/ladunjexa/nextjs14-devoverflow/stargazers)

This README provides a well-structured and professional format for your **DevOverflow** project. Let me know if you need any modifications! 🚀

