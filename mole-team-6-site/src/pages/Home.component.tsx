import { useEffect } from "react"
import { useRouter } from "next/router"

export default function Home()
{
  const router = useRouter()

  useEffect(() =>
  {
    router.replace("/games/mole-team-6") // Adjust to your actual route
  }, [router])

  return null
}
