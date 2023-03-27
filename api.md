# To-Do backend


# Technologies used

  ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)  ![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)  ![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
  ![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)    ![Stack Overflow](https://img.shields.io/badge/-Stackoverflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white)


  # Contributor
  - [ ![BuiltBy](https://img.shields.io/badge/Built-By-GE7A10?style=flat-square&logo=BuzzFeed&logoColor=white)](https://github.com/stephen-nene)
   **[stevo-nene](https://github.com/stephen-nene)**






--------
## Copyright
 - **NeneCorp** **<span>&copy; 2023</span>**
---------

# screenshot

#### a. For POST /signup (register):

If the user was successfully registered:

HTTP status code: 201 Created

Response body:

json
```json
{
  "message": "Registration successful",
  "status": "created",
  "data": {
    "id": 1,
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```
If the registration failed due to validation errors:

HTTP status code: 422 Unprocessable Entity

Response body:

json
```json
{
  "message": "Registration failed",
  "status": "unprocessable_entity",
  "data": {
    "username": [
      "can't be blank"
    ],
    "email": [
      "can't be blank",
      "has already been taken"
    ]
  }
}
```
#### b. For POST /login:

If the login was successful:

HTTP status code: 200 OK

Response body:

json
```json
{
  "message": "Login was successful",
  "status": "ok",
  "data": {
    "id": 1,
    "username": "john_doe",
    "email": "john@example.com"
  }
}z
```
If the login failed due to invalid credentials:

HTTP status code: 401 Unauthorized

Response body:

json
```json
{
  "message": "Invalid username/email or password",
  "status": "unauthorized"
}
```
