import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solar Products | SolarMax',
  description: 'Browse our range of solar panels, inverters, batteries, and pumps',
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

