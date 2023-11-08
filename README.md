
# BetterDev

This is my second fullstack CRUD Spring Boot and ReactJS.
BetterDev is a single web page for users, who are looking for developers etc.

## During this project I have touched

- Spring Boot 3
- Spring Security 6
- JPA
- Hibernate
- Postgres
- React JS
- Axios
- JWT Tokens

## Features

- Main page with list of developers including Logo, name, rating, services, location, clients
- Login page
- Admin panel
- Edit data feature

## Screenshots
#### Main Page
![main](https://github.com/zoyazip/BetterDev/assets/67118409/456da594-62c8-4e71-9a48-5df5a426ba1c)

#### Login to admin panel page
![login](https://github.com/zoyazip/BetterDev/assets/67118409/5d2dfde8-ad73-4626-8ce7-d82c5cfd27b8)

#### Admin panel
![admin_panel](https://github.com/zoyazip/BetterDev/assets/67118409/623846a9-4587-4bbb-bd92-3ef2ff16bd26)

#### Edit feature
![admin_panel_edit](https://github.com/zoyazip/BetterDev/assets/67118409/fe02880d-c4db-45d1-8a8e-7fa155382d9b)

## Pages available: 

#### Main

```http
    /
```
#### Login

```http
    /login
    or if admin is not logged in
    /admin
```
#### Admin

```http
    /admin
```

## API Reference

#### Get all items

```http
  GET /api/v1/developer/all
```

#### Get developer by id

```http
  GET /api/v1/developer/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Registration

```http
  POST /api/v1/auth/register
```

With request body:
```JSON
{
  "username".
  "password"
}
```
#### Authenticate
```http
  POST /api/v1/auth/authenticate
```

With request body:
```JSON
{
  "username".
  "password"
}
```
#### Update developer
```http
  PUT /api/v1/developer/update/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### Add developer
```http
  POST /api/v1/developer/add
```

With request body (Content-Type: multipart/form-data):
```JSON
{
  file: image/png
  clients: String
  location: String
  name: String
  rating: String
  services: String
  url: String
}
```
#### Remove developer by ID

```http
  DELETE /api/v1/developer/remove/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Remove all developers
```http
  DELETE /api/v1/developer/remove-all
```
