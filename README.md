## smileTaipei

開啟server:
    npm start

css存檔後畫面可以直接變換:
    先下載 browser-sync
    npm install -g browser-sync

    再開一個cmd打下面指令

    browser-sync start --proxy "127.0.0.1:5050" --files "frontend/static/scss/*.css", "frontend/static/js/*js"

    myproject.dev--->我們的port 127.0.0.1:5050

    --files -->"frontend/static/scss/*.css" 監視scss裡面的css是否有變化 換成js就是再加上js的資料夾進去 

    簡單來講就是 --proxy 代理模式 "要被代理的伺服器(127.0.0.1:5050)"  --files要被監視的檔案


