let arrowOne = document.querySelector(".arrow1");
let arrowTwo = document.querySelector(".arrow2");
let boxOne = document.querySelector(".box1");
let discover = document.querySelector(".Discover");
let we = document.querySelector('.We')

let backgrounds = [
  "url(./images/desktop-image-hero-1.jpg)",
  "url(./images/desktop-image-hero-2.jpg)",
  "url(./images/desktop-image-hero-3.jpg)",
];

let h1Text = [
  "Discover innovative ways to decorate",
  "We are available all across the globe",
  "Manufactured with the best materials",
];

let paragraph_h1 = [
  "We provide unmatched quality, comfort, and style for We provide unmatched quality, comfort, and style for propertyowners across the country. Our experts combine form andfunction in bringing your vision to life. Create a room in yourown style with our collection and make your property areflection of you and what you love.",
  
  "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
 
  " Our multifunctional collection blends design and function to suit your individual taste.Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space."
];

let currentBackgroundIndex = 0; // Initialize the index


arrowOne.addEventListener("click", () => {
  arrowOne.classList.toggle("active");

  if (arrowOne.classList.contains("active")) {
    // Toggle to the next background image and text
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    boxOne.style.backgroundImage = backgrounds[currentBackgroundIndex];
    discover.textContent = h1Text[currentBackgroundIndex],
    we.textContent = paragraph_h1[currentBackgroundIndex];
  }
});

arrowTwo.addEventListener("click", () => {
  arrowTwo.classList.toggle("active");

  if (arrowTwo.classList.contains("active")) {
    // Toggle to the previous background image and text
    currentBackgroundIndex =
      (currentBackgroundIndex - 1 + backgrounds.length) % backgrounds.length;
    boxOne.style.backgroundImage = backgrounds[currentBackgroundIndex];
    discover.textContent = h1Text[currentBackgroundIndex],
    we.textContent = paragraph_h1[currentBackgroundIndex];
  }
});
