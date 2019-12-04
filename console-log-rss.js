window.addEventListener('load', (event) => {holyshitonloadeventandsimiliarisbroken()});
(document.readyState === "complete") ? holyshitonloadeventandsimiliarisbroken() : false

function holyshitonloadeventandsimiliarisbroken(){
	[...document.querySelectorAll('[type="application/rss+xml"]')].map(e=>console.log(e.href))
}

