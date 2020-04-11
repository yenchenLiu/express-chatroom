# WebSocket Chat Room
Chat Room by nodejs + express

## 開發環境
[PostgreSQL](https://www.postgresql.org)

[NodeJS](https://nodejs.org/)

## 執行方式

1. 建立Postgres資料庫，設定檔位於config

    *config 設定檔 不應加入至版本控制，或是需要經過類似GPG方式加密*
2. yarn
3. yarn run
4. 預設PORT 3000 https://localhost:3000

## 程式說明
* views  網頁 Template
* routes 網址路由
* models 資料模型與邏輯
* migrations 資料庫更新檔案
* middleware 中介層，負責Client到業務邏輯前的處理
 