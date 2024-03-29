import { excludedRoutes } from "../../constants/excluded-routes"
import { useGetMe } from "../../hooks/useGetMe"

interface GuardProps {
  children: JSX.Element
}

export const Guard = ({ children }: GuardProps) => {
  const { data: user } = useGetMe()

  console.log(user)

  return (
    <>
      {excludedRoutes.includes(window.location.pathname) ? children : user && children}
    </>
  )

  return children

}