# lms_frontend

# setup instructions

1.clone the project

***
git clone https://github.com/Abhishek-Pundir-001/lms_frontend.git
***

2.move to the directory

***
cd lms-frontend
***

3.install dependencies

***
npm i
***

4.run the server
***
npm run dev
***

# Instructions for tailwind css setup

1.insatll tailwind css
***
npm install -D tailwindcss
***

2.create tailwind config file

***
npx tailwindcss init
***

3.Add file extension in talwind config files in the contents property

***
"./src/**/*.{html,js}"

***

4.Add the tailwind directives at the top of the index.css file

***
@tailwind base;
@tailwind components;
@tailwind utilities;

***