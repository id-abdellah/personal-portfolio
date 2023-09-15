/* --------------------------- show contacts button function --------------------------- */

const showButton = document.querySelector(".showCon");
const infoContactsSection = document.querySelector(".info-contacts");

showButton.addEventListener("click", () => {
    if (document.documentElement.clientWidth <= 1024) {
        infoContactsSection.classList.toggle("activeOnResponsive")
    }
});

setInterval(() => {
    if (document.documentElement.clientWidth > 1024) {
        infoContactsSection.classList.remove("activeOnResponsive")
    }
}, 100);



/* --------------------------- nav bar action --------------------------- */

const navBarLinks = document.querySelectorAll(".navbar li");
const sections = document.querySelectorAll("article > section");

navBarLinks.forEach((li) => {
    li.addEventListener("click", () => {
        navBarLinks.forEach((l) => {
            l.classList.remove("active")
        })
        li.classList.add("active")

        sections.forEach((sec) => {
            sec.style.display = "none";
        })
        document.querySelector(`article section.${li.dataset.page}`).style.display = "block";
    })
})


const navBar = document.querySelector(".navbar");


/* --------------------------- Testimonials actions ---------------------- */

const TestimonialItem = document.querySelectorAll(".testimonials-list .testimonals-item");
const modalContainer = document.querySelector(".modal-container");

const modalClose = document.querySelector(".close-modal");
const modalOverlay = document.querySelector(".overlay");

TestimonialItem.forEach(testi => {
    testi.addEventListener("click", (e) => {
        let avatarFigure = modalContainer.querySelector(".testimonial-modal div:first-of-type figure:first-child img");
        let h4 = modalContainer.querySelector(".testimonial-modal div:last-of-type h4");

        let testimonialAvatar = testi.querySelector("figure img");
        let testimonalH4 = testi.querySelector("h4").textContent;

        console.log(testimonalH4)

        avatarFigure.setAttribute("src", testimonialAvatar.getAttribute("src"))
        h4.textContent = testimonalH4;
        // ----
        modalContainer.classList.add("active")
    })
})

modalClose.onclick = () => {
    modalContainer.classList.remove("active")
}
modalOverlay.onclick = () => {
    modalContainer.classList.remove("active")
}


/* --------------------------- portfolio section ---------------------- */
const tabsLists = document.querySelectorAll(".tabs-list li");
const projectsCategorys = document.querySelectorAll(".projects-wrapper .project-item");

tabsLists.forEach(list => {
    list.addEventListener("click", () => {
        tabsLists.forEach(l => {
            l.classList.remove("active");
        });
        list.classList.add("active");

        projectsCategorys.forEach(p => {
            p.style.display = "none";
        });

        document.querySelectorAll(`.${list.dataset.category}`).forEach(p => {
            p.style.display = "block"
        })
    })
})




/* --------------------------- Contact section ---------------------- */

const contactForm = document.querySelector("section.contact form");

const fullNameInput = document.getElementById("fullName");

const emailInput = document.querySelector("#email")

const textArea = document.querySelector("#msg");

const submitBtn = document.querySelector("#submit");

let fullNameInputValidation = false;
let emailInputValidation = false;
let textAreaValidation = false;

let name_message_RegEx = /\w+/i;
let emailRegEx = /\w+@\w+\.\w+/i;


// fullName Validation
fullNameInput.addEventListener("focus", () => {
    if (name_message_RegEx.test(fullNameInput.value)) {
        fullNameInput.style.borderColor = "var(--primary-yellowColor)"
    } else {
        fullNameInput.style.borderColor = "red"
    }
});
fullNameInput.addEventListener("input", () => {
    if (name_message_RegEx.test(fullNameInput.value)) {
        fullNameInput.style.borderColor = "var(--primary-yellowColor)"
        fullNameInputValidation = true;
    } else {
        fullNameInput.style.borderColor = "red"
        fullNameInputValidation = false;
    }
});


// email validation
emailInput.addEventListener("focus", () => {
    if (emailRegEx.test(emailInput.value)) {
        emailInput.style.borderColor = "var(--primary-yellowColor)"
    } else {
        emailInput.style.borderColor = "red"
    }
});
emailInput.addEventListener("input", () => {
    if (emailRegEx.test(emailInput.value)) {
        emailInput.style.borderColor = "var(--primary-yellowColor)"
        emailInputValidation = true;
    } else {
        emailInput.style.borderColor = "red"
        emailInputValidation = false;
    }
});

// textAre
textArea.addEventListener("focus", () => {
    if (name_message_RegEx.test(textArea.value)) {
        textArea.style.borderColor = "var(--primary-yellowColor)"
    } else {
        textArea.style.borderColor = "red"
    }
});

textArea.addEventListener("input", () => {
    if (name_message_RegEx.test(textArea.value)) {
        textArea.style.borderColor = "var(--primary-yellowColor)"
        textAreaValidation = true;
    } else {
        textArea.style.borderColor = "red"
        textAreaValidation = false;
    }
});


// on focus out
[fullNameInput, emailInput, textArea].forEach(element => {
    element.addEventListener("focusout", () => {
        element.style.borderColor = "var(--borders-black-color)"
    })
});


setInterval(() => {
    if (fullNameInputValidation && emailInputValidation && textAreaValidation) {
        submitBtn.classList.add("allValid")
    } else {
        submitBtn.classList.remove("allValid")
    }
}, 0);

// when submit or send the msg
contactForm.onsubmit = (e) => {
    if (fullNameInputValidation && emailInputValidation && textAreaValidation) return
    e.preventDefault();
};