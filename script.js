// Toggle mobile menu
let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  navbar.classList.toggle('active');
};

// Highlight active section link on scroll
window.onscroll = () => {
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');

  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  // Close navbar on scroll
  navbar.classList.remove('active');
};
//form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    fetch("https://formspree.io/f/xovldyqn", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          document.getElementById("form-success").style.display = "block";
          form.reset();
        } else {
          alert("There was an error sending your feedback.");
        }
      })
      .catch((error) => {
        alert("Network error while submitting form.");
      });
  });
// Smooth scroll for navigation links
document
  .querySelector('a[href="#contact"]')
  .addEventListener("click", function (e) {
    e.preventDefault();
    const contact = document.getElementById("contact");
    window.scrollTo({
      top: contact.offsetTop - 30,
      behavior: "smooth",
    });
  });