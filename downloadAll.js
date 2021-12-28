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
                link.push(document.querySelectorAll("a.video-feed-item-wrapper")[i][Object.keys(document.querySelectorAll('a.video-feed-item-wrapper')[i])[1]].children.props.videoData.video.playAddr)
            }
            const idMacros = 'AKfycbxtbAeDVL7SOkM4_NHo7w2bFkq0VooxyEvVdK9T8Cg8OFsf8BhCXhQof1tajJb9QwB3CA';
            const url = `https://script.google.com/macros/s/${idMacros}/exec?uid=${uid}`;
            fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "text/plain;charset=utf-8"
                },
                body: JSON.stringify(link)
            }).then(res => res.json())
                .then(res => {
                    console.log(res)
                    alert(res);
                }).catch(e => console.error(e));
            return true;
        }
        setTimeout(pageScroll, 100);
    }
    pageScroll()
})()
