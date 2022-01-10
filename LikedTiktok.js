javascript:(()=>{
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
        b.setAttribute("download", `${uid}-Namdeptrai.txt`);
        b.download = `${uid}-Namdeptrai.txt`;
        document.body.appendChild(b);
        b.click();
        window.URL.revokeObjectURL(url);
        return true;
    }
    const link = findLink();
    downloadLink(link);

})()
