console.log("contentscript.js has been started")

chrome.runtime.sendMessage({hoge:'msg from contentscript.js'},function(r){console.log(r)})
