javascript: (function () {
    var video = 0;

    function pageScroll() {
        window.scrollBy(0, 1000);
        let max = document.querySelectorAll('a.video-feed-item-wrapper').length;
        video += 2;
        if (video > max) {
            const myNodelist = document.querySelectorAll("a.video-feed-item-wrapper");
            const uid = window.location.href.split('/')[3].split('?')[0];
            const link = [];
            for (let i = 0; i < myNodelist.length; i++) {
                link.push(document.querySelectorAll("a.video-feed-item-wrapper")[i].href)
            }
            const file = new Blob([JSON.stringify(link)], {type: 'text/plain'});
            const url = window.URL.createObjectURL(file);
            const b = document.createElement("a");
            b.style.display = "none";
            b.href = url;

            b.setAttribute("download", `${uid}-phamthanhnam.com.txt`);
            b.download = `${uid}-phamthanhnam.com.txt`;
            document.body.appendChild(b);
            b.click();
            window.URL.revokeObjectURL(url);
            return true;
        }
        setTimeout(pageScroll, 100);
    }
    pageScroll()
})()
