# vue-tiny-blog

![vue-tiny-blog](https://user-images.githubusercontent.com/69947442/105628399-2fb98400-5e6f-11eb-901b-c2367b57710d.png)

## Project setup
```
npm install
```

### Setup local database using json-server

```
npm install json-server -g
```

After installing json-server, open project root directory and run:

```
json-server --watch data/db.json
```

### Setup remote database using Firebase
- Open file /src/firebase/config.js and paste your firebase configuration
- Edit /src/composable/fetchPost.js file
> You need to enable Firebase Firestore

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
