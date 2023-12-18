import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <div className="text-base bg-red-400">
            Sorry sir, Page under development😔
        </div>
      <Link href="/">Return Home</Link>
    </div>
  )
}