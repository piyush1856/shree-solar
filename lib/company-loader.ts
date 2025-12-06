// Company metadata loader

export interface CompanyData {
  brandName: string
  tagline: string
  logo: {
    icon: string
    text: string
    horizontal: string
    full: string
    alt: string
  }
  contact: {
    phone: string
    email: string
    whatsapp: string
  }
  address: {
    street: string
    city: string
    state: string
    pincode: string
    country: string
    fullAddress: string
  }
  socialMedia: SocialMediaLink[]
  map: {
    embedUrl: string
    latitude: number
    longitude: number
    placeId: string
  }
  businessHours: {
    [key: string]: string
  }
  about: {
    shortDescription: string
    yearEstablished: number
    gst: string
  }
}

export interface SocialMediaLink {
  type: 'facebook' | 'instagram' | 'twitter' | 'linkedin' | 'youtube'
  url: string
  label: string
}

// Helper to get the correct base path
function getBasePath(): string {
  return '/shree-solar'
}

export async function loadCompanyData(): Promise<CompanyData> {
  const basePath = getBasePath()
  const url = `${basePath}/data/company.json`
  const response = await fetch(url)
  if (!response.ok) {
    console.error(`Failed to load company data from ${url}`, response.status, response.statusText)
    throw new Error(`Failed to load company data: ${response.status} ${response.statusText}`)
  }
  return response.json()
}

