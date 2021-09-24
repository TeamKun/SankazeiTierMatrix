function createImg(target) {
    html2canvas(document.querySelector(target)).then(function(canvas) {
        let downloadEle = document.createElement("a");
        downloadEle.href = canvas.toDataURL("image/png");
        downloadEle.download = "sankazeiTierMatrix.png";
        downloadEle.click();
    });
}