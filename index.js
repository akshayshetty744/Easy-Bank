// let Hanberger = document.getElementById("Hanberger").value;

// Hanberger.addEventListener("click", function name() {
//     let close = ` <img src="./images/icon-close.svg" />`;
//     let menu = `<img src="./images/icon-hamburger.svg"/> `;
//     let
//     if (t.value == "YES") {
//         Hanberger.innerHTML = menu;
//         t.value = "NO";
//     } else if (t.value == "NO") {
//         Hanberger.innerHTML = close;
//        t.value = "YES";
//      }
// })
// Hanberger.innerHTML = button;
function click(t) {
  let Hanberger = document.getElementById("Hanberger").value;
  let close = ` <img src="./images/icon-close.svg" />`;
  let menu = `<img src="./images/icon-hamburger.svg"/> `;
  if (t.value == "YES") {
      Hanberger.innerHTML = menu;
      console.log("yes")
    t.value = "NO";
  } else if (t.value == "NO") {
      Hanberger.innerHTML = close;
      console.log("no");
    t.value = "YES";
  }
}
