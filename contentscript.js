chrome.runtime.sendMessage('getConfig',function(r){
	if(r.isEnabled){
		var f=function(x){
			var i=parseInt(x.replace(/[^0-9]/g,''));
			return(Math.round(i/r.wage*10)/10+'時間の労働')
		}
		var rgxs=[
			/￥.*?([0-9,]+)/g,
			/\\\\.*?([0-9,]+)/g,
			/([0-9,]+) *円/g
		]

		var b=document.body;
		rgxs.forEach(function(i){
			b.innerHTML=b.innerHTML.replace(i,f)
		})
	}
})




