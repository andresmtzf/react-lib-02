import { useState } from 'react'

export const useToggle = (initialState: boolean): [boolean, () => void] => {
  const [state, setState] = useState<boolean>(initialState)

  const toggleState = (): void => {
    setState((prevState) => !prevState)
  }

  return [state, toggleState]
}
