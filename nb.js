(function() {
var includeVarnStyle = document.createElement('style');
var includeVarnElement = document.createElement('div');

includeVarnStyle.innerHTML = '#nb-ie-wrapper{position:fixed;z-index:9999;top:0;left:0;background:#283033;width:100%;height:100%;text-align:center;vertical-align:middle;transition-duration:.5s;visibility:hidden;opacity:0}.nb-v-visible{visibility:visible!important;opacity:1!important}.nb-ie{position:relative;font-family:Helvetica,Arial,sans-serif;color:#fff;line-height:1.5;width:500px;padding-bottom:50px}.nb-ie__attention{font-size:52px;font-weight:700;color:orange;text-transform:uppercase;margin:50px 0 20px}.nb-ie__text{margin-bottom:40px;font-size:16px}.nb-ie__text p{text-align:center}.nb-button{display:inline-block;padding:12px 18px;background:orange;margin-bottom:30px;color:#fff;text-decoration:none;font-size:16px;font-weight:700;transition-duration:.3s}.nb-button:focus,.nb-button:hover{background:#12ca01;color:#fff}.nb-button_gray{background:#687372}.nb-button_gray:focus,.nb-button_gray:hover{background:#586362}';

includeVarnElement.innerHTML = '<table id="nb-ie-wrapper"><td>&nbsp;</td><td class="nb-ie"><div class="nb-ie__attention">Внимание!</div><div class="nb-ie__text"><div>Вы используете устаревший браузер Internet Explorer. Вследствие этого сайт может работать неправильно.</div><br><div>Пожалуйста, скачайте и установите любой другой современный браузер. Это позволит нашему и другим сайтам продемонстрировать больше возможностей.</div></div><a class="nb-button nb-big-button" href="http://newbrowser.top" target="_blank">Скачать современный браузер</a><br><a id="nb-ie-forever" class="nb-button nb-big-button nb-button_gray" href="#">Игнорировать проблему и перейти на сайт</a></td><td>&nbsp;</td></table>';

document.head.appendChild(includeVarnStyle);
document.body.appendChild(includeVarnElement);

function getCookieIE ( coo ) {
	var resultsMy = document.cookie.match ( '(^|;) ?' + coo + '=([^;]*)(;|$)' );

	if ( resultsMy )
		return decodeURI ( resultsMy[2] );
	else
		return null;
}

function browserIdentIE() {
	var browserIdent = navigator.userAgent;
	if (browserIdent.search(/MSIE/) > 0) return 'ie';
	if (browserIdent.search(/Trident/) > 0) return 'ie11';
	return 'Search Bot';
}

var onie = getCookieIE("onie");
var dateMyMy = new Date(new Date().getTime() + 3600 * 24 * 7 * 1000);
var dateEndMy = dateMyMy.toUTCString();
var ieWrapper = document.getElementById('nb-ie-wrapper');
var ieForever = document.getElementById('nb-ie-forever');

if (browserIdentIE() == 'ie' || browserIdentIE() == 'ie11') {
	if (!navigator.cookieEnabled || onie == 1) {
	}
	else {
		ieWrapper.className +=' nb-v-visible';
	}
}

ieForever.onclick = function () {
	ieWrapper.className -=' nb-v-visible';
	document.cookie = "onie=1; path=/; expires=" + dateEndMy;
};
})();