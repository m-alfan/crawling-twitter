# crawling-twitter
Crawling Twitter menggunakan NodeJs


### Instalasi

1. setup environemn ```.env```
```
APP_PORT=

HOST_DB=
USER_DB=
PASS_DB=
NAME_DB=

CONSUMER_KEY=
CONSUMER_SECRET=
ACCESS_TOKEN_KEY=
ACCESS_TOKEN_SECRET=

```

2. download paket yang dibutuhkan
```
npm install
```

3. Running untuk development
```
npm run start
```
atau untuk production
```
npm run build
npm run serve
```

### Fitur
1. crawling twitter *)pengaturan kata yang di cari ada pada file config.json
2. ada 2 endpoint api untuk menampilkan hasil crawling 
```
host.com/api/v1/tweet

Method : GET
Params : 
 - page default 1
 - limit default 5
 - text default ''

 ***note untuk multiple text gunakan pemisah antar kata dengan tanda koma (,)
```
dan 

```
host.com/api/v1/series
```