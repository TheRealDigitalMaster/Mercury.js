var vaporwindow = 'new Nightmare({"title":"Menu","type":"js","js":"https://Mercury.justjxrdannnnnxn.repl.co/js/main.js","theme": "dark","width": 600,"height": 500})'; async function injectnightmare() { var e = await fetch("https://cdn.jsdelivr.net/gh/FogNetwork/Nightmare-Windows/windows.min.js"), n = await e.text(); n = n.replaceAll("<br>", ";"); var t = document.createElement("script"); t.innerHTML = n + "\neval(" + vaporwindow + ")", document.getElementsByTagName("html")[0].appendChild(t) } var cdn2 = document.createElement("link"); cdn2.setAttribute("rel", "stylesheet"), cdn2.href = "https://cdn.jsdelivr.net/gh/FogNetwork/Nightmare-Windows/windows.css", document.getElementsByTagName("html")[0].appendChild(cdn2), injectnightmare()