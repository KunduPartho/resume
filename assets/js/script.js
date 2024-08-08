'use strict';


// const darkmode=document.getElementById("darkmode")
//  darkmode.addEventListener("click",julius)
  
//   function julius(){
//     document.body.classList.toggle("white");
//     if(document.body.classList.contains("white")){
//       darkmode.innerText="Dark"

//     }
//     else{
//     darkmode.innerText="Light"
//     }

//   }



document.body.classList.toggle("white");

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// // sidebar variables
// const sidebar = document.querySelector("[data-sidebar]");
// const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// // sidebar toggle functionality for mobile
// sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase(); 
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}


// let timeoutId;
// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
// const dropdownLinks = document.querySelectorAll("[data-dropdown]");
const pages = document.querySelectorAll("[data-page]");
// const dropdownItems = document.querySelectorAll("[data-dropdown-item]");
// const dropdownContent = document.querySelector(".dropdown-content");
const leadership = document.querySelector("[leadership-button]");
const leadership_section = document.querySelector("#leadership");
const resume = document.querySelector("[resume-button]");
const resume_section = document.querySelector("#resume");


// dropdownContent.style.display = "none";

// dropdownContent.addEventListener("click", function () {

//   for (let i = 0; i < pages.length; i++) {
//     if (pages[i].dataset.page == "resume") {
//       pages[i].classList.add("active");
//       for (let i = 0; i < navigationLinks.length; i++) {
//         if(navigationLinks[i].innerHTML.toLowerCase() === "resume")
//         {
//             navigationLinks[i].classList.add("active");
//         }
//       }
//       window.scrollTo(0, 0);
//     } else {
//       pages[i].classList.remove("active");
//       for (let i = 0; i < navigationLinks.length; i++) {
//         if(navigationLinks[i].innerHTML.toLowerCase() === "resume")
//           {
//               navigationLinks[i].classList.remove("active");
//           }
//       }
//     }
//   }

// });
/*
leadership.addEventListener("click", function () {

  for (let i = 0; i < pages.length; i++) {
    if (pages[i].dataset.page == "achievements") {
      pages[i].classList.add("active");
      for (let i = 0; i < navigationLinks.length; i++) {
        if(navigationLinks[i].innerHTML.toLowerCase() === "leadership")
        {
            navigationLinks[i].classList.add("active");
        }
      }
      leadership_section.scrollIntoView({ behavior: "smooth" });
    } else {
      pages[i].classList.remove("active");
      for (let i = 0; i < navigationLinks.length; i++) {
        if(navigationLinks[i].innerHTML.toLowerCase() === "leadership")
        {
            navigationLinks[i].classList.remove("active");
        }
      }
    }
  }

});
*/
resume.addEventListener("click", function () {

  for (let i = 0; i < pages.length; i++) {
    if (pages[i].dataset.page == "home") {
      pages[i].classList.add("active");
      for (let i = 0; i < navigationLinks.length; i++) {
        if(navigationLinks[i].innerHTML.toLowerCase() === "resume")
        {
            navigationLinks[i].classList.add("active");
        }
      }
      resume_section.scrollIntoView({ behavior: "smooth" });
    } else {
      pages[i].classList.remove("active");
      for (let i = 0; i < navigationLinks.length; i++) {
        if(navigationLinks[i].innerHTML.toLowerCase() === "resume")
        {
            navigationLinks[i].classList.remove("active");
        }
      }
    }
  }

});


// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      console.log(pages[i].dataset.page+ " page"); 
      console.log(this.innerHTML.toLowerCase()+" this"); 
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  
  // navigationLinks[i].addEventListener("mouseenter", function () {

  //   for (let i = 0; i < pages.length; i++) {
  //     if (this.innerHTML.toLowerCase() === "resume") {
  //       clearTimeout(timeoutId);
  //       dropdownContent.style.display = "block";
  //     }
  //   }

  // });
  // navigationLinks[i].addEventListener("mouseleave", function () {

  //   for (let i = 0; i < pages.length; i++) {
  //     if (this.innerHTML.toLowerCase() === "resume") {
  //       timeoutId = setTimeout(function() {
  //         dropdownContent.style.display = "none";
  //       }, 900);
  //     }
  //   }

  });
}

// for (let i = 0; i < dropdownLinks.length; i++) {
//   dropdownLinks[i].addEventListener("click", function () {
//     for (let i = 0; i < dropdownItems.length; i++) {
//       // console.log(dropdownItems[i].innerHTML.toLowerCase()+" each");
//       // console.log(this.innerHTML.toLowerCase()+" each");
//       if (this.innerHTML.toLowerCase() === dropdownItems[i].innerHTML.toLowerCase()) {
//         console.log("mactches");
//         window.scrollTo(0, 0);
//         dropdownItems[i].scrollIntoView({ behavior: "smooth"});
//       } else {
//       }
//     }

//   });
// }

