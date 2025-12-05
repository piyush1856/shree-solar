import { loadJSON } from "./utils.js"
import { Navbar, Footer } from "./components.js"

async function initApp() {
  try {
    // Load all data
    const [siteData, imagesData, productsData, packagesData, servicesData, projectsData, testimonialsData, blogsData] =
      await Promise.all([
        loadJSON("data/site.json"),
        loadJSON("data/images.json"),
        loadJSON("data/products.json"),
        loadJSON("data/packages.json"),
        loadJSON("data/services.json"),
        loadJSON("data/projects.json"),
        loadJSON("data/testimonials.json"),
        loadJSON("data/blogs.json"),
      ])

    // Store in window for access across pages
    window.appData = {
      site: siteData,
      images: imagesData,
      products: productsData,
      packages: packagesData,
      services: servicesData,
      projects: projectsData,
      testimonials: testimonialsData,
      blogs: blogsData,
    }

    // Initialize page-specific functions
    initNavbarFooter(siteData)

    // Call page-specific init if it exists
    if (window.initPage) {
      window.initPage()
    }
  } catch (error) {
    console.error("Failed to initialize app:", error)
  }
}

function initNavbarFooter(siteData) {
  const navbar = document.querySelector("nav")
  const footer = document.querySelector("footer")

  if (navbar) {
    navbar.innerHTML = Navbar(siteData)
    setupMobileMenu()
  }

  if (footer) {
    footer.innerHTML = Footer(siteData)
  }
}

function setupMobileMenu() {
  const menuBtn = document.getElementById("menu-btn")
  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      console.log("Mobile menu clicked")
    })
  }
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", initApp)
