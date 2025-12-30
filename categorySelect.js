// 選取下拉選單和結果區域
const tagSelect = document.getElementById("tagSelect");
const results = document.getElementById("results");
const dropdownB = document.getElementById("totalSelect");

// 當下拉選單的值改變時觸發事件
tagSelect.addEventListener("change", () => {
    const selectedTag = tagSelect.value; // 取得選擇的標籤
    results.innerHTML = ""; // 清空結果區域

    if (!selectedTag || selectedTag === "empty") return;
    const actionAudios = soundList
      .map((item, index) => ({
        ...item,
        index  // 記錄它在 soundList 裡的位置（0-based）
    }))
  .filter(item => item.tags.includes(selectedTag));
    //console.log(actionAudios);
    
    actionAudios.forEach(sound => {
        console.log(sound.id); // 輸出符合分類的 audio 的 id
         
        const button = document.createElement("button");
        button.className = "sound-button";
        button.textContent =`${sound.index+1}`+ ". " +`${sound.id}`;
        button.addEventListener("click", () => {
          playSingleSound(new Audio(sound.src));
        });
        results.appendChild(button);
    });
});

const optionsForB  = {
    請選擇分類 :["--請選擇--"],
    語言      : ["中文","台語","日語","英語","韓語"],
    情境      : ["吐槽","台詞"],
    提及and模仿  : ["黑銀夜烏","庫路","M闆","偷斗幫","正教","之翼","擬音","蘿菈菈","光逸幸","凝川眠"],
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