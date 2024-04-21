"use client"
import React,{useEffect,useState} from 'react'
// import Link from 'next/link'
// import Header from '@/Components/Header'
import axios from 'axios'

const page = () => {
  const [Images, setImages] = useState([]);


//   useEffect(() => {
//   getImages()
// }, [])    // useEffect function use kora hoy kono button e click na kore Image anar jonno.




  const getImages=async ()=>{
    try{
      const response =await axios.get("https://picsum.photos/v2/list")
      const data=response.data;
      setImages(data);
      console.log(Images)
    } catch(error) {
      console.error("Error Fetching Images");
    }
  }
  return (
    <div>
      <button onClick={getImages} className='px-5 py-3 bg-green-800 text-white font-bold'>Get Images</button>
      <div ClassName='p-10'>
        {Images.map((elem,i)=>{
         return <img
          key={i}
          src={elem.download_url}
          width={300}
          height={300}
          className='m-10 rounded inline-block'

         />
          // <img src=""/>
          
          

        })}
      </div>
     


    </div>
  )
}

export default page