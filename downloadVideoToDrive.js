javascript: (function () {
    let video = document.getElementsByTagName("video");
    let dodai = video.length;
    let a = `https://script.google.com/macros/s/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/exec?videotiktok=${video[dodai - 1].src}`;
    fetch(a).then((resp) => resp.json()).then((blob) => {
        alert(blob.fileUrl)
    });
})();
