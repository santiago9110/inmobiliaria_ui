interface SocialIconProps {
  label: string
  href: string
  icon: string
}

export default function SocialIcon({ label, href, icon }: SocialIconProps) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full hover:bg-brand/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
    >
      <span className="material-symbols-outlined" aria-hidden="true">{icon}</span>
    </a>
  )
}