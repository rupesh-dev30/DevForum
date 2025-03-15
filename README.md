DevOverflow

🚀 Live Demo

Explore the live demonstration of the project: DevOverflow

📝 Description

DevOverflow is a complex Q&A platform for developers to ask questions, share knowledge, and learn from each other. It is built with Next.js, Tailwind CSS, Clerk, MongoDB, and more.


---

📖 Table of Contents

Technologies Used

Get Started

Installation and Run Locally

Scripts

Environment Variables

Deployment

Contributing

Bug / Feature Request

Acknowledgements



---

✨ Technologies Used

DevOverflow is built using the following technologies:

Next.js 14 – React framework for server-side rendering & static site generation

MongoDB & Mongoose – NoSQL database for scalable data storage

Clerk – Authentication & user management

Tailwind CSS – Utility-first CSS framework for styling

ShadCN – Pre-built components for enhanced UI/UX

Zod – Schema validation for TypeScript

Svix – Webhook management

TinyMCE – Rich text editor integration



---

🧰 Get Started

To get this project up and running in your development environment, follow these step-by-step instructions.

📋 Prerequisites

Ensure you have the following installed on your local machine:

Node.js

NPM

Git



---

⚙️ Installation and Run Locally

Step 0: Important Configurations

Before running the project, configure the following services:

1. Clerk Authentication

Create a Clerk account here

Set up CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY in .env

Configure sign-in, sign-up, and redirect URLs in Clerk Dashboard



2. MongoDB Database

Create a MongoDB database

Set the MONGODB_URL in .env



3. TinyMCE Editor

Create a TinyMCE account here

Set NEXT_PUBLIC_TINYMCE_API_KEY in .env



4. Webhook Setup (Clerk)

Create a webhook in Clerk Dashboard

Set the webhook URL to http://<PASTE-YOUR-LINK-HERE>/api/webhook/clerk

Select the "user" event and create the webhook

Store CLERK_WEBHOOK_SECRET in .env





---

Step 1: Clone Repository

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

Create a .env file in the root directory and add the following environment variables:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<CLERK_PUBLISHABLE_KEY>
CLERK_SECRET_KEY=<CLERK_SECRET_KEY>
NEXT_CLERK_WEBHOOK_SECRET=<CLERK_WEBHOOK_SECRET>

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

NEXT_PUBLIC_TINY_MCE_API_KEY=<YOUR_TINY_MCE_API_KEY>

MONGODB_URL=<YOUR_MONGODB_URL>
NEXT_PUBLIC_SERVER_URL=<YOUR_SERVER_URL>


---

🚀 Deployment

Deploy to Production (Manual)

Create an optimized production build:

npm run build

Deploy on Vercel (Recommended)

The easiest way to deploy this Next.js app is via Vercel.



Deploy on Netlify

You can also deploy on Netlify.



For more details, check out the Next.js deployment documentation.


---

🔧 Contributing

Contributions are always welcome! To contribute:

1. Fork the repository


2. Create a new branch (git checkout -b improve-feature)


3. Make your changes


4. Commit (git commit -m 'Improve feature')


5. Push to the branch (git push origin improve-feature)


6. Create a Pull Request 🎉




---

📩 Bug / Feature Request

If you find a bug or have a feature request, please open an issue here.


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

This project is inspired by best practices from industry leaders and online resources.


---

📌 Star this repo if you like it! ⭐
