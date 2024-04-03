import { useEffect, useState } from "react"
import { router } from "../components/Routes"

const usePath = () => {
  const [path, setPath] = useState<string>(window.location.pathname) // get initial path

  // subscribe to router changes
  useEffect(() => {
    router.subscribe((state) => {
      setPath(state.location.pathname)
    })
  })

  return { path }
}

export { usePath }