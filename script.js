document.querySelectorAll(".input-box input").forEach((input) => {
      // Function to update label position
      function updateLabel() {
          if (input.value.trim() !== "") {
              input.nextElementSibling.style.top = "-5px";
          } else {
              input.nextElementSibling.style.top = "50%";
          }
      }
  
      // Run the function on page load to fix autofilled values
      updateLabel();
  
      // Add event listeners
      input.addEventListener("focus", function () {
          input.nextElementSibling.style.top = "-5px";
      });
  
      input.addEventListener("blur", updateLabel);
  });
  

const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const overlay = document.querySelector(".overlay");

registerLink.addEventListener("click", ()=> {
      wrapper.classList.add('active');
});

loginLink.addEventListener("click", ()=> {
      wrapper.classList.remove('active');
});

const loginButton = document.querySelector("#openSignup"); // Correct button selector

loginButton.addEventListener("click", () => {
    wrapper.classList.add("popup");
    overlay.classList.add("active");
});

// Close the form when clicking outside the form (on the overlay)
overlay.addEventListener("click", () => {
    wrapper.classList.remove("popup");
    overlay.classList.remove("active");
});


