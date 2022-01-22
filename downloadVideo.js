javascript: (function () {
    let video = document.getElementsByTagName("video");
    let dodai = video.length;
    let a = `corsanywhere/${video[dodai - 1].src}`;
    fetch(a).then((resp) => resp.blob()).then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const b = document.createElement("a");
        b.style.display = "none";
        b.href = url;
        b.setAttribute("download", "phamthanhnam.com.mp4");
        b.download = "phamthanhnam.com.mp4";
        document.body.appendChild(b);
        b.click();
        window.URL.revokeObjectURL(url);
    });
})()
