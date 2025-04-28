// const searchBar = document.getElementById("searchBar");
// const resultList = document.getElementById("result");
// const container = document.getElementById("container");
// const loader = document.getElementById("loader"); // Get the loader element
// let cart = JSON.parse(localStorage.getItem("cart")) || [];
// let favourites = JSON.parse(localStorage.getItem("favourites")) || [];

// async function fetchData() {
//   loader.style.display = "block"; // Show loader
//   try {
//     let response = await fetch(
//       "https://large-necessary-quesadilla.glitch.me/courses"
//     );
//     let data = await response.json();
//     localStorage.setItem("data", JSON.stringify(data));
//     console.log(data);
//     displayData(data); // Display all data initially
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     container.innerHTML = "<p>Failed to load data. Please try again later.</p>";
//   } finally {
//     loader.style.display = "none"; // Hide loader
//   }
// }

// function displayData(data) {
//   container.innerHTML = ""; // Clear previous results

//   if (data.length === 0) {
//     container.innerHTML = "<p>No data available</p>";
//   } else {
//     data.forEach((obj) => {
//       let div2 = document.createElement("div");
//       div2.classList.add("course-card");
//       let item = document.createElement("div");
//       item.innerHTML = `
//                 <img src="${obj.pic}" alt="${obj.title}">
//                 <a href=${obj.link}><p><strong>${obj.title}</strong></p><i>Ready to learn? Start the course now</i></a>
//                 <p>${obj.description}</p>
//                 <p>Price: ${obj.price}</p>
//                 <p>Category: ${obj.category}</p>
//                 <button class="btn buy-btn">Buy</button>
//                 <button class="btn mycor-btn">add to Cart</button>
//                 <button class="btn heart-btn"><i class="far fa-heart"></i></button>
//             `;
//       div2.appendChild(item);
//       container.appendChild(div2);

//       // Add event listener to the "Cart" button
//       const addToCartButton = div2.querySelector(".mycor-btn");
//       addToCartButton.addEventListener("click", () => {
//         addToCart(obj); // Add the course to the cart
//       });

//       // Add event listener to the "Favourites" button
//       const addToFavouritesButton = div2.querySelector(".heart-btn");
//       addToFavouritesButton.addEventListener("click", () => {
//         addToFavourites(obj, addToFavouritesButton);
//       });

//       // Update the heart icon if the course is already in favourites
//       if (favourites.some((item) => item.title === obj.title)) {
//         addToFavouritesButton.innerHTML = '<i class="fas fa-heart"></i>'; // Filled heart
//         addToFavouritesButton.classList.add("active");
//       }
//     });
//   }
// }

// document.getElementById("menu-toggle").addEventListener("click", function () {
//   document.getElementById("menu").classList.toggle("show");
// });

// // Function to add a course to the cart
// function addToCart(course) {
//   const confirmAdd = confirm(`Add "${course.title}" to cart?`);
//   if (confirmAdd) {
//     if (!cart.some((item) => item.title === course.title)) {
//       cart.push(course);
//       localStorage.setItem("cart", JSON.stringify(cart));
//       alert(`${course.title} added to cart!`);
//     } else {
//       alert(`${course.title} is already in the cart!`);
//     }
//   } else {
//     alert("Action canceled.");
//   }
// }

// // Function to remove a course from the cart
// function removeFromCart(index) {
//   cart.splice(index, 1);
//   localStorage.setItem("cart", JSON.stringify(cart));
// }
// // favourite buttons
// function addToFavourites(course, button) {
//   const confirmAdd = confirm(`Add "${course.title}" to favourites?`);
//   if (confirmAdd) {
//     const index = favourites.findIndex((item) => item.title === course.title);

//     if (index === -1) {
//       // Add to favourites
//       favourites.push(course);
//       button.innerHTML = '<i class="fas fa-heart"></i>'; // Filled heart
//       button.classList.add("active");
//       alert(`${course.title} added to favourites!`);
//     } else {
//       // Remove from favourites
//       favourites.splice(index, 1);
//       button.innerHTML = '<i class="far fa-heart"></i>'; // Outline heart
//       button.classList.remove("active");
//       alert(`${course.title} removed from favourites!`);
//     }

//     localStorage.setItem("favourites", JSON.stringify(favourites));
//   } else {
//     alert("Action canceled.");
//   }
// }

// // Event listener for search bar filtering data

// searchBar.addEventListener("keyup", function () {
//   let query = searchBar.value.toLowerCase();
//   let data = JSON.parse(localStorage.getItem("data")) || [];

//   let filteredData = data.filter(
//     (course) =>
//       course.title.toLowerCase().includes(query) ||
//       course.description.toLowerCase().includes(query)
//   );

//   displayData(filteredData);
// });

// search.addEventListener("keyup", function () {
//   let query = search.value.toLowerCase();
//   let data = JSON.parse(localStorage.getItem("data")) || [];

//   let filteredData = data.filter(
//     (course) =>
//       course.title.toLowerCase().includes(query) ||
//       course.description.toLowerCase().includes(query)
//   );

//   displayData(filteredData);
// });

// // Theme toggle functionality
// const toggleButton = document.getElementById("theme-toggle");
// const currentTheme = localStorage.getItem("theme");

// if (currentTheme) {
//   document.documentElement.setAttribute("data-theme", currentTheme);
//   toggleButton.innerHTML =
//     currentTheme === "dark"
//       ? '<i class="fas fa-moon"></i>'
//       : '<i class="fas fa-sun"></i>';
// } else {
//   document.documentElement.setAttribute("data-theme", "light");
//   toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
// }

// toggleButton.addEventListener("click", function () {
//   let theme = document.documentElement.getAttribute("data-theme");

//   if (theme === "light") {
//     document.documentElement.setAttribute("data-theme", "dark");
//     localStorage.setItem("theme", "dark");
//     toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
//   } else {
//     document.documentElement.setAttribute("data-theme", "light");
//     localStorage.setItem("theme", "light");
//     toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
//   }
// });

// // // Typing container

// // const button = document.getElementById("textButton");
// // const texts = ["Learn HTML", "Learn CSS", "Learn JAVASCRIPT", "Learn PYTHON", "Learn JAVA",]; // Texts to loop through
// // let textIndex = 0; // Current text index
// // let charIndex = 0; // Current character index
// // let isDeleting = false; // Whether we're deleting text

// // function typeWriter() {
// //     const currentText = texts[textIndex];

// //     // If deleting, remove one character
// //     if (isDeleting) {
// //         button.textContent = currentText.substring(0, charIndex - 1);
// //         charIndex--;
// //     }
// //     // If typing, add one character
// //     else {
// //         button.textContent = currentText.substring(0, charIndex + 1);
// //         charIndex++;
// //     }

// //     // If the current text is fully typed
// //     if (!isDeleting && charIndex === currentText.length) {
// //         // Pause before starting to delete
// //         isDeleting = true;
// //         setTimeout(typeWriter, 1000); // Wait 1 second before deleting
// //     }
// //     // If the current text is fully deleted
// //     else if (isDeleting && charIndex === 0) {
// //         isDeleting = false;
// //         textIndex = (textIndex + 1) % texts.length; // Move to the next text
// //         setTimeout(typeWriter, 10); // Wait 0.5 seconds before typing the next text
// //     }
// //     // Continue typing or deleting
// //     else {
// //         const typingSpeed = isDeleting ? 100 : 200; // Faster deletion, slower typing
// //         setTimeout(typeWriter, typingSpeed);
// //     }
// // }

// // // Start the typewriter effect
// // typeWriter();
// fetchData(); // Initial data fetch

const searchBar = document.getElementById("searchBar");
const resultList = document.getElementById("result");
const container = document.getElementById("container");
const loader = document.getElementById("loader"); // Get the loader element
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let favourites = JSON.parse(localStorage.getItem("favourites")) || [];

async function fetchData() {
  loader.style.display = "block"; // Show loader
  try {
    // "https://large-necessary-quesadilla.glitch.me/courses"
    let response = await fetch("https://abundant-rural-danger.glitch.me/Free");
    let data = await response.json();
    localStorage.setItem("data", JSON.stringify(data));
    console.log(data);
    displayData(data); // Display all data initially
  } catch (error) {
    console.error("Error fetching data:", error);
    container.innerHTML = "<p>Failed to load data. Please try again later.</p>";
  } finally {
    loader.style.display = "none"; // Hide loader
  }
}

function displayData(data) {
  container.innerHTML = ""; // Clear previous results

  if (data.length === 0) {
    container.innerHTML = "<p>No data available</p>";
  } else {
    data.forEach((obj) => {
      let div2 = document.createElement("div");
      div2.classList.add("course-card");
      let item = document.createElement("div");
      item.innerHTML = `
                <img src="${obj.pic}" alt="${obj.title}">
                <a href="${obj.link}"><p><strong>${obj.title}</strong></p><i>Ready to learn? Start the course now</i></a>
                <p>Price: ${obj.price}</p>
                <p>Category: ${obj.category}</p>
                <div class="card-actions">
        <button class="btn buy-btn">Buy</button>
        <button class="btn mycor-btn">Add to Cart</button>
        <button class="btn heart-btn"><i class="far fa-heart"></i></button>
    </div>
            `;
      div2.appendChild(item);
      container.appendChild(div2);

      // Add event listener to the "Cart" button
      const addToCartButton = div2.querySelector(".mycor-btn");
      addToCartButton.addEventListener("click", () => {
        addToCart(obj); // Add the course to the cart
      });

      // Add event listener to the "Favourites" button
      const addToFavouritesButton = div2.querySelector(".heart-btn");
      addToFavouritesButton.addEventListener("click", () => {
        addToFavourites(obj, addToFavouritesButton);
      });

      // Update the heart icon if the course is already in favourites
      if (favourites.some((item) => item.title === obj.title)) {
        addToFavouritesButton.innerHTML = '<i class="fas fa-heart"></i>'; // Filled heart
        addToFavouritesButton.classList.add("active");
      }

      // INTERCEPT the title/link click to open modal instead of navigating
      const detailsLink = div2.querySelector("a");
      detailsLink.addEventListener("click", (e) => {
        e.preventDefault();
        showCourseDetails(obj);
      });
    });
  }
}

document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("menu").classList.toggle("show");
});

// Toast function (simplified)
function showToast(message, type = 'info', duration = 3000) {
  const toastContainer = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  toast.textContent = message;
  
  // Add close button
  const closeButton = document.createElement('button');
  closeButton.className = 'toast-close';
  closeButton.innerHTML = '&times;';
  closeButton.addEventListener('click', () => toast.remove());
  
  toast.appendChild(closeButton);
  toastContainer.appendChild(toast);
  
  // Auto-remove after duration
  if (duration > 0) {
    setTimeout(() => toast.remove(), duration);
  }
}

// Simplified addToCart function with direct toasts
function addToCart(course) {
  if (!cart.some((item) => item.title === course.title)) {
    cart.push(course);
    localStorage.setItem("cart", JSON.stringify(cart));
    showToast(`✓ Added "${course.title}" to cart`, 'success');
  } else {
    showToast(`"${course.title}" is already in your cart`, 'warning');
  }
}

// Toggle favourites with visual feedback
function addToFavourites(course, button) {
  const index = favourites.findIndex(item => item.title === course.title);
  
  if (index === -1) {
    // Add to favourites
    favourites.push(course);
    button.innerHTML = '<i class="fas fa-heart"></i>'; // Solid heart
    button.classList.add("active");
    showToast(`Added "${course.title}" to favourites`, 'success');
  } else {
    // Remove from favourites
    favourites.splice(index, 1);
    button.innerHTML = '<i class="far fa-heart"></i>'; // Outline heart
    button.classList.remove("active");
    showToast(`Removed "${course.title}" from favourites`, 'info');
  }
  
  localStorage.setItem("favourites", JSON.stringify(favourites));
}

// Minimal toast notification
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  
  document.getElementById('toast-container').appendChild(toast);
  
  setTimeout(() => toast.remove(), 3000);
}

// Event listener for search bar filtering data
searchBar.addEventListener("keyup", function () {
  let query = searchBar.value.toLowerCase();
  let data = JSON.parse(localStorage.getItem("data")) || [];

  let filteredData = data.filter(
    (course) =>
      course.title.toLowerCase().includes(query) ||
      course.description.toLowerCase().includes(query)
  );

  displayData(filteredData);
});

search.addEventListener("keyup", function () {
  let query = search.value.toLowerCase();
  let data = JSON.parse(localStorage.getItem("data")) || [];

  let filteredData = data.filter(
    (course) =>
      course.title.toLowerCase().includes(query) ||
      course.description.toLowerCase().includes(query)
  );

  displayData(filteredData);
});

// Theme toggle functionality
// const toggleButton = document.getElementById("theme-toggle");
// const currentTheme = localStorage.getItem("theme");

// if (currentTheme) {
//   document.documentElement.setAttribute("data-theme", currentTheme);
//   toggleButton.innerHTML =
//     currentTheme === "dark"
//       ? '<i class="fas fa-moon"></i>'
//       : '<i class="fas fa-sun"></i>';
// } else {
//   document.documentElement.setAttribute("data-theme", "light");
//   toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
// }

// toggleButton.addEventListener("click", function () {
//   let theme = document.documentElement.getAttribute("data-theme");

//   if (theme === "light") {
//     document.documentElement.setAttribute("data-theme", "dark");
//     localStorage.setItem("theme", "dark");
//     toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
//   } else {
//     document.documentElement.setAttribute("data-theme", "light");
//     localStorage.setItem("theme", "light");
//     toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
//   }
// });

// ---------- MODAL / DETAIL-VIEW SECTION ----------

// 1) Create overlay & modal elements
const modalOverlay = document.createElement("div");
modalOverlay.id = "modalOverlay";
Object.assign(modalOverlay.style, {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  zIndex: 1000,
  display: "none",
});
document.body.appendChild(modalOverlay);

const courseModal = document.createElement("div");
courseModal.id = "courseModal";
Object.assign(courseModal.style, {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: "320px",
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0,0,0,0.3)",
  zIndex: 1001,
  display: "none",
  maxHeight: "90vh",
  overflowY: "auto",
});
document.body.appendChild(courseModal);

// 2) Helper to render existing rating as ★☆☆ etc.
function renderStaticStars(rate) {
  let full = Math.floor(rate);
  let stars = "★".repeat(full);
  if (rate % 1 >= 0.5) stars += "☆";
  while (stars.length < 5) stars += "☆";
  return `<span style="color:gold; font-size:18px;">${stars}</span>`;
}

// 3) Show / populate modal
function showCourseDetails(course) {
  courseModal.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;">
      <h3 style="font-size:16px; margin:0;">${course.title}</h3>
      <button id="closeCourseModal"
              style="background:red;color:white;border:none;border-radius:50%;
                     width:25px;height:25px;cursor:pointer;line-height:0;">×
      </button>
    </div>
    <img src="${course.pic}" alt="${course.title}"
         style="width:100%;height:150px;object-fit:cover;border-radius:5px;
                margin:10px 0;">
    <p><strong>Description:</strong> ${
      course.desc_text || course.description
    }</p>
    <p><strong>Price:</strong> ${course.price || "Free"}</p>
    <a href="${
      course.coupon || "Coupon not available"
    }"><strong>Coupon:</strong>Click me!! </a>
    <div><strong>Rating:</strong> ${renderStaticStars(course.rating || 4)}</div>
    <div style="margin-top:10px;"><strong>Rate Now:</strong></div>
    <div id="rateNow" style="color:gold; font-size:20px; cursor:pointer;">
      <span data-val="1">★</span>
      <span data-val="2">★</span>
      <span data-val="3">★</span>
      <span data-val="4">★</span>
      <span data-val="5">★</span>
    </div>
  `;

  // show
  modalOverlay.style.display = "block";
  courseModal.style.display = "block";

  // close handler
  document.getElementById("closeCourseModal").addEventListener("click", () => {
    modalOverlay.style.display = "none";
    courseModal.style.display = "none";
  });

  // Rate‑Now stars
  const stars = courseModal.querySelectorAll("#rateNow span");
  stars.forEach((s) => {
    s.addEventListener("click", () => {
      const val = s.getAttribute("data-val");
      stars.forEach((x) => {
        x.style.color = x.getAttribute("data-val") <= val ? "orange" : "gold";
      });
      alert(`You rated this course ${val} star${val > 1 ? "s" : ""}!`);
    });
  });
}

fetchData(); // Initial data fetch
