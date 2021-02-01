## User EndPoint

### 1.SignUp

#### Request

Email will be sent everytime a new user signup

`POST api/v1/users`

Body

```js
{
  "user":{
    "username": "bimlendu",
    "email": "bimlendu@jake.jake",
    "password": "bimlendu",
    "image" : "img12.html"
  }
}
```

#### Response

```js
{
    "user": {
        "email": "bimlendu@jake.jake",
        "token": "jwt token",
        "username": "bimlendu",
        "image": "img12.html"
    }
}
```

---

### 2.SignIn

#### Request

`GET /api/v1/users/login`

Body

```js
{
  "user":{
    "email": "bimlendu@jake.jake",
    "password": "bimlendu"
  }
}
```

#### Response

```js
{
    "user": {
        "email": "bimlendu@jake.jake",
        "token": "jwt token",
        "username": "bimlendu",
        "image": "img12.html"
    }
}
```

---

### 3.Update User Info

#### Request

Authentication as a user

`PUT /api/user`

Body

```js
{
  "user":{
    "username": "Jacob008",
    "image":"image url"
  }
}
```

Header

```js
Authorization = token;
```

#### Response

```js
{
    "user": {
        "username": "Jacob008",
        "email": "jake@jake007.jake",
        "image": "image url",
        "token": "token will come here",

    }
}
```

### 3.Update User Info

#### Request

Authentication as a user

`DELETE /api/user`

Body

Nothing

Header

```js
Authorization = token;
```

#### Response

```js
{
    "message": "User deleted successfully"
}
```
