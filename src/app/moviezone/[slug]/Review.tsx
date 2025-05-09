'use client'
import React, { useEffect, useState } from 'react'

export default function MovieReviewSection({movieId}: {movieId: string}){
  const [reviews,setReviews] = useState<Review>([])
  const [refreshKey,setRefreshKey] = useState(0)
  useEffect(()=>{
    const fetchReviews = async()=>{
      try {
        const request = await fetch('/api/reviews/allreviews',{
          method: 'POST',
          body: JSON.stringify({movieid: movieId})
        })
        const result = await request.json()
        if(result.message == 'couldnot find a movie'){
          console.log('No reviews available')
        }else{
          setReviews(result)
        }
        
      } catch (error: any) {
        console.log('error while retriving all reviews', error.message)
      }
    }
    fetchReviews()
  },[refreshKey])
  const [input , setInput] = useState('')
  const [rating, setRating] = useState<number | null>(null)
  const handlePost = async() =>{
    if (input.trim() === "") return; 
    setInput("");
    try {
      const request = await fetch('/api/reviews/setReviews',{
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({movieid: movieId,reviews: input,rating: rating})
      })
      const response = await request.json()
      if(!response.error){
        console.log('successfully saved in database')
        setRefreshKey(prev => prev + 1)
      }
    } catch (error: any) {
      console.log('error while adding or editing reviews', error.message)
    }
  }

  const handleRating = (e: any) =>{
      setRating(e.target.value)
  }
    
  
  return(
  <>
  <div className="review-section pl-20">
      <h1 className='text-lg font-bold'>Popular Review</h1>
     {reviews && reviews.map((item)=>(
      <div key={item._id}>
        <span className='mr-3'>Rate: {item.rating}</span>
        <span>{item.reviews}</span>
      </div>
     ))}
     
     <div className="add-review my-4">
      <span className='font-bold'>Rate it: </span>
     <div className="rating rating-md rating-half ">
      <input type="radio" name="rating-11" className="rating-hidden" />
  {[0.5,1,1.5,2,2.5,3,3.5,4,4.5,5].map((item)=>
     (
         <input type="radio" name="rating-11" value={item} className={`mask mask-star-2 mask-half-${Number.isInteger(item) ? '2' : '1'} bg-yellow-300`} aria-label={`${item} star`} key={item} onClick={handleRating}/>
      )   
     )}
</div>
      <input 
      type="text" 
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      className='input input-sm input-neutral ml-2'
      placeholder='write a review'
      />
      <button onClick={handlePost} className='ml-2 btn btn-sm btn-outline'>post</button>
     

    </div>
    </div>
    
  </>)
}

