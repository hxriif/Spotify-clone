import { Button } from "@/components/ui/button"

export default function Box2 () {
    return (
        <div className='bg-[#252525] rounded-lg p-2 flex flex-col gap-2'>
            <p className='font-medium text-base'>Let's find some podcasts to <span>follow</span></p>
            <p className='text-sm pb-1'>We'll keep you updated on new <span>episodes</span></p>
            <Button className='bg-white text-black rounded-full font-bold hover:text-green-300'>Browse podcasts</Button>
        </div>
    )
  }