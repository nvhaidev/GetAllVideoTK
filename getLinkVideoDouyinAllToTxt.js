
(() => {
  var video = 0;

  function pageScroll() {
    window.scrollBy(0, 1000);
    let max = document.querySelectorAll("li.Eie04v01").length;
    video += 2;
    if (video > max) {
      const myNodelist = document.querySelectorAll("li.Eie04v01");
      const uid = window.location.href.split("/")[4].split("?")[0];
      const link = [];
      for (let i = 0; i < myNodelist.length; i++) {
        link.push(
          `https:${
            document.querySelectorAll("li.Eie04v01")[i]?.children[0][
              Object.keys(
                document.querySelectorAll("li.Eie04v01")[i]?.children[0]
              )[0]
            ]?.memoizedProps?.children[0]?.props?.children[2]?.props?.awemeInfo
              ?.video?.playApi
          }`
        );
      }
      const file = new Blob([JSON.stringify(link)], { type: "text/plain" });
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

  pageScroll();
})();
