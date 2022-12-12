
const copyHistory = async () => {
	try {
		await navigator.clipboard.writeText('javascript:var num=prompt("How Times Do You Want This Page To Show Up In your History?%22);done=false;x=window.location.href;for%20(var%20i=1;%20i%3C=num;%20i++){history.pushState(0,%200,%20i==num?x:i.toString());if(i==num){done=true}}if(done===true){alert(%22Flooding%20Successful!\n%20%22+window.location.href+%22%20\nIs%20Now%20In%20Your%20History%20%22+num+(num==1?%22%20time.%22:%22%20Times.%20%22))});')
		console.log('Content copied to clipboard');
	} catch (err) {
		console.error('Failed to copy: ', err);
	}
}
const copyInspect = async () => {
	try {
		await navigator.clipboard.writeText("javascript:var firebug=document.createElement('script');firebug.setAttribute('src','https://luphoria.com/fbl/fbl/firebug-lite-debug.js');document.body.appendChild(firebug);(function(){if(window.firebug.version){firebug.init();}else{setTimeout(arguments.callee);}})();void(firebug);")
		console.log('Content copied to clipboard');
	} catch (err) {
		console.error('Failed to copy: ', err);
	}
}
const copyCloaker = async () => {
	try {
		await navigator.clipboard.writeText("javascript:function gcloak() {var link = document.querySelector('link[rel*='icon']') || document.createElement('link');link.type = 'image/x-icon';link.rel = 'shortcut icon';link.href = 'CHANGE TO ANY IMAGE URL';document.title = 'CHANGE TO ANY NAME';console.log(document.title);document.getElementsByTagName('head')[0].appendChild(link)%20};gcloak();setInterval(gcloak,%201000);")
		console.log('Content copied to clipboard');
	} catch (err) {
		console.error('Failed to copy: ', err);
	}
}
const copyAutoClicker = async () => {
	try {
		await navigator.clipboard.writeText("javascript:(function(x,y){if(!window.click){window.click=!0,document.body.style.cursor='crosshair';var cps=prompt('Autoclicker CPS: (Under 200 recommended)');if(!cps||isNaN(cps)?(alert('You entered something wrong. Try running the script again.'),end()):alert('Autoclicker activated at '+cps+' CPS! Do [ctrl+b] to stop.'),addEventListener('mousemove',e=>{x=e.clientX,y=e.clientY}),addEventListener('keydown',e=>{'b'===e.key&&e.ctrlKey&&(alert('Autoclicker deactivated! Use the bookmark again to reactivate!'),end())}),window.click)var int=setInterval(function(){var e=document.elementFromPoint(x,y);e&&e.click()},1e3/cps);function end(){clearInterval(int),window.click=!1,document.body.style.cursor='default'}}})()")
		console.log('Content copied to clipboard');
	} catch (err) {
		console.error('Failed to copy: ', err);
	}
}
const copyAutoClicker = async () => {
	try {
		await navigator.clipboard.writeText("")
		console.log('Content copied to clipboard');
	} catch (err) {
		console.error('Failed to copy: ', err);
	}
}
