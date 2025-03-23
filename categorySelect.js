// 選取下拉選單和結果區域
const tagSelect = document.getElementById("tagSelect");
const results = document.getElementById("results");
const dropdownB = document.getElementById("totalSelect");

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

const optionsForB  = {
    請選擇分類 :["--請選擇--"],
    語言      : ["中文","台語","日語","英語","韓語"],
    情境      : ["吐槽","台詞"],
    提及and模仿  : ["黑銀夜烏","庫路","M闆","偷斗幫","正教","之翼","擬音"],
    情感      : ["無奈","激動","平淡","疑問","混亂","笑聲"],
    腔調      : ["機器人","廣告","廣播","遊戲","可愛"],
    其他      : ["嘴ㄆㄧㄚˊ", "口癖", "旋律","氣質蛋雕"],
  }

// 當下拉選單的值改變時觸發事件
totalSelect.addEventListener("change", () => {
  const selectedValue = totalSelect.value;
  results.innerHTML = ""; // 清空結果區域
  // 清空 B 下拉選單的內容
  tagSelect.innerHTML = "";

  // 如果 A 有選擇值，更新 B 的內容
  if (selectedValue && optionsForB [selectedValue]) {
    // 添加一個預設選項
    const defaultOption = document.createElement("option");
    defaultOption.textContent = "--請選擇--";
    defaultOption.value = "";
    tagSelect.appendChild(defaultOption);

    // 根據選擇的 A 值，動態生成 B 的選項
    optionsForB[selectedValue].forEach((item) => {
      const option = document.createElement("option");
      option.textContent = item;
      option.value = item;
      tagSelect.appendChild(option);
    });
  } else {
    // 如果 A 沒有選擇，添加一個提示選項
    const noOption = document.createElement("option");
    noOption.textContent = "--請先選擇--";
    noOption.value = "";
    dropdownB.appendChild(noOption);
  }
});