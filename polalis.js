javascript:(function() {
    const results = [];
    
    const musicElements = document.querySelectorAll('.music');
    
    musicElements.forEach(music => {
      const genreElements = music.querySelectorAll('.genre li[class^="category"] span');
      let isPOPSAnime = false;
        genreElements.forEach(genre => {
            if (genre.textContent.trim() === 'ジャンル名') {
                isPOPSAnime = true;
            }
        });

        if (isPOPSAnime) {
            const titleElement = music.querySelector('.music-inner .info li.title_name');
            if (titleElement) {
                const titleText = titleElement.textContent.trim();
                if (titleText) results.push(titleText);
            }
        }
    });

    if (results.length === 0) {
        alert("条件に一致するタイトルが見つかりませんでした");
        return;
    }

    const blob = new Blob([results.join("\n")], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = "title.txt"; 
    a.style.display = "none";

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
})();
