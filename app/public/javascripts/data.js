/** 配置中プレイヤーのmap */
let selectedPlayerMap = new Map();

let data = {
    "gender": null,
    "generation": null,
    "area": null,
    "like": null,
    "device": null,
    "matrixDates": null,
    "globalIp": null,
    "key": null
};

async function setInitialData() {
    data.globalIp = getGlobalIp();
    $("#globalIp").val(data.globalIp);
    data.device = getDevice();
    data.key = await sha512("kunkunkun");
}

function getGlobalIp() {
    let ip;
    $.get("https://api.ipify.org?format=json", function(data) {
        ip = data.ip;
    })

    return ip;
};

function getDevice() {
    let device = navigator.userAgent;
    $("#device").val(device)
    return device;
}

async function sha512(text) {
    const uint8 = new TextEncoder().encode(text)
    const digest = await crypto.subtle.digest('SHA-512', uint8)
    return Array.from(new Uint8Array(digest)).map(v => v.toString(16).padStart(2, '0')).join('')
}

async function setValidate() {
    data.gender = $("#gender--select").val();
    data.generation = $("#generation--select").val();
    data.area = $("#area--select").val();
    data.like = $("#like--select").val();
    data.matrixDates = JSON.stringify([...selectedPlayerMap])
    $("#validate").val(await sha512(data.globalIp + data.key));
}