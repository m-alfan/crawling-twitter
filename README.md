# crawling-twitter
Crawling Twitter menggunakan NodeJs


### Instalasi

1. buat file `config.json` 
```
{
  "appPort": 3000,
  "userMongodb": "",
  "passMongodb": "",
  "dbMongodb": "",
  "twitterConfig": {
    "consumer_key": "",
    "consumer_secret": "",
    "access_token_key": "",
    "access_token_secret": ""
  },
  "filterTweet": ["filterTweet"],
  "trackTweet": "trackTweet"
}

```

2. download paket yang dibutuhkan
```
npm install
```

3. Running
```
npm run start
```
OR
```
npm run build
npm run serve
```