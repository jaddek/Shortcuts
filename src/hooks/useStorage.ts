import { useState, useEffect, useCallback } from 'react'

export function useStorage<T>(key: string, defaultValue: T): [T, (value: T) => Promise<void>] {
  const [state, setState] = useState<T>(defaultValue)

  useEffect(() => {
    chrome.storage.local.get(key).then((result) => {
      if (result[key] !== undefined) setState(result[key] as T)
    })
  }, [key])

  const set = useCallback(async (value: T) => {
    setState(value)
    await chrome.storage.local.set({ [key]: value })
  }, [key])

  return [state, set]
}
