'use client'
import React, { useState } from 'react'
import { Star, ThumbsUp, Send } from "lucide-react"
import { useAddEditReveiwsMutation, useGetReviewsQuery } from '@/lib/features/api'

function PopularReviewCard({review}: {review: Review}){
  return(
    <>
    <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex justify-between items-center mb-2">
                <h3 className="card-title">{review.title || "No Title"}</h3>
                <div className="flex items-center">
                  {[...Array(10)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < review.rating ? "fill-warning text-warning" : ""}`}
                          />
                        ))}

                </div>
              </div>
              <p className="text-base-content/80">
                {review.reviews}
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm opacity-70">By {review.userid.username}</span>
                <div className="flex items-center gap-1">
                  <ThumbsUp className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default function MovieReviewSection({movieId}: {movieId: string}){
  
  const allReviewsQuery = useGetReviewsQuery(movieId)
  const [addEditReviews] = useAddEditReveiwsMutation()
  const [formData, setFormData] = useState<{title: string, input: string , rating: number | null}>({
    title: '',
    input: '',
    rating: null,
  })
  const [error,setError] = useState('')
  
  const handlePost = async() =>{
    if (formData.input.trim() === "") return setError('write some reviews first'); 
    try {
      if(formData.rating){
        setError('')
        await addEditReviews({movieId, title: formData.title , reviews: formData.input, rating: formData.rating}).unwrap()
      }
      else{
        setError('provide a rating')
      }
    }
     catch (error: any) {
      console.log(error.message) 
    }
    setFormData({...formData, title: '', input: ''})
  }

  // const handleRating = (e: any) =>{
  //     setFormData({
  //       ...formData, [e.target.name]: e.target.value,
  //     })
  // }

  if(allReviewsQuery.error){
    console.log(allReviewsQuery.error)
  }

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  
  
  return(
  <>
  {/* Reviews Section */}
        <h2 className="text-3xl font-bold mb-6">Popular Reviews</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {!allReviewsQuery.isError ? (!Array.isArray(allReviewsQuery.data) ? (<>NO reviews yet</>) : (allReviewsQuery.data && allReviewsQuery.data.map((review)=>(
            <PopularReviewCard key={review._id} review={review} />
          )))):(
          <>
          error while fetching reviews
          </>)}
        </div>

        {/* Submit Review Form */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Write Your Review</h2>

            <form onSubmit={(e) => e.preventDefault()}>
              {/* i will do your name , email and review title section later...i do need to solve backend too thats why */}

              <div className="form-control mt-4">
                <label className="label" htmlFor="review-title">
                  <span className="label-text mb-1">Review Title</span>
                </label>
                <input
                  type="text"
                  value={formData.title}
                  name='title'
                  onChange={handleInputChange}
                  id="review-title"
                  placeholder="Give your review a title"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text mr-1">Your Rating: </span>
                </label>
                <div className="rating rating-lg">
                  {[1, 2, 3, 4, 5 , 6 , 7 , 8 , 9 , 10].map((value) => (
                    <input
                      key={value}
                      type="radio"
                      name="rating"
                      className="mask mask-star-2 bg-warning"
                      value={value}
                      onClick={handleInputChange}
                      aria-label={`${value} stars`}
                    />
                  ))}
                </div>
              </div>

              <div className="form-control mt-4">
                <label className="label" htmlFor="review-content">
                  <span className="label-text mr-1">Your Review:</span>
                </label>
                <textarea
                  id="review-content"
                  value={formData.input}
                  name='input'
                  onChange={handleInputChange}
                  className="textarea textarea-bordered h-24"
                  placeholder="Share your thoughts about the movie"
                ></textarea>
              </div>
              {error && <div className='font-medium text-red-700 text-start'>
                  {error}
              </div>}
              <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={handlePost}>
                  <Send className="mr-2 w-4 h-4" /> Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
    
  </>)
}

