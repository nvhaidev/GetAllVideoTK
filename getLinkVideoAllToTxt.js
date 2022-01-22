javascript:(() => {
    function findLink() {
        const link = [];
        document.querySelectorAll('div').forEach(((value, key) => {
            if (document.querySelectorAll('div')[key].className.includes('DivPlayerContainer')) {
              link.push(document.querySelectorAll('div')[key][Object.keys(document.querySelectorAll('div')[key])[0]].child.memoizedProps.playUrl)
            }
        }))
        return link
    }
    function downloadLink(link) {
        const uid = window.location.href.split('/')[3].split('?')[0];
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
    }
    var i = 0;

    function pageScroll() {
        i+=2;
        const canvas = document.querySelectorAll('canvas').length;
        window.scrollBy(0, 1000);
        if (i > canvas) {
            const link = findLink();
            downloadLink(link);
            return;
        }
        setTimeout(pageScroll, 100);
    }
    pageScroll()
})()
