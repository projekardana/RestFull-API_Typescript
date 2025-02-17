# Address API Spec

## Create Address

Endpoint : POST /api/contacts/:idContact/address

Request Header : 
- X-API-TOKEN : token

Request Body :
```json
{
  "street" : "Jalan Apa",
  "city" : "Kota Apa", 
  "province" : "Province Apa",
  "country" : "Negara Apa",
  "Postal Code" : "233233"
}
```
Response Body (Success) :

```json
{
  "data": {
    "id" : 1,
    "street" : "Jalan Apa",
    "city" : "Kota Apa",
    "province" : "Province Apa",
    "country" : "Negara Apa",
    "Postal Code" : "233233"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "postal-code is Required"
}
```

## Get Address
Endpoint : GET /api/contacts/:idContact/address/:idAddress

Request Header :
- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": {
    "id" : 1,
    "street" : "Jalan Apa",
    "city" : "Kota Apa",
    "province" : "Province Apa",
    "country" : "Negara Apa",
    "Postal Code" : "233233"
  }
}
```
Response Body (Failed) :

```json
{
  "errors": "Address is Note Found"
}
```

## Update Address
Endpoint : PUT /api/contacts/:idContact/address/:idAddress

Request Header :
- X-API-TOKEN : token

Request Body :
```json
{
  "street" : "Jalan Apa",
  "city" : "Kota Apa", 
  "province" : "Province Apa",
  "country" : "Negara Apa",
  "Postal Code" : "233233"
}
```
Response Body (Success) :

```json
{
  "data": {
    "id" : 1,
    "street" : "Jalan Apa",
    "city" : "Kota Apa",
    "province" : "Province Apa",
    "country" : "Negara Apa",
    "Postal Code" : "233233"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "postal-code is Required"
}
```

## Remove Address

Endpoint : DELETE /api/contacts/:idContact/address/:idAddress

Request Header :
- X-API-TOKEN : token


Response Body (Success) :

```json
{
  "data": "OK"
}
```

Response Body (Failed) :

```json
{
  "errors": "Address is Not Found"
}
```

## List Address
Endpoint : GET /api/contacts/:idContact/address

Request Header :
- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": [
  {
    "id" : 1,
    "street" : "Jalan Apa",
    "city" : "Kota Apa",
    "province" : "Province Apa",
    "country" : "Negara Apa",
    "Postal Code" : "233233"
  }, 
    {
      "id" : 2,
      "street" : "Jalan Apa",
      "city" : "Kota Apa",
      "province" : "Province Apa",
      "country" : "Negara Apa",
      "Postal Code" : "233233"
    }
  ]
}
```

Response Body (Failed) :

```json
{
  "errors": "Contact is Not Found"
}
```
