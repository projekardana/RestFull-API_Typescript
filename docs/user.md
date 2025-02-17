# User API Spec

## Register User

Endpoint : POST /api/users

Request Body : 

```json
{
  "username": "mdendiardana",
  "password": "rahasia",
  "name": "Dendi Ardana"
}
```

Response Body (Success) :
```json
{
  "data" : {
    "username" : "mdendiardana",
    "name" : "Dendi Ardana"
  }
}
```

Response Body (Failed) :
```json
{
  "errors" : "Username must not blank, ..."
}
```

## Login User

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username": "mdendiardana",
  "password": "rahasia",
  "name": "Dendi Ardana"
}
```

Response Body (Success) :
```json
{
  "data" : {
    "username" : "mdendiardana",
    "name" : "Dendi Ardana",
    "token" : "uuid"
  }
}
```

Response Body (Failed) :
```json
{
  "errors" : "Username or Password Wrong, ..."
}
```

## Get User

Endpoint : GET /api/users/current

Request Header : 
- X-API-TOKEN : token 

Response Body (Success) :
```json
{
  "data" : {
    "username" : "mdendiardana",
    "name" : "Dendi Ardana"
  }
}
```

Response Body (Failed) :
```json
{
  "errors" : "Unauthorize"
}
```

## Update User
Endpoint : PATCH /api/users/current

Request Header :
- X-API-TOKEN : token

Request Body :

```json
{
  "password": "rahasia", // tidak wajib
  "name" : "Dendi Ardana" // tidak wajib 
}
```

Response Body (Success) :
```json
{
  "data" : {
    "username" : "mdendiardana",
    "name" : "Dendi Ardana"
  }
}
```

Response Body (Failed) :
```json
{
  "errors" : "Unauthorize, ..."
}
```

## Logout User

Endpoint : DELETE /api/users/current

Request Header :
- X-API-TOKEN : token

Response Body (Success) :
```json
{
  "data" : "OK"
}
```

Response Body (Failed) :
```json
{
  "errors" : "Unauthorize, ..."
}
```