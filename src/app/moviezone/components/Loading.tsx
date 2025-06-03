import React from 'react'

function Sekelton(){
return (
  <div
  className="card w-80 bg-base-100 shadow-xl overflow-hidden animate-pulse"
  style={{
    borderRadius: "16px",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  }}
>
  <figure className="relative h-64 overflow-hidden">
    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
      <div className="w-20 h-20 bg-gray-700 rounded-full" />
    </div>
    <div className="absolute top-3 right-3">
      <div className="w-20 h-6 bg-gray-700 rounded" />
    </div>
    <div className="absolute bottom-0 left-0 w-full p-4 text-white">
      <div className="h-6 bg-gray-700 rounded mb-2 w-3/4" />
      <div className="flex items-center justify-between">
        <div className="w-1/4 h-4 bg-gray-700 rounded" />
        <div className="w-6 h-4 bg-gray-700 rounded" />
      </div>
    </div>
  </figure>

  <div className="card-body p-5">
    <div className="w-full h-10 bg-gray-700 rounded" />
  </div>
</div>

)
}

function Loading() {
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-0 lg:gap-4 mt-7 mx-6 animate-pulse">
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
