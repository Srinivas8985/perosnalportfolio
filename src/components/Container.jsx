export default function Container({ children, className = "" }) {
  return (
    <div className={`w-full max-w-[1280px] mx-auto px-6 md:px-12 ${className}`}>
      {children}
    </div>
  )
}
