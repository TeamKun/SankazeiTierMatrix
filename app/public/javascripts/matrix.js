/**
 * マトリクスを配置する
 */
function createMatrix() {
    boxHtml = "";
    boxFormHtml = "";
    for (let num = 0; num < 49; num++) {
        boxHtml += '<div class="matrix--box" id="' + num + '">' + num + '</div>';

        let formId = 'pos' + num
        boxFormHtml += '<input type="hidden" value="0" id="boxForm--' + num + '" name="' + formId + '">'
    }

    $("#matrix").html(boxHtml);
    $(".matrix--box").html('<img src="images/faceIcon/dummy.png" alt="dummy" class="dropArea dummy">');
    $("#placement--form").html(boxFormHtml);
}