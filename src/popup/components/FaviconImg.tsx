interface Props { domain: string; size?: number }

export default function FaviconImg({ domain, size = 18 }: Props) {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget
    if (!img.dataset['fallback']) {
      img.dataset['fallback'] = '1'
      img.src = `https://www.google.com/s2/favicons?domain=${domain}&sz=32`
    } else {
      img.style.display = 'none'
    }
  }

  return (
    <img
      src={`https://logo.clearbit.com/${domain}`}
      width={size}
      height={size}
      alt=""
      onError={handleError}
      style={{ borderRadius: 4, flexShrink: 0 }}
    />
  )
}
