function Stickers({ size }: { size: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 0 24 24">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z M16 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z"
      />
    </svg>
  )
}

export default Stickers