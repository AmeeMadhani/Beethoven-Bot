// import Image from 'next/image';
import DragDrop from '@/components/DragDrop';

export default function Home() {
  return (
    <div className = " flex flex-col items-center justify-center h-screen px-2 text-white">  
      <div>
        <DragDrop />
      </div>
    </div>
    
   
  )
}
