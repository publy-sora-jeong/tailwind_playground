# tailwind_playground

design : https://www.figma.com/community/file/1089535860642862736/Gaslur-NFT-landingpage  <br/>
tailwind css : https://tailwindcss.com/docs/installation


## Install
- terminal 👉 install tailwind css 
    - npm init -y  //package.json
    - npm install -D tailwindcss
    - npx tailwindcss init


- tailwind.config.js 👉 Configure paths
    module.exports = {
        content: [
            './public/index.html',
            './src/**/*.{html,js}',
        ],
    }

- src/input.css 👉 Add TW directives to css 
    @tailwind base;
    @tailwind components;
    @tailwind utilities;


- package.json 👉  set scripts 
    "scripts": {
        "build-css": "tailwindcss  build src/input.css -o public/output.css", 
        "minify-css": "tailwindcss  build src/input.css -o public/output.css --minify"
    },

- terminal 👉  start CLI build
  npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
    - npm run build-css  <br/>
    - minify css  npm run minify-css 


- HTML 👉 Using TW in html 
  href="output.css" rel="stylesheet"