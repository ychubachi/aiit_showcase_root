// 読み込み後アドレスバー非表示
function doScroll() { if (window.pageYOffset === 0) { window.scrollTo(0,1); } }
window.onload = function() { setTimeout(doScroll, 100); }

