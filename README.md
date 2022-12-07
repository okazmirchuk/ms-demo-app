# How to run application
1. Run `persons-service`
    * Go to the `persons-service` directory
    * Run `npm i`
    * Run `docker-compose up`
    * Run `npm run start:dev`

2. Run `documents-service`
    * Go to the `documents-service` directory
    * Run `npm i`
    * Run `docker-compose up`
    * Run `npm run start:dev`

3. Open `http://localhost:5000/api` and create `2` persons
4. Check `events` table. `2` events should be created
4. Open `http://localhost:3700/api` documents for persons. Provide `de` `language` value for `german` and `en` for `english` languages 
