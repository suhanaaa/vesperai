"use client"
import React, { useState } from 'react'
import { RiMagicLine } from "react-icons/ri";


import { Textarea } from "@/components/ui/textarea"
import { FaLongArrowAltRight } from "react-icons/fa";

import { Kalam } from 'next/font/google'

import { Skeleton } from "@/components/ui/skeleton"
import {saveAs} from "file-saver";





const kalam = Kalam({ subsets: ['latin'], weight: '400' })


import Image from 'next/image';
import Link from 'next/link';

import { LazyLoadImage } from 'react-lazy-load-image-component';



import PromptForm from '@/components/PromptForm';

import useStore from '@/Store';
import { Button } from '@/components/ui/button';


const page = () => {

  // const [imageUrl, setImageUrl] = useState(null);

  const { imageUrl, loading } = useStore((state) => ({
    imageUrl: state.imageUrl,
    loading: state.loading,
  }))

  // const { imageUrl, setLoading } = useStore((state) => ({
  //   imageUrl: state.imageUrl,
  //   setLoading: state.setLoading,
  // }));


  // const handleImageUrlChange = (newImageUrl : any) => {
  //   setImageUrl(newImageUrl);
  // }


  const handleDownload = () => {
    let imgUrl = imageUrl
    saveAs(imgUrl, "image.png");
  }



  return (
    <div className='container mt-10'>
      {/* <div className=' flex items-center  gap-2 p-2 rounded-md text-white/80'>
            <p className='text-lg font-semibold'>Prompt</p>
           

        </div> */}

      <div className='flex flex-col gap-6  md:flex-row '>

        {/* left side */}
        
        <div className='md:w-1/2'>
            {/* <PromptForm onImageUrlChange={handleImageUrlChange} /> */}
            <PromptForm  />
        </div>
        


        {/* Right side / Output */}
        <div className='md:w-1/2 flex items-center justify-center'>
          {(imageUrl.length !== 0) ? (
            <div className='flex flex-col justify-center items-center gap-3'>
            <div className=''>
              <LazyLoadImage loading='lazy' className='rounded-md' src={imageUrl} alt='ai' width={400} height={400} />
            </div>

              <Button className='w-full' onClick={handleDownload}> Download </Button>
              
            </div>
            
          ): (
            <>
              {loading ? (
                <Skeleton className='flex h-96 w-96 md:h-96 md:w-96  border-2 items-center justify-center text-md font- text-white/80' />
              ) : (
                <div className='flex h-96 w-96 md:h-96 md:w-96  border-2 items-center justify-center text-md font- text-white/80' >Image will be generated here.</div> 
              )}
              
            
            </>

            
          )}
          
          {/* <PromptForm /> */}
        </div>

      </div>


      {/* Desktop  */}
      <div className={kalam.className}>
            <div className='hidden md:fixed bottom-0 right-0 left-0  ' >
              <p className='text-center p-4  font-regular text-sm'>Made with ❤️ by  <Link href={"https://twitter.com/ShineBarbhuiya"}>Shine Barbhuiya</Link> </p>

            </div>

      </div>

      {/* Phone  */}
      <div className={kalam.className}>
            <div className='md:hidden' >
              <p className='text-center p-4  font-regular text-sm'>Made with ❤️ by  <Link href={"https://twitter.com/ShineBarbhuiya"}>Shine Barbhuiya</Link> </p>

            </div>

      </div>

    </div>
  )
}

export default page