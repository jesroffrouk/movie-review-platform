import React from 'react'

function Sekelton(){
return (
  <div>
    <div className="card card-side bg-base-100 shadow-xl rounded-none">
      <figure>
        <div className="h-20 w-20 bg-gray-200 rounded"></div>
      </figure>
      <div className="card-body">
        <div className="h-64 w-40 flex flex-col bg-base-100 rounded-lg">
          <div className="h-5 bg-gray-200 rounded w-full"></div>
          <div className="h-5 bg-gray-200 rounded w-full mt-3"></div>
          <div className="h-5 bg-gray-200 rounded w-full mt-3"></div>
          <div className="h-10 bg-gray-200 rounded mt-3"></div>
        </div>
      </div>
    </div>
  </div>
)
}

function Loading() {
  return (
    <>
    <div className="grid grid-cols-3 gap-4 mt-3 animate-pulse">
    <Sekelton />
    <Sekelton />
    <Sekelton />
    <Sekelton />
    <Sekelton />
    <Sekelton />
    </div>
    </>
  )
}

export default Loading
