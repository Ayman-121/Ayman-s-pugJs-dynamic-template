// let mainText = document.querySelector(".main-text");
// let achievements = document.querySelector(".achievements");
// let footer = document.querySelector(".footer");
// let goals = document.querySelector(".goals");
// let kkis = document.querySelector("#kkis");
// let numbers = document.querySelector("#kkis #numbers");
// let memberships = document.querySelector("#kkis #memberships"); 1

// window.onscroll = function () {
//   if (window.scrollY >= mainText.offsetTop - 600) {
//     mainText.style.cssText = "transform: translateY(0px);";
//   }

//   if (window.scrollY >= footer.offsetTop - 600) {
//     footer.style.cssText = "transform: translateY(0px);";
//   }

//   if (window.scrollY >= goals.offsetTop - 600) {
//     goals.style.cssText = "transform: translateY(0px);";
//   }

//   if (window.scrollY >= kkis.offsetTop - 600) {
//     kkis.style.cssText = "transform: translateY(0px);";
//   }

//   if (window.scrollY >= numbers.offsetTop - 600) {
//     numbers.style.cssText = "transform: translateY(0px);";
//   }

//   if (window.scrollY >= memberships.offsetTop - 600) {
//     memberships.style.cssText = "transform: translateY(0px);";
//   }

//   if (window.scrollY >= numbersSection.offsetTop + 300) {
//     if (!started) {
//       nums.forEach((num) => startCount(num));
//     }
//     started = true;
//   }
// };

// window.onload = function () {

//   if (window.scrollY >= achievements.offsetTop - 600) {
//     achievements.style.cssText = "transform: translateY(0px);";
//   }
// }



// //
// //
// //
// //
// //
// //
// //
// //

// let numbersSection = document.querySelector("#kkis #numbers")
// let nums = document.querySelectorAll("#kkis #numbers p span")
// let started = false; // Function Started ? No

// function startCount(el) {
//   let goal = el.dataset.goal;
//   let count = setInterval(() => {
//     el.textContent++;
//     if (el.textContent == goal) {
//       clearInterval(count);
//     }
//   }, 4000 / goal);
// }


// //
// //
// //
// //
// //
// //
// //


// let dateDiv = document.querySelector("#date");

// let date = new Date();

// dateDiv.innerHTML = date.getFullYear();

// //
// //
// //
// //
// //
// //
// //

// let aloneText1 = document.querySelector("#aloneText");

// aloneText1.onclick = function () {
//   // Create The Overlay
//   let overlay = document.createElement("div");
//   overlay.classList.add("my-overlay");
//   document.body.appendChild(overlay);

//   // Create The Elemnt and Put The Text
//   let theText = document.createElement("p");
//   theText.classList.add("overlay-text");
//   theText.innerHTML = aloneText1.innerHTML;
//   overlay.appendChild(theText);

//   // Create Exit button
//   let exitButton = document.createElement("div");
//   exitButton.classList.add("overlay-exit");
//   exitButton.innerHTML = "X";
//   exitButton.onclick = function () {
//     overlay.remove();
//   };
//   overlay.appendChild(exitButton);
// };

// let aloneText2 = document.querySelector("#aloneText2");

// aloneText2.onclick = function () {
//   // Create The Overlay
//   let overlay = document.createElement("div");
//   overlay.classList.add("my-overlay");
//   document.body.appendChild(overlay);

//   // Create The Elemnt and Put The Text
//   let theText = document.createElement("p");
//   theText.classList.add("overlay-text");
//   theText.innerHTML = aloneText2.innerHTML;
//   overlay.appendChild(theText);

//   // Create Exit button
//   let exitButton = document.createElement("div");
//   exitButton.classList.add("overlay-exit");
//   exitButton.innerHTML = "X";
//   exitButton.onclick = function () {
//     overlay.remove();
//   };
//   overlay.appendChild(exitButton);
// };



// let clickExit = document.getElementById("click-exit")
// let teleport = document.getElementById("teleport")

// clickExit.onclick = function () {

//   teleport.remove()

//   let clickEnter = document.createElement("div")
//   clickEnter.classList.add("click-enter")
//   clickEnter.innerHTML = '<i class="fa-solid fa-plus"></i>'
//   document.body.appendChild(clickEnter)

//   clickEnter.onclick = function () {

//     document.body.appendChild(teleport)

//   }
// }


// // show Testimonials <[-?>

// // let myFirstBox = document.querySelector(".testimonials .first-box");
// // let mySecondBox = document.querySelector(".testimonials .second-box");
// // let myThirdBox = document.querySelector(".testimonials .third-box");
// // let myAllBoxes = document.querySelectorAll(".testimonials .box");

// // myArray = [myFirstBox, mySecondBox, myThirdBox];

// // function test() {
// //   myFirstBox.style.display = "none";
// //   mySecondBox.style.display = "none";
// //   myThirdBox.style.display = "none";
// //   let our = Math.floor(Math.random() * myAllBoxes.length);
// //   let value = (myArray[our].style.display = "grid");

// //   let dot1 = document.querySelector(`.testimonials #one`);
// //   let dot2 = document.querySelector(`.testimonials #second`);
// //   let dot3 = document.querySelector(`.testimonials #third`);

// //   if (our === 0) {
// //     dot1.style.cssText = "opacity:1";
// //     dot2.style.cssText = "opacity:0.3";
// //     dot3.style.cssText = "opacity:0.3";
// //   } else if (our === 1) {
// //     dot1.style.cssText = "opacity:0.3";
// //     dot2.style.cssText = "opacity:1";
// //     dot3.style.cssText = "opacity:0.3";
// //   } else if (our === 2) {
// //     dot1.style.cssText = "opacity:0.3";
// //     dot2.style.cssText = "opacity:0.3";
// //     dot3.style.cssText = "opacity:1";
// //   }
// // }
// // setTimeout(test, 0);

// // let listShower = document.querySelector("#nav-hider");

// // listShower.onclick = function ayman() {
// //   let popup = document.createElement("div");
// //   popup.classList.add("popup");
// //   document.body.appendChild(popup);

// //   let a1 = document.createElement("a");
// //   a1.href = "#home";
// //   a1.innerHTML = "Home";
// //   popup.appendChild(a1);

// //   let a2 = document.createElement("a");
// //   a2.href = "#features";
// //   a2.innerHTML = "Features";
// //   popup.appendChild(a2);

// //   let a3 = document.createElement("a");
// //   a3.href = "#about";
// //   a3.innerHTML = "About";
// //   popup.appendChild(a3);

// //   let a4 = document.createElement("a");
// //   a4.href = "#blog";
// //   a4.innerHTML = "Blog";
// //   popup.appendChild(a4);

// //   let a5 = document.createElement("a");
// //   a5.href = "#news";
// //   a5.innerHTML = "News";
// //   popup.appendChild(a5);

// //   let a6 = document.createElement("input");
// //   a6.placeholder = "Search";
// //   popup.appendChild(a6);

// //   a1.onclick = function () {
// //     popup.remove();
// //   };
// //   a2.onclick = function () {
// //     popup.remove();
// //   };
// //   a3.onclick = function () {
// //     popup.remove();
// //   };
// //   a4.onclick = function () {
// //     popup.remove();
// //   };
// //   a5.onclick = function () {
// //     popup.remove();
// //   };

// //   listShower.onclick = function () {
// //     popup.remove();
// //     listShower.onclick = function () {
// //       ayman();
// //     };
// //   };
// // };
