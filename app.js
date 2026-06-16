/* ==========================================================================
   Aether Gallery — JavaScript Application Engine
   ========================================================================== */

// Curated Showcase Artwork Repository
const artworkRepository = [
  {
    id: 1,
    title: "Silent Sanctuary",
    category: "nature",
    src: "images/nature_forest.png",
    description: "A mystical, moss-draped redwood forest where early morning sun rays filter through giant branches, illuminating a low carpet of ground fog.",
    tags: ["Forest", "Sunlight", "Mystical", "Serene"],
    alt: "Sunbeams breaking through towering redwoods in a misty forest"
  },
  {
    id: 2,
    title: "Celestial Glow",
    category: "nature",
    src: "images/nature_aurora.png",
    description: "The cosmic dance of the aurora borealis, painting the night sky in curtains of emerald and violet over a snow-covered mountain range and quiet lake.",
    tags: ["Aurora", "Mountains", "Night Sky", "Lake"],
    alt: "Green and pink aurora borealis reflecting on a frozen mountain lake"
  },
  {
    id: 3,
    title: "Neo-Tokyo Pulse",
    category: "urban",
    src: "images/urban_cyberpunk.png",
    description: "A rain-drenched cyberpunk street alley shimmering under high-density neon signs, showing reflecting lights on the wet asphalt floor.",
    tags: ["Cyberpunk", "Neon", "Rain", "Cityscape"],
    alt: "Glowing magenta and cyan neon signs illuminating a wet city street"
  },
  {
    id: 4,
    title: "Monolithic Geometry",
    category: "urban",
    src: "images/urban_brutalist.png",
    description: "Brutalist architectural curves and sharp planes rendered in raw concrete, casting dramatic shadows against a crisp, cloudless sky.",
    tags: ["Brutalist", "Architecture", "Concrete", "Minimalism"],
    alt: "Sweeping concrete curves of a modernist building facade"
  },
  {
    id: 5,
    title: "Chroma Nebula",
    category: "space",
    src: "images/space_nebula.png",
    description: "An deep space celestial cradle filled with vibrant gaseous dust of purple, magenta, and gold, housing nurseries of newly forming stars.",
    tags: ["Nebula", "Galaxy", "Stars", "Deep Space"],
    alt: "Vibrant stellar dust cloud glowing in shades of magenta and purple"
  },
  {
    id: 6,
    title: "Planetary Horizon",
    category: "space",
    src: "images/space_rings.png",
    description: "An immense, ringed gas giant rising slowly over the desolate, cratered ridge of its rocky tidally-locked moon in deep orbit.",
    tags: ["Gas Giant", "Rings", "Moon", "Sci-Fi"],
    alt: "A ringed planet hanging low in the sky above a rocky moon surface"
  },
  {
    id: 7,
    title: "Iridescent Flow",
    category: "abstract",
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    description: "A smooth, elegant render of fluid ribbons of translucent colored glass, overlapping to create refractions and pastel gradients.",
    tags: ["Glass", "Fluid", "Gradients", "Minimalist"],
    alt: "Smooth flowing glass ribbons in abstract wave shapes"
  },
  {
    id: 8,
    title: "Chroma Splash",
    category: "abstract",
    src: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=80",
    description: "A high-contrast explosion of colorful liquid paint droplets suspended mid-air against a pitch-black minimalist canvas.",
    tags: ["Paint", "Fluid Dynamic", "Multicolor", "Splash"],
    alt: "Vibrant splash of orange, blue, and yellow paint against a black background"
  }
];

// Active Application State
let activeArtworks = [...artworkRepository];
let currentCategory = "all";
let searchQuery = "";
let currentLightboxIndex = 0;

// DOM Elements Selection
const galleryGrid = document.getElementById("gallery-grid");
const searchInput = document.getElementById("search-input");
const clearSearchBtn = document.getElementById("clear-search");
const categoryButtons = document.querySelectorAll(".category-btn");
const noResultsContainer = document.getElementById("no-results");
const resetFiltersBtn = document.getElementById("reset-filters-btn");

// Lightbox Elements Selection
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-image");
const lightboxSpinner = document.getElementById("lightbox-spinner-icon");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxDesc = document.getElementById("lightbox-desc");
const lightboxCategory = document.getElementById("lightbox-category");
const lightboxCounter = document.getElementById("lightbox-counter");
const lightboxTags = document.getElementById("lightbox-tags");
const lightboxDownloadLink = document.getElementById("lightbox-download-link");
const lightboxCloseBtn = document.getElementById("lightbox-close-btn");
const lightboxPrevBtn = document.getElementById("lightbox-prev-btn");
const lightboxNextBtn = document.getElementById("lightbox-next-btn");
const lightboxOverlayBg = document.getElementById("lightbox-overlay-bg");

/* ==========================================================================
   Gallery Rendering & Animation Engine
   ========================================================================== */

/**
 * Renders the gallery cards inside the grid with stagger entry animations.
 * @param {Array} artworks - The list of artwork objects to render.
 */
function renderGallery(artworks) {
  galleryGrid.innerHTML = "";

  if (artworks.length === 0) {
    noResultsContainer.classList.remove("hidden");
    galleryGrid.style.display = "none";
    return;
  }

  noResultsContainer.classList.add("hidden");
  galleryGrid.style.display = "grid";

  artworks.forEach((art, index) => {
    // Create main card element
    const card = document.createElement("div");
    card.className = "gallery-card";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `View details of ${art.title}`);
    card.dataset.id = art.id;
    
    // Add staggered animation delay
    card.style.animationDelay = `${index * 0.06}s`;

    // Inline SVG Icon for Card Hover Eye Button
    const eyeIconSvg = `
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    `;

    // Map tags to small badge spans
    const tagBadges = art.tags.slice(0, 2).map(tag => `<span class="card-tag">${tag}</span>`).join("");

    card.innerHTML = `
      <div class="card-media">
        <img src="${art.src}" alt="${art.alt}" class="card-img" loading="lazy">
        <div class="card-overlay">
          <div class="card-info">
            <span class="card-category">${art.category}</span>
            <h3 class="card-title">${art.title}</h3>
            <div class="card-meta">
              <div class="card-tags">
                ${tagBadges}
              </div>
              <div class="card-view-btn" aria-hidden="true">
                ${eyeIconSvg}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Card Trigger Events
    card.addEventListener("click", () => openLightbox(art.id));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(art.id);
      }
    });

    galleryGrid.appendChild(card);
  });
}

/* ==========================================================================
   Filtering & Live Search Core Logic
   ========================================================================== */

/**
 * Filters the active catalog based on category and query, triggering smooth transitions.
 */
function applyFiltering() {
  // Fade out grid slightly for a fluid aesthetic switch
  galleryGrid.style.opacity = "0.3";
  galleryGrid.style.transform = "translateY(5px)";

  setTimeout(() => {
    // Filtering logic
    activeArtworks = artworkRepository.filter(art => {
      const matchesCategory = currentCategory === "all" || art.category === currentCategory;
      
      const cleanQuery = searchQuery.toLowerCase().trim();
      const matchesSearch = cleanQuery === "" || 
        art.title.toLowerCase().includes(cleanQuery) ||
        art.description.toLowerCase().includes(cleanQuery) ||
        art.category.toLowerCase().includes(cleanQuery) ||
        art.tags.some(tag => tag.toLowerCase().includes(cleanQuery));

      return matchesCategory && matchesSearch;
    });

    renderGallery(activeArtworks);

    // Fade grid back in
    galleryGrid.style.opacity = "1";
    galleryGrid.style.transform = "translateY(0)";
  }, 150);
}

// Category Button Navigation Clicks
categoryButtons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    categoryButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.dataset.category;
    applyFiltering();
  });
});

// Real-Time Search Handler
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  
  // Toggle Search Clear Button visibility
  if (searchQuery.length > 0) {
    clearSearchBtn.classList.add("visible");
  } else {
    clearSearchBtn.classList.remove("visible");
  }
  applyFiltering();
});

// Clear Search Input Click
clearSearchBtn.addEventListener("click", () => {
  searchInput.value = "";
  searchQuery = "";
  clearSearchBtn.classList.remove("visible");
  searchInput.focus();
  applyFiltering();
});

// Reset Filter Button (Empty state trigger)
resetFiltersBtn.addEventListener("click", () => {
  searchInput.value = "";
  searchQuery = "";
  clearSearchBtn.classList.remove("visible");
  currentCategory = "all";
  
  categoryButtons.forEach(btn => {
    if (btn.dataset.category === "all") btn.classList.add("active");
    else btn.classList.remove("active");
  });
  
  applyFiltering();
});

/* ==========================================================================
   Lightbox Navigation & Media Control
   ========================================================================== */

/**
 * Preloads sibling images to guarantee zero-latency navigation when clicks occur.
 */
function preloadAdjacentArtworks() {
  if (activeArtworks.length <= 1) return;

  const nextIdx = (currentLightboxIndex + 1) % activeArtworks.length;
  const prevIdx = (currentLightboxIndex - 1 + activeArtworks.length) % activeArtworks.length;

  const preloadNext = new Image();
  preloadNext.src = activeArtworks[nextIdx].src;

  const preloadPrev = new Image();
  preloadPrev.src = activeArtworks[prevIdx].src;
}

/**
 * Loads specific artwork index contents into the lightbox with transition animations.
 * @param {number} idx - Index of the target artwork inside activeArtworks list.
 */
function loadLightboxArtwork(idx) {
  currentLightboxIndex = idx;
  const art = activeArtworks[currentLightboxIndex];

  if (!art) return;

  // Prepare image fade transition
  lightboxImg.classList.remove("loaded");
  lightboxSpinner.classList.add("visible");

  // Load target media source
  lightboxImg.src = art.src;
  lightboxImg.alt = art.alt;
  lightboxDownloadLink.href = art.src;

  // Text details setup
  lightboxTitle.textContent = art.title;
  lightboxDesc.textContent = art.description;
  lightboxCategory.textContent = art.category;
  lightboxCounter.textContent = `${currentLightboxIndex + 1} of ${activeArtworks.length}`;

  // Map and render tags list
  lightboxTags.innerHTML = art.tags.map(tag => `<span class="caption-tag">#${tag}</span>`).join("");

  // Setup navigation visibility (hide navigation controls if 1 item)
  if (activeArtworks.length <= 1) {
    lightboxPrevBtn.style.display = "none";
    lightboxNextBtn.style.display = "none";
  } else {
    lightboxPrevBtn.style.display = "flex";
    lightboxNextBtn.style.display = "flex";
  }

  // Preload next/prev assets
  preloadAdjacentArtworks();
}

/**
 * Opens Lightbox overlay.
 * @param {number} artworkId - ID of clicked image model.
 */
function openLightbox(artworkId) {
  const artworkIndex = activeArtworks.findIndex(art => art.id === artworkId);
  if (artworkIndex === -1) return;

  // Set active class
  lightbox.classList.add("active");
  lightbox.setAttribute("aria-hidden", "false");
  
  // Disable body background scroll
  document.body.style.overflow = "hidden";

  // Load details
  loadLightboxArtwork(artworkIndex);

  // Accessibility Focus Trap setup
  lightboxCloseBtn.focus();
}

/**
 * Closes Lightbox overlay.
 */
function closeLightbox() {
  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden", "true");
  
  // Restore scrolling
  document.body.style.overflow = "";

  // Reset img to clean browser memory
  setTimeout(() => {
    lightboxImg.src = "";
    lightboxImg.classList.remove("loaded");
  }, 300);
}

/**
 * Slides to next artwork.
 */
function navigateNext() {
  if (activeArtworks.length <= 1) return;
  const nextIdx = (currentLightboxIndex + 1) % activeArtworks.length;
  loadLightboxArtwork(nextIdx);
}

/**
 * Slides to previous artwork.
 */
function navigatePrev() {
  if (activeArtworks.length <= 1) return;
  const prevIdx = (currentLightboxIndex - 1 + activeArtworks.length) % activeArtworks.length;
  loadLightboxArtwork(prevIdx);
}

// Lightbox Listeners
lightboxImg.addEventListener("load", () => {
  lightboxSpinner.classList.remove("visible");
  lightboxImg.classList.add("loaded");
});

lightboxCloseBtn.addEventListener("click", closeLightbox);
lightboxPrevBtn.addEventListener("click", navigatePrev);
lightboxNextBtn.addEventListener("click", navigateNext);
lightboxOverlayBg.addEventListener("click", closeLightbox);

// Keyboard Access Navigation
window.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("active")) return;

  switch (e.key) {
    case "Escape":
      closeLightbox();
      break;
    case "ArrowRight":
      navigateNext();
      break;
    case "ArrowLeft":
      navigatePrev();
      break;
  }
});

/* ==========================================================================
   Application Initialization
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  renderGallery(artworkRepository);
});
