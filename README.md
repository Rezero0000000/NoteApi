# NoteApi

- Sebuah aplikasi crud mysql untuk mengelola catatan
- dibuat dengan nodejs express dan mysql
## Instalasi
- clone repo ini dengan mengetikkan di terminal ```sh git clone https://github.com/Re-kun/noteApi```
- setelah itu silahkan masuk ke direktori hasil cloning reponya dan install dependency yang diperlukan dengan mengetikkan perintah ```npm install``` di terminal
- dan yang terakhir silahkan rename file env_example menjadi .env dan silahkan edit di dalamnya menjadi konfigurasi sesuai dengan komputer anda

## Endpoint


- GET  ```{host}/api/note```
- untuk mendapatkan semua data note
 - response
```js
[
 {
   "id": 1,
   "title":  "title1",
   "description": "description 1",
   "clear": false,
   "createdAt": "2022-10-03T10:07:11.000Z",
   "updatedAt": "2022-10-03T10:07:11.000Z"
 },
 {
   "id": 2,
   "title": "title2",
   "description": "description 2",
   "clear": false,
   "createdAt": "2022-10-03T10:08:56.000Z",
   "updatedAt": "2022-10-03T10:08:56.000Z"
 }
]
 ```

- GET ```{host}/api/note/:id```
- untuk mendapatkan note berdasarkan id
- response 
```js
 {
 "id": 2,
 "title": "title1",
 "description": "description 1",
 "clear": false,
 "createdAt": "2022-10-03T10:08:56.000Z",
 "updatedAt": "2022-10-03T10:08:56.000Z"
}
```


- GET ```{host}/api/note/clear```
- untuk mendapatkan note yang clearnya berisi true
- response
 ```js
  [
  {
  "id": 1,
  "title": "title1",
  "description": "description 1",
  "clear": true,
  "createdAt": "2022-10-04T09:58:02.000Z",
  "updatedAt": "2022-10-04T09:58:02.000Z"
  }
  ]
```

- POST ```{host}/api/note```
- untuk membuat note baru
- body 
```js {
   title:string,
   description:string,
   clear:boolean
 }
 ```

- PUT ```{host}/api/note/:id```
- untuk mengupdate note berdasarkan id
- body
 ```js 
{
  title:string,
  description:string,
  clear:string
}
```
- DELETE ```{host}/api/note```
- untuk menghapus semua note

- DELETE ```{host}/api/note/:id```
- untuk menghapus semua note berdasarkan id


### SELAMAT MENCOBA 
