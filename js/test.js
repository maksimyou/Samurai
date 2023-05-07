let aaa = document.querySelectorAll(".togs");
let iii = document.querySelectorAll(".settings-item");
let bbb = document.querySelectorAll(".setting-togs");
let r = 0;
for (let i = -1; i < aaa.length; i++) {
    r = i;
    aaa[r].addEventListener("mouseover", () => {
        iii[r].classList.toggle("poiu")
        console.log(aaa[i]);
    });
    aaa[r].addEventListener("mouseout", () => {
        iii[r].classList.toggle("poiu")
    });
}

//function togls() {
//    for (let i = -1; i < aaa.length; i++) {
//        aaa[i].addEventListener("mouseover", () =>
//            iii[i].classList.toggle("poiu")
//        );
//        aaa[i].addEventListener("mouseout", () =>
//            iii[i].classList.toggle("poiu")
//        );
//    }
//};
//togls();

//function yyyyyyy() {
//    bbb.addEventListener("mousemove ", function togls() {
//        for (let i = -1; i < aaa.length; i++) {
//            aaa[i].addEventListener("mouseover", () =>
//                iii[i].classList.toggle("poiu")
//                console.log(aaa[i]);
//            );
//            aaa[i].addEventListener("mouseout", () =>
//                iii[i].classList.toggle("poiu")
//            );
//        }
//    }
//};

yyyyyyy();

//for (let i = -1; i < aaa.length; i++) {
//    aaa[i].addEventListener("mouseover", () =>
//        iii[i].classList.toggle("poiu")
//    );
//    aaa[i].addEventListener("mouseout", () =>
//        iii[i].classList.toggle("poiu")
//    );
//}

