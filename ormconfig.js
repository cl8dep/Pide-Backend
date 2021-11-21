module.exports = {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "root",
    "database": "pide",
    "entities": ['./src/database/entities/**/*.entity{.ts,.js}']
}