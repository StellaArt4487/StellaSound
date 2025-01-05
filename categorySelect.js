// 選取下拉選單和結果區域
const tagSelect = document.getElementById("tagSelect");
const results = document.getElementById("results");

// 當下拉選單的值改變時觸發事件
tagSelect.addEventListener("change", () => {
    const selectedTag = tagSelect.value; // 取得選擇的標籤
    results.innerHTML = ""; // 清空結果區域

    // 搜尋分類為 "action" 的 audio
    
    //let actionAudios = document.querySelectorAll(`audio[data-tags="${selectedTag}"]`.split(","));
    let selectedTags = [selectedTag];
    let actionAudios = Array.from(document.querySelectorAll("audio")).filter(audio => {
    let tags = audio.getAttribute("data-tags");
    if (tags) { // 確保 tags 存在
        return selectedTags.every(tag => tags.split(",").includes(tag));
    }
    return false;
    });

    console.log(actionAudios);
    // 結果：返回包含 "drama" 和 "comedy" 的 audio1 元素


    actionAudios.forEach(audio => {
        console.log(audio.id); // 輸出符合分類的 audio 的 id
         
        const button = document.createElement("button");
        button.className = "sound-button";
        button.textContent = `${audio.id}`;
        button.addEventListener("click", () => {
          audio.play(); // 點擊按鈕播放音頻
        });
        results.appendChild(button);
    });
});
