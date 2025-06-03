import { Star } from "lucide-react"

export default function ReviewLL({reviews}:{reviews: reviews[]}){
  return(
    <>
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl mb-4">Latest Reviews</h2>

        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review._id} className="card bg-base-200">
              <div className="card-body p-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <h3 className="font-bold text-lg">{review.movieid}</h3>
                  <div className="badge badge-primary gap-1">
                    <Star size={14} className="fill-current" />
                    {review.rating.toFixed(1)}
                  </div>
                </div>
                <p className="text-sm opacity-80">{review.reviews}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-ghost btn-xs">Read more</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card-actions justify-center mt-4">
          <button className="btn btn-outline">View All Reviews</button>
        </div>
      </div>
    </div>
    </>
  )
}
