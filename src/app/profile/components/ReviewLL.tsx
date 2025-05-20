export default function ReviewLL({review}:{review: reviews}){
  return(
    <>
    <li className="list-row">
    <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
    <div>
      <div>moviename
        {/* i need to add movie name here so i need to send a api call to get movie id of a movie or just store movie name too */}
      </div>
      <div className="text-xs uppercase font-semibold opacity-60">rating: {review.rating}</div>
    </div>
    <p className="list-col-wrap text-xs">
      {review.reviews}
    </p>
  </li>
    </>
  )
}
