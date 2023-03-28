You should have mysql server installed in your machine

Setup API
- Goto book-api directory
- Goto Migrations directory
-- If you are running on linux, Run ./migrate.sh
-- Otherwise, Execute 001_init.sql and 002_seed.sql scripts into your mysql
- Open inc/config.php and place your mysql username, password in DB_USERNAME and DB_PASSWORD
- Goto book-api directory and start the API (`php -S localhost:8000 -t .`)

Setup Frontend
- Goto book-app directory
- Run `npm i` then `npm start`


