export async function loadJSON(filePath) {
  try {
    const response = await fetch(filePath)
    if (!response.ok) throw new Error(`Failed to load ${filePath}`)
    return await response.json()
  } catch (error) {
    console.error(`Error loading JSON: ${filePath}`, error)
    return null
  }
}

export function getImageUrl(imageId, imagesData) {
  return imagesData?.[imageId] || "/placeholder.jpg"
}

export function formatCurrency(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(amount)
}

export function calculateSavings(monthlyBill) {
  const savingsPercentage = 0.8
  return Math.round(monthlyBill * savingsPercentage)
}

export function getRecommendedSystemSize(monthlyBill) {
  // Rough calculation: 1 kW generates ~120 kWh/month, saving ~₹1200
  const kw = Math.ceil(monthlyBill / 1200)
  return Math.max(1, Math.min(10, kw))
}
