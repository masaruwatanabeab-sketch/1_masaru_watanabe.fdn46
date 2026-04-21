"use strict";

let circle = document.getElementById("circle");
let upBtn = document.getElementById("upBtn");
let downBtn = document.getElementById("downBtn");

let rotateValue = circle.style.transform;

let rotateSum;

upBtn.onclick = function () {
  // 時計回りに90度回転させる
  rotateSum = rotateValue + "rotate(-90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
};

downBtn.onclick = function () {
  // 半時計回りに90度回転させる
  rotateSum = rotateValue + "rotate(+90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
};

// ホームをクリックした時に、ポップアップを出したい
// DOMの読み込みが完了してから処理を実行
window.addEventListener("click", () => {
  // ① 必要な要素を取得する
  const homeBtn0 = document.getElementById("homeBtn0"); // ホームボタン
  const modal0 = document.getElementById("modal0"); // ポップアップ全体
  const closeBtn0 = document.getElementById("closeBtn0"); // 閉じるボタン

  // ② ホームボタンがクリックされた時の処理（表示する）
  if (homeBtn0) {
    homeBtn0.addEventListener("click", () => {
      modal0.style.display = "block"; // CSSのdisplayをblockにして表示
    });
  }

  // ③ 閉じるボタンがクリックされた時の処理（非表示にする）
  if (closeBtn0) {
    closeBtn0.addEventListener("click", () => {
      modal0.style.display = "none"; // CSSのdisplayをnoneにして隠す
    });
  }
});

// 自己紹介をクリックした時に、ポップアップを出したい
// DOMの読み込みが完了してから処理を実行
window.addEventListener("click", () => {
  // ① 必要な要素を取得する
  const homeBtn1 = document.getElementById("homeBtn1"); // ホームボタン
  const homemodal1 = document.getElementById("homemodal1"); // ポップアップ全体
  const closeBtn1 = document.getElementById("closeBtn1"); // 閉じるボタン

  // ② ホームボタンがクリックされた時の処理（表示する）
  if (homeBtn1) {
    homeBtn1.addEventListener("click", () => {
      homemodal1.style.display = "block"; // CSSのdisplayをblockにして表示
    });
  }

  // ③ 閉じるボタンがクリックされた時の処理（非表示にする）
  if (closeBtn1) {
    closeBtn1.addEventListener("click", () => {
      homemodal1.style.display = "none"; // CSSのdisplayをnoneにして隠す
    });
  }
});

// ロケーションをクリックした時に、ポップアップを出したい
// DOMの読み込みが完了してから処理を実行
window.addEventListener("click", () => {
  // ① 必要な要素を取得する
  const homeBtn2 = document.getElementById("homeBtn2"); // ホームボタン
  const homemodal2 = document.getElementById("homemodal2"); // ポップアップ全体
  const closeBtn2 = document.getElementById("closeBtn2"); // 閉じるボタン

  // ② ホームボタンがクリックされた時の処理（表示する）
  if (homeBtn2) {
    homeBtn2.addEventListener("click", () => {
      homemodal2.style.display = "block"; // CSSのdisplayをblockにして表示
    });
  }

  // ③ 閉じるボタンがクリックされた時の処理（非表示にする）
  if (closeBtn2) {
    closeBtn2.addEventListener("click", () => {
      homemodal2.style.display = "none"; // CSSのdisplayをnoneにして隠す
    });
  }
});

// ロケーションをクリックした時に、ポップアップを出したい
// DOMの読み込みが完了してから処理を実行
window.addEventListener("click", () => {
  // ① 必要な要素を取得する
  const homeBtn3 = document.getElementById("homeBtn3"); // ホームボタン
  const homemodal3 = document.getElementById("homemodal3"); // ポップアップ全体
  const closeBtn3 = document.getElementById("closeBtn3"); // 閉じるボタン

  // ② ホームボタンがクリックされた時の処理（表示する）
  if (homeBtn3) {
    homeBtn3.addEventListener("click", () => {
      homemodal3.style.display = "block"; // CSSのdisplayをblockにして表示
    });
  }

  // ③ 閉じるボタンがクリックされた時の処理（非表示にする）
  if (closeBtn3) {
    closeBtn3.addEventListener("click", () => {
      homemodal3.style.display = "none"; // CSSのdisplayをnoneにして隠す
    });
  }
});

