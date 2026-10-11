// Polygol Ticker Language Dictionary
window.bcpMap = { EN: 'en-US', JP: 'ja-JP', KO: 'ko-KR', ZH: 'zh-CN' };
var bcpMap = window.bcpMap;

function getAppLanguage() {
    let l = (localStorage.getItem('language') || localStorage.getItem('selectedLanguage') || 'EN').toUpperCase();
    if (l === 'JA') l = 'JP';
    return ['EN', 'JP', 'KO', 'ZH'].includes(l) ? l : 'EN';
}
window.getAppLanguage = getAppLanguage;
var getAppLanguage = window.getAppLanguage;

function t(key, params = {}) {
    const lang = getAppLanguage();
    const dict = window['LANG_' + lang + '_TICKER'] || window['LANG_EN_TICKER'] || {};
    let str = dict[key] !== undefined ? dict[key] : key;
    if (params) {
        Object.keys(params).forEach(p => {
            str = str.replace(new RegExp('\\{' + p + '\\}', 'g'), params[p]);
        });
    }
    return str;
}
window.t = t;
var t = window.t;

window.LANG_EN_TICKER = {
    TITLE: "Ticker"
};

window.LANG_JP_TICKER = {
    TITLE: "ティッカー"
};

window.LANG_KO_TICKER = {
    TITLE: "티커"
};

window.LANG_ZH_TICKER = {
    TITLE: "时钟"
};

var LANG_EN_TICKER = window.LANG_EN_TICKER;
var LANG_JP_TICKER = window.LANG_JP_TICKER;
var LANG_KO_TICKER = window.LANG_KO_TICKER;
var LANG_ZH_TICKER = window.LANG_ZH_TICKER;
