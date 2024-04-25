# Category Api
<br>

## Create category

Endpoint: POST /api/category
 
Request Header :
- X-API-TOKEN : token

<br>

#### [ Request Body ] :

```json
{
  "title" : "Sport",
  "slug" : "sport",
}
```

#### [ Response Body (Success) ]  :

```json
{
  "data" : {
    "id" : 1,
    "title" : "Sport",
    "slug" : "sport",
    "created-at" : "2024-04-24 09:09:32",
    "update-at" : "2024-04-24 09:09:32"
  }
}
```

#### [ Response Body (Failed) ]  :

```json
{
    "message": "something wrong i can feel it :v"
}
```

<!-- ---------------------------------------------------------------------------- -->
<br><br><br>
<!-- ---------------------------------------------------------------------------- -->

## Get category

Endpoint: GET /api/category/:categoryId
 
Request Header :
- X-API-TOKEN : token

<br>

#### [ Response Body (Success) ]  :

```json
{
  "data" : {
    "id" : 1,
    "title" : "Sport",
    "slug" : "sport",
    "created-at" : "2024-04-24 09:09:32",
    "update-at" : "2024-04-24 09:09:32"
  }
}
```

#### [ Response Body (Failed) ]  :

```json
{
    "message": "Note not found"
}
```

<!-- ---------------------------------------------------------------------------- -->
<br><br><br>
<!-- ---------------------------------------------------------------------------- -->


## Update category

Endpoint: PUT /api/category/:categoryId
 
Request Header :
- X-API-TOKEN : token

<br>

#### [ Request Body ] :

```json
{
    "title" : "Sport",
    "slug" : "sport",
}
```

#### [ Response Body (Success) ]  :

```json
{
  "data" : {
    "id" : 1,
    "title" : "Sport",
    "slug" : "sport",
    "created-at" : "2024-04-24 09:09:32",
    "update-at" : "2024-04-24 09:09:32"
  }
}
```

#### [ Response Body (Failed) ]  :

```json
{
    "message": "something wrong i can feel it :v"
}
```

<!-- ---------------------------------------------------------------------------- -->
<br><br><br>
<!-- ---------------------------------------------------------------------------- -->

## Delete category

Endpoint: DELETE /api/category/:categoryId
 
Request Header :
- X-API-TOKEN : token

<br>

#### [ Response Body (Success) ]  :

```json
{
  "data" : "Ok"
}
```

#### [ Response Body (Failed) ]  :

```json
{
    "message": "something wrong i can feel it :v"
}
```

<!-- ---------------------------------------------------------------------------- -->
<br><br><br>
<!-- ---------------------------------------------------------------------------- -->

## Search Category

Endpoint: GET /api/categories
Query Parameter :
- title : string
- slug : string

 
Request Header :
- X-API-TOKEN : token

<br>

#### [ Response Body (Success) ]  :

```json
{
  "data" :[
     {
        "id" : 1,
        "title" : "Sport",
        "slug" : "sport",
        "created-at" : "2024-04-24 09:09:32",
        "update-at" : "2024-04-24 09:09:32"
    },
     {
        "id" : 2,
        "title" : "Sport",
        "slug" : "sport",
        "created-at" : "2024-04-24 09:09:32",
        "update-at" : "2024-04-24 09:09:32"
    }
  ],
    "paging" : {
    "current_page" : 1,
    "total_page" : 10,
    "size" : 10
  }
}
```

#### [ Response Body (Failed) ]  :

```json
{
    "message": "Unauthorized"
}
```