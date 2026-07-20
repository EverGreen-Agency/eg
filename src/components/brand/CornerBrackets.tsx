export default function CornerBrackets() {
  const corner = 'absolute w-6 h-6 md:w-8 md:h-8 border-menta/30'
  return (
    <div className="absolute inset-4 md:inset-8 pointer-events-none z-[1]" aria-hidden>
      <span className={`${corner} top-0 left-0 border-t border-l`} />
      <span className={`${corner} top-0 right-0 border-t border-r`} />
      <span className={`${corner} bottom-0 left-0 border-b border-l`} />
      <span className={`${corner} bottom-0 right-0 border-b border-r`} />
    </div>
  )
}
