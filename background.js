console.log('background script has been started')

function inspect(o){
	var r=[]
	for(var a in o)r.push(a+':'+o[a])
	return(r.join("\n"))
}

chrome.runtime.onMessage.addListener(function(oMsg,ms,fnRes){
	console.log([
		"a message has been arrived.\n",
		inspect(oMsg),"\n",
		inspect(ms),"\n",
	].join(''))
	fnRes(oMsg)
})

function hello(o){
	console.log(inspect(o))
}
