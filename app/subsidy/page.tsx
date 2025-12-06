import { SubsidyInfo } from "@/components/subsidy-info"

export const metadata = {
  title: "Government Subsidies | Shree Solar",
  description: "Learn about available government schemes and subsidies for solar installation.",
}

export default function SubsidyPage() {
  return (
    <main className="min-h-screen">
      <SubsidyInfo />
    </main>
  )
}
