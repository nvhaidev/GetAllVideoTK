javascript: (function () {
    let video = document.getElementsByTagName("video");
    let dodai = video.length;
    let a = `https://corsanywherez.herokuapp.com/${video[dodai - 1].src}`;
    fetch(a).then((resp) => resp.blob()).then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const b = document.createElement("a");
        b.style.display = "none";
        b.href = url;
        b.setAttribute("download", "namdeptrai.mp4");
        b.download = "namdeptrai.mp4";
        document.body.appendChild(b);
        b.click();
        window.URL.revokeObjectURL(url);
    });
})()
