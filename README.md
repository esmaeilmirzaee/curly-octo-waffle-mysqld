# TypeScript, Express, Sequelize, and MySQL

> In this repository, I have just developed a simple CRUD operations using `TypeScript`, `Express`, `Sequelize`, and `MySQL`.

It is worth noting that I user MySQL in a container so I could deploy my application in the future easily. And, I use visual studio code as my primary coding environment.

I know it is against the best practice to work on `main`/`master` branch but to make everything smooth and simple I just use the `main` branch.

## Setup

### Application bootstrap

```bash
mkdir project_name
npm init -y

git init

touch .gitignore

npm i -S express config sequelize

npm i -S -D @types/body-parser @types/config @types/express @types/node @types/sequelize ts-node-dev typescript

npx tsc --init

mkdir src
touch src/app.ts
code .
```

#### Config start scripts and build path

1. Open `tsconfig.json`, search for `outDir`, uncomment the line and finally replace it with `./build`.

2. Open `package.json` file and add the following content to `scripts` section of the file, if there is no `scripts` section please create it.

```json
"scripts": {
    "dev": "ts-node-dev --clear --respawn --transpile-only src/app.ts",
    "build" : "",
    "start": ""
}
```

#### `app.ts` boilerplate

Open `app.ts` file and add the following piece of code.

```typescript
import express from 'express';
import config from 'config';

const PORT = 1337;
const app = express();

// Set middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
    console.log('App is listening on ' + PORT);
});
```

#### Routes

#### Database connection

##### Docker container

```bash
docker run --name your-container-name -d -e POSTGRES_USER=your-user -e POSTGRES_PASSWORD=your-password -p 5432:5432 -v /home/tb/db/pg:/var/lib/postgresql/data postgres:13.4-bullseye
```

```bash
docker exec -i some-mysql sh -c 'exec mysql -uroot -p"$MYSQL_ROOT_PASSWORD"' < /some/path/on/your/host/all-databases.sql
```
