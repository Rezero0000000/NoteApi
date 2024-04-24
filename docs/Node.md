# Note Api
<br>

## Create note

Endpoint: POST /api/notes
 
Request Header :
- X-API-TOKEN : token

<br>

#### [ Request Body ] :

```json
{
  "title" : "Hello world",
  "category" : "Life",
  "Message" : "Everything will be okay",
}
```

#### [ Response Body (Success) ]  :

```json
{
  "data" : {
    "id" : 1,
    "title" : "Hello world",
    "category" : "Life",
    "Message" : "Everything will be okay",
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

## Get note

Endpoint: GET /api/notes
 
Request Header :
- X-API-TOKEN : token

<br>

#### [ Response Body (Success) ]  :

```json
{
  "data" : {
    "id" : 1,
    "title" : "Hello world",
    "category" : "Life",
    "Message" : "Everything will be okay",
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


## Update note

Endpoint: PUT /api/notes
 
Request Header :
- X-API-TOKEN : token

<br>

#### [ Request Body ] :

```json
{
  "title" : "Hello world",
  "category" : "Life",
  "Message" : "Everything will be okay",
}
```

#### [ Response Body (Success) ]  :

```json
{
  "data" : {
    "id" : 1,
    "title" : "Hello world",
    "category" : "Life",
    "Message" : "Everything will be okay",
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

## Delete note

Endpoint: DELETE /api/notes/:noteId
 
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

## Search note

Endpoint: GET /api/notes
Query Parameter :
- name : string, contact first name or contact last name, optional
- phone : string, contact phone, optional
- email : string, contact email, optional
- page : number, default 1
- size : number, default 10
 
Request Header :
- X-API-TOKEN : token

<br>

#### [ Response Body (Success) ]  :

```json
{
  "data" :[
     {
        "id" : 1,
        "title" : "Hello world",
        "category" : "Life",
        "Message" : "Everything will be okay",
        "created-at" : "2024-04-24 09:09:32",
        "update-at" : "2024-04-24 09:09:32"
    },
     {
        "id" : 2,
        "title" : "Hello world",
        "category" : "Life",
        "Message" : "Everything will be okay",
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
