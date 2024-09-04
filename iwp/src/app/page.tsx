// `app/page.tsx` is the UI for the `/` URL
import Link from 'next/link'
import { Appbar } from './components/Appbar'
import { QuestionGrid } from './components/QuestionGrid'
import Sidebar from './components/Sidebar'
import Rightbar from './components/Rightbar'
export default function Page() {
  return (
    <div>
      <Appbar />
      <div className='flex flex-row justify-between'>
        <Sidebar />
        <div className='w-full px-44 flex flex-col'>
          <div className='pl-5 text-3xl pb-2 border-b'>
            All Questions
          </div>
          <QuestionGrid />
        </div>
        <Rightbar />
      </div>
    </div>
  )
}
