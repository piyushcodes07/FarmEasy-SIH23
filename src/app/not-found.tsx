import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='mt-8 flex justify-center items-center flex-col'>
      {/* <h2>Not Found</h2> */}
      <div className="ml-2 text-xl text-green-500">
            Sorry sir, Page under development😔
        </div>
        <div className='m-4'>
      <Link className='text-xl p-2 rounded bg-gray-400 mt-2' href="/">Return Home</Link>
            
        </div>
    </div>
  )
}