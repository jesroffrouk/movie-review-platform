import React from 'react'
import ReviewLL from './ReviewLL'

export default function UserProfile({user}: {user: UserWreviews | null}) {
  
  return (
    <>
    {
    user ? (
       <div>
      <div className="card card-side bg-base-100 shadow-sm w-96">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Username: {user.user.username}</h2>
          <p>Mail: {user.user.email}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Edit</button>
          </div>
        </div>
    </div>
    <ul className="list bg-base-100 rounded-box shadow-md">
      {user && user.reviews.map((review)=>(
        <ReviewLL key={review._id}  review={review}/>
      ))}
    </ul>
    </div>
    ):
    (<div>
      User not logged in
    </div>)
   }
    </>
   
  )
}


