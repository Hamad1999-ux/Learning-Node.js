# Node.js Project Creation Instructions

1. Create a new directory for your project by running the following command in your terminal:

```bash
mkdir myProject
```

2. Navigate into the new directory by running:

```bash
cd myProject
```


3. Initialize a new Node.js project by running:

```bash
npm init
```

This command will prompt you to enter information about your project, such as the name, version, and description. You can press enter to accept the default values or enter your own.

4. After running `npm init`, a package.json file will be created in your project directory. 
This file contains information about your project, such as its dependencies.

Update the Following fields in the package.json file:

```json
{
  "name": "myProject",
  "version": "1.0.0",
  "description": "",
  "main": "src/app.js",
  "scripts": {
    "start": "node src/app.js"
  },
  "author": "",
  "license": "ISC"
}


```


5. Now you can start adding your code to the project. 
You can create a new directory called `src` in your project directory and inside `src` directory create a file named `app.js`.

6. Write writing code in the `app.js` file.

7. To run your project, you can use the following command:

```bash
npm run start
```