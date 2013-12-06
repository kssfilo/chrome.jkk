document.addEventListener('DOMContentLoaded',function(){
	chrome.runtime.getBackgroundPage(function(bp){
		document.getElementById('wage').value=bp.config.wage

		document.getElementById('enable').addEventListener('click',function(){
			bp.config.isEnabled=true
			bp.config.wage=document.getElementById('wage').value
			bp.sync()
			bp.save()
			window.close()
			chrome.tabs.reload()
		})

		document.getElementById('disable').addEventListener('click',function(){
			bp.config.isEnabled=false
			bp.sync()
			bp.save()
			window.close()
			chrome.tabs.reload()
		})
	})
})


