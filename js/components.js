import { getImageUrl } from "./utils.js"

export function Navbar(siteData) {
  return `
    <nav class="bg-white shadow-sm sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <a href="/" class="flex items-center space-x-2">
              <div class="w-8 h-8 bg-gradient-to-br from-green-600 to-green-400 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-sm">SR</span>
              </div>
              <span class="font-bold text-lg text-neutral-900">${siteData.businessName}</span>
            </a>
          </div>
          
          <div class="hidden md:flex space-x-8">
            <a href="/" class="text-neutral-700 hover:text-green-600 transition">Home</a>
            <a href="/about.html" class="text-neutral-700 hover:text-green-600 transition">About</a>
            <a href="/services.html" class="text-neutral-700 hover:text-green-600 transition">Services</a>
            <a href="/products.html" class="text-neutral-700 hover:text-green-600 transition">Products</a>
            <a href="/packages.html" class="text-neutral-700 hover:text-green-600 transition">Packages</a>
            <a href="/calculator.html" class="text-neutral-700 hover:text-green-600 transition">Calculator</a>
            <a href="/contact.html" class="text-neutral-700 hover:text-green-600 transition">Contact</a>
          </div>

          <button class="hidden md:block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
            Get Free Survey
          </button>

          <button id="menu-btn" class="md:hidden text-neutral-700">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  `
}

export function Footer(siteData) {
  return `
    <footer class="bg-neutral-900 text-neutral-100 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 class="font-bold text-lg mb-4">${siteData.businessName}</h3>
            <p class="text-neutral-400 text-sm">${siteData.description}</p>
          </div>
          <div>
            <h4 class="font-bold mb-4">Quick Links</h4>
            <ul class="space-y-2 text-sm text-neutral-400">
              <li><a href="/packages.html" class="hover:text-green-400">Packages</a></li>
              <li><a href="/services.html" class="hover:text-green-400">Services</a></li>
              <li><a href="/calculator.html" class="hover:text-green-400">Calculator</a></li>
              <li><a href="/contact.html" class="hover:text-green-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-4">Contact</h4>
            <p class="text-sm text-neutral-400">${siteData.phone}</p>
            <p class="text-sm text-neutral-400">${siteData.email}</p>
            <p class="text-sm text-neutral-400">${siteData.city}, ${siteData.state}</p>
          </div>
          <div>
            <h4 class="font-bold mb-4">Follow Us</h4>
            <div class="flex space-x-4">
              <a href="${siteData.socialLinks.facebook}" class="text-neutral-400 hover:text-green-400">Facebook</a>
              <a href="${siteData.socialLinks.instagram}" class="text-neutral-400 hover:text-green-400">Instagram</a>
              <a href="${siteData.socialLinks.youtube}" class="text-neutral-400 hover:text-green-400">YouTube</a>
            </div>
          </div>
        </div>
        <div class="border-t border-neutral-700 pt-8">
          <p class="text-center text-sm text-neutral-400">&copy; ${new Date().getFullYear()} ${siteData.businessName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `
}

export function ProductCard(product, imagesData, productType = "panel") {
  let specs = ""
  if (productType === "panel") {
    specs = `
      <div class="space-y-2 text-sm text-neutral-600">
        <p><span class="font-medium">Wattage:</span> ${product.wattage}W</p>
        <p><span class="font-medium">Efficiency:</span> ${product.efficiency}%</p>
        <p><span class="font-medium">Technology:</span> ${product.technology}</p>
        <p><span class="font-medium">Warranty:</span> ${product.warranty} years</p>
      </div>
    `
  } else if (productType === "inverter") {
    specs = `
      <div class="space-y-2 text-sm text-neutral-600">
        <p><span class="font-medium">Capacity:</span> ${product.capacity}</p>
        <p><span class="font-medium">Type:</span> ${product.type}</p>
        <p><span class="font-medium">Efficiency:</span> ${product.efficiency}%</p>
        <p><span class="font-medium">Warranty:</span> ${product.warranty} years</p>
      </div>
    `
  } else if (productType === "battery") {
    specs = `
      <div class="space-y-2 text-sm text-neutral-600">
        <p><span class="font-medium">Capacity:</span> ${product.capacity}</p>
        <p><span class="font-medium">Chemistry:</span> ${product.chemistry}</p>
        <p><span class="font-medium">Warranty:</span> ${product.warranty} years</p>
        <p><span class="font-medium">Cycles:</span> ${product.warranty_cycles}</p>
      </div>
    `
  }

  return `
    <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img src="${getImageUrl(product.imageId, imagesData)}" alt="${product.brand || product.model}" class="w-full h-48 object-cover">
      <div class="p-6">
        <h3 class="font-bold text-lg text-neutral-900">${product.brand}</h3>
        <p class="text-sm text-neutral-600 mb-4">${product.model}</p>
        ${specs}
        <button class="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
          Request Quote
        </button>
      </div>
    </div>
  `
}

export function PackageCard(pkg) {
  return `
    <div class="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition border-t-4 border-green-600">
      <h3 class="text-2xl font-bold text-neutral-900 mb-2">${pkg.systemSize}</h3>
      <p class="text-neutral-600 mb-6">${pkg.description}</p>
      
      <div class="space-y-4 mb-6">
        <div class="p-4 bg-neutral-50 rounded-lg">
          <p class="text-sm text-neutral-600">Price Range</p>
          <p class="font-bold text-lg text-green-600">${pkg.priceRange}</p>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="p-4 bg-neutral-50 rounded-lg">
            <p class="text-sm text-neutral-600">Monthly Generation</p>
            <p class="font-bold text-neutral-900">${pkg.monthlyUnitGeneration}</p>
          </div>
          <div class="p-4 bg-neutral-50 rounded-lg">
            <p class="text-sm text-neutral-600">Monthly Savings</p>
            <p class="font-bold text-green-600">${pkg.monthlySavings}</p>
          </div>
        </div>
        <div class="p-4 bg-neutral-50 rounded-lg">
          <p class="text-sm text-neutral-600">Roof Area Required</p>
          <p class="font-bold text-neutral-900">${pkg.roofAreaRequired}</p>
        </div>
      </div>

      <div class="flex gap-2 mb-6">
        ${pkg.subsidyEligible ? '<span class="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Subsidy Eligible</span>' : ""}
        ${pkg.emiAvailable ? '<span class="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">EMI Available</span>' : ""}
      </div>

      <button class="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-medium">
        Get Free Consultation
      </button>
    </div>
  `
}

export function TestimonialCard(testimonial, imagesData) {
  const stars = "⭐".repeat(Math.round(testimonial.rating))
  return `
    <div class="bg-white rounded-lg shadow-md p-6">
      <div class="flex items-center gap-4 mb-4">
        <img src="${getImageUrl(testimonial.imageId, imagesData)}" alt="${testimonial.customerName}" class="w-12 h-12 rounded-full object-cover">
        <div>
          <h4 class="font-bold text-neutral-900">${testimonial.customerName}</h4>
          <p class="text-sm text-neutral-600">${testimonial.city}</p>
        </div>
      </div>
      <p class="text-sm text-yellow-500 mb-3">${stars}</p>
      <p class="text-neutral-700">"${testimonial.feedback}"</p>
    </div>
  `
}
