butt.addEventListener("click", () => {

    window.open('https://lit.link/en/limnosstella');

  });

// 取得按鈕和輸入框容器
const buttonContainer = document.getElementById("buttonContainer");
const inputContainer = document.getElementById("inputContainer");

// 生成按鈕和輸入框的數量
const numButtons = 10;
const numInputs = 10;

// 生成按鈕陣列
for (let i = 1; i <= numButtons; i++) {
  let pointbtn = document.createElement("button");
  pointbtn.innerText = `B${i}`;
  pointbtn.classList.add("array-button");
  buttonContainer.appendChild(pointbtn);

    // 監聽按鈕點擊事件
    pointbtn.addEventListener("click", () => {
      // 選取所有具有 'dynamic-input' class 的輸入框
      let inputs = document.querySelectorAll('.array-input');
      let values = [];
      // 你可以在這裡處理按鈕被按下後的邏輯
      
    
    // 遍歷每個輸入框並獲取其值
    inputs.forEach(input => {
      values.push(input.value);
    });
    // 輸出結果到控制台
    console.log(values[i]);

      pointSount(values[i-1]);
    });
  
    buttonContainer.appendChild(pointbtn);
}

// 生成輸入框陣列
for (let i = 1; i <= numInputs; i++) {
  let input = document.createElement("input");
  input.type = "text";
  input.placeholder = `Input ${i}`;
  input.value = `${i}`;
  input.id = `input${i}`; // 給輸入框一個唯一的 ID
  input.classList.add("array-input");
  inputContainer.appendChild(input);
}