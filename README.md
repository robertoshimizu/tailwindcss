<h1 align="center">
	<a 
    href="https://tailwindcss.com/">
    <img
		width="400"
		alt="Tailwind logo"
		src="https://miro.medium.com/max/700/0*nGTqAcuGJb118YAO.png">
    </a>        
</h1>

# Experimenting Tailwind CSS

## Setup

- **Create a project folder** Move inside the project folder and initiate the project using npm or yarn.
```sh
cd <project folder>
yarn init
```
- **Install tailwindcss, postcss-cli and autoprefixer.** Basic components to start with.
```sh
yarn add tailwindcss postcss-cli autoprefixer
```
- **Create tailwind.config.js.** It creates an empty config file, that will be used to customize tailwind it later on.
```sh
npx tailwind init
```
- **Create postcss.config.js.** This file specifies plugins to be used in postcss. Create the file `postcss.config.js` at the root of the project and add:
```javascript
module.exports = {
    plugins:[
        require('tailwindcss'),
        require('autoprefixer'),
    ]
}
```
- **Create the tailwind.css file.** Create `tailwind.css` in the css folder.
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
- **Build the tailwind.css.** Generate a `tailwind.css` file processed by postcss.
```sh
yarn run postcss css/tailwind.css -o public/build/tailwind.css
```
You can follow above instructions watching [tailwind setup video](https://tailwindcss.com/course/setting-up-tailwind-and-postcss).


## Linking to html

In the public folder, create a new `index.html` file. Scaffold a html template. Link to the `/build/tailwind.css` and add a ``Hello World`` h1 tag, and style it using tailwind utility classes.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/build/tailwind.css">
</head>
<body>
    <h1 class="text-4xl font-bold text-center text-blue-500">Hello World! </h1>
</body>
</html>
```
Spin a *``Live Server``* and check it out!

<<<<<<< HEAD
Note that from branch-4 onwards, the project was converted to Vue, therefore the structure changed and the above instructions does not apply anymore.

=======
>>>>>>> 9c5daacf4204972281d5347e12462fc500acc89b
## Tools to streamline Tailwind code in VS Code

- [Sizzy](https://adamwathan.me/sizzy) for the browser preview on the right-hand size.
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to spin a webserver and render your html files live. Alternative and easier than ``Sizzy``.
- [Tailwind CSS Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) for intelligent auto-completion.