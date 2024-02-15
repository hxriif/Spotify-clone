import { Button } from '@/components/ui/button';

export default function Box1(){
    return (
        <div className='bg-[#252525] rounded-lg p-4 flex flex-col gap-2'>
            <p className='font-medium text-base'>Create your first playlist</p>
            <p className='text-sm pb-1'>It's easy, we'll help you</p>
            <Button className='bg-white text-black rounded-full font-bold'>Create playlist</Button>
        </div>
    )
  }