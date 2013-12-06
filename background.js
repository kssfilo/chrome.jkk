console.log('background script has been started')

var config={
	isEnabled:(localStorage.hasOwnProperty('isEnabled')?localStorage.isEnabled==='true':true),
	wage:(localStorage.hasOwnProperty('wage')?parseInt(localStorage.wage):700)
}

function inspect(o){
	var r=[]
	for(var a in o)r.push(a+':'+o[a])
	return(r.join("\n"))
}

function sync(){
	var path=(config.isEnabled?'enabled.png':'disabled.png')
	console.log(path)
	chrome.browserAction.setIcon({path:path})
}

function save(){
	localStorage.isEnabled=config.isEnabled
	localStorage.wage=config.wage
}

console.log(inspect(config))
sync()

chrome.runtime.onMessage.addListener(function(oMsg,ms,fnRes){
	console.log([
		"a message has been arrived.\n",
		inspect(oMsg),"\n",
		inspect(ms),"\n",
	].join(''))
	
	switch(oMsg){
	case 'getConfig':
		fnRes(config)
		break;
	}
})

function hello(o){
	console.log(inspect(o))
}

