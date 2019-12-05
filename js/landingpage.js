const body = document.body;
const playVideo = document.getElementById("play-button")
const videoHolder = document.getElementById("popup-video-holder")
const closeBtn = document.getElementById("close-btn")
const video = document.querySelector(".popup-video-holder .video-holder video")

const clickProject = document.getElementsByClassName("click-on-project")
const projectHolder = document.getElementsByClassName("popup-project-holder")
const closeProjectHolder = document.getElementsByClassName("project-close-btn")

const hideDetails = document.getElementById("hide-details")
const syllabusBody = document.getElementById("syllabus-body-grid")
const hideDetailsSign = document.querySelector("#hide-details span")

const showToPay = document.getElementsByClassName("show-to-pay")
const paymentHolder = document.getElementById("payment-holder")
const paymentHolderClose = document.getElementById("popup-payment-close")

const findOutMore = document.getElementsByClassName("find-out-more")
const popupFindOutMoreHolder = document.getElementsByClassName("popup-find-out-more-holder")
const popupFindOutMoreHolderCloseBtn = document.getElementsByClassName("popup-find-out-more-close-btn")

const navHamburgerBtns = document.querySelectorAll(".hamburger-nav ul a li")
const hamburgerCheckbox = document.getElementById("hamburger-checkbox")


hideDetailsSign.textContent = "-"
let isToggled = false;

Array.from(navHamburgerBtns).forEach(e => {
    e.addEventListener("click", () => {
        hamburgerCheckbox.click()
    })
});

Array.from(popupFindOutMoreHolder).forEach((e, i) => {
    e.addEventListener("click", (el) => {
        if(el.target == popupFindOutMoreHolder[i]){
        changeDisplay(popupFindOutMoreHolder[i], "none")
      }
      else return;
    })
});

Array.from(popupFindOutMoreHolderCloseBtn).forEach((e, i) => {
    e.addEventListener("click", () => {
        changeDisplay(popupFindOutMoreHolder[i], "none")
    })
});

Array.from(findOutMore).forEach((e, i) => {
    e.addEventListener("click", () => {
        changeDisplay(popupFindOutMoreHolder[i], "flex")
    })
});


Array.from(showToPay).forEach((e, i) => {
    e.addEventListener("click", () => {
        changeDisplay(paymentHolder, "flex")
    })
});

paymentHolderClose.addEventListener("click", () => {
    changeDisplay(paymentHolder, "none")
})



hideDetails.addEventListener("click", () => {
    if(!isToggled){
        syllabusBody.style.display = "none"
        hideDetailsSign.textContent = "+"
    }
    if(isToggled){
        syllabusBody.style.display = "grid"
        hideDetailsSign.textContent = "-"
    }
    isToggled = !isToggled;
})

Array.from(clickProject).forEach((e, i) => {
    e.addEventListener("click", () => {
        changeDisplay(projectHolder[i], "flex")
    })
});

Array.from(projectHolder).forEach((e, i) => {
    e.addEventListener("click", (el) => {
        if(el.target == projectHolder[i]){
        changeDisplay(projectHolder[i], "none")
      }
      else return;
    })
});


Array.from(closeProjectHolder).forEach((e, i) => {
    e.addEventListener("click", () => {
        changeDisplay(projectHolder[i], "none")
    })
});

playVideo.addEventListener("click", () => {
    changeDisplay(videoHolder, "flex")
    video.play();
})

closeBtn.addEventListener("click", () => {
    changeDisplay(videoHolder, "none")
    video.load();
})



function changeDisplay(addTo, displayProperty) {
    addTo.style.display = displayProperty
    overflowHendle()
}

function overflowHendle(){
    if(body.style.overflow == "hidden"){
        body.style.overflow = "auto"
    }
    else{
        body.style.overflow = "hidden"
    }
}
