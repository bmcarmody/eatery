# Eatery

A recipe search engine website powered by the Food2Fork API.

## Built With

### Front-End

- React
- SCSS  

[Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) component folder structure.
### Back-End
- NodeJS/Express 
- MongoDB/Mongoose     

User's passwords are encrypted with [bcrypt](https://github.com/kelektiv/node.bcrypt.js#readme) before being stored in the database. Private routes are protected with [passport](http://www.passportjs.org/docs/) which require a valid [JSON web token](https://jwt.io/), generated when the user logs in (1 hour time limit before it expires and user gets logged out).

## Routes

### User Routes
***
#### **Route**:   **POST** api/users/register  
**Description**:   Register a user  
**Access**: Public  
**Parameters**: Name, Email, Password, Password2 (Confirm Password)

#### **Route**:   **POST** api/users/login 
**Description**:   Login a user  
**Access**: Public  
**Parameters**: Email, Password

### Recipe Routes
***
#### **Route**:   **POST** api/recipes/save  
**Description**:   Save a recipe to the database  
**Access**: Private  
**Parameters**: Recipe_id, User_id, Title, Publisher, Image_URL

#### **Route**:   **GET** api/recipes/fetch-recipes 
**Description**:   Fetch all recipes the user has saved  
**Access**: Private  
**Parameters**: User_id

#### **Route**:   **GET** api/recipes/fetch-recipe/:id 
**Description**:   Check to see if a user has current recipe saved  
**Access**: Private  
**Parameters**: Recipe_id

#### **Route**:   **DELETE** api/recipes/delete/:id
**Description**:   Delete a recipe from user account  
**Access**: Private  
**Parameters**: Recipe_id, User_id


## License
This project is licensed under the MIT License - see the LICENSE.md file for details
