console.log("popup.js has been started")

document.addEventListener('DOMContentLoaded',function(){
	chrome.runtime.getBackgroundPage(function(bp){
		bp.hello({hoge:'msg from popup.js'})
	})
})
