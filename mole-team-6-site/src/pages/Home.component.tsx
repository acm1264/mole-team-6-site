import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Home()
{
  const navigate = useNavigate()

  useEffect(() =>
  {
    navigate("/games/mole-team-6", { replace: true })
  }, [navigate])

  return null
}
