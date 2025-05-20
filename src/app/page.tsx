'use client'
import Image from "next/image"
import UserInitializer from "./components/UserInitializer"

const Hero = () =>{
  return(
    <>
    <div
  className="hero min-h-screen mt-[-4rem]"
  style={{
    backgroundImage: "url(./allmovies.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    maskImage: "linear-gradient(to right, transparent, black 30%, black 70%, transparent)",
    WebkitMaskImage: "linear-gradient(to right, transparent, black 30%, black 70%, transparent)"
 
  }}>
  <div className="absolute inset-0 bg-black/50"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md mt-24">
      <h1 className="mb-3 text-5xl font-bold drop-shadow-lg">Hello there</h1>
      <p className="mb-3 font-medium drop-shadow-md">
        You arrived at the best platform where <br /> you can review movies without getting killed 
      </p>
      <button className="btn btn-outline">Be comfortable</button>
    </div>
  </div>
</div>
    </>
  )
}

const FeatruesCard = ({content}: {content: string}) =>{
  return (
    <>
    <div className="card bg-gray-600 text-primary-content w-72 h-16">
    <div className="p-4">
    <p>{content}</p>
  </div>
</div>
    </>
  )
}

const Features =() =>{
  const content = [
    'keep track of your favorite movies','Review Movies without worries',
    'recommend movies to others', 'connect with your friends'
  ]
  return (
    <>
    <div className="Features mt-5">
    <h1 className="text-2xl font-medium">Mzone provides..</h1>
    <div className="flex flex-row gap-4 ml-1 my-2">
    <FeatruesCard content={content[0]} />
    <FeatruesCard content={content[1]} />
    <FeatruesCard content={content[2]} />
    <FeatruesCard content={content[3]} />
    </div>
    </div>
    </>
  )
}

const CTAsection = () =>{
  return (
    <div className="flex flex-row my-8">
    <div className="">
    <Image src='/review.jpg' alt="review" width={500} height={400}/>
    </div>
    <div className="card w-full bg-base-100 card-xl shadow-sm">
  <div className="card-body">
    <h2 className="card-title">Need Support! WE ARE HERE TO HELP</h2>
    <p>Have questions or feedback? Reach out to us—we're here to help! Contact us anytime for support, suggestions, or collaborations.</p>
    <div className="justify-end card-actions">
      <button className="btn btn-info">Help center</button>
      <button className="btn btn-primary">contact us!</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default function Home() {

  return (
    <div className="px-4">
    <Hero />
    <Features />
    <CTAsection />
    </div>
  );
}
