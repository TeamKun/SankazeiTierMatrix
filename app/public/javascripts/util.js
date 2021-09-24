function isPc() {
    if (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0) {
        // スマートフォン
        return false;
    }

    if (navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('Android') > 0) {
        // タブレット
        return false;
    }
    return true;
}

function isSmartPhone() {
    if (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0) {
        // スマートフォン
        return true;
    }
    return false;
}

function isTablet() {
    if (navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('Android') > 0) {
        // タブレット
        return false;
    }
    return false;
}