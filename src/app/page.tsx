'use client'
import { Star, Users, Film, MessageCircle, Mail, Headphones } from "lucide-react"
import UserInitializer from "./components/UserInitializer"

const Hero = () =>{
  return(
    <>
    <div
  className="hero min-h-screen mt-[-4rem]"
  style={{
    backgroundImage: "url(/allmovies.jpg)",
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

const Features =() =>{
   const features = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Rate & Review",
      description: "Share your thoughts and rate movies with our intuitive 10-star system",
      gradient: "from-yellow-400 to-orange-500",
      bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Driven",
      description: "Connect with fellow movie enthusiasts and discover new perspectives",
      gradient: "from-blue-400 to-purple-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-purple-50",
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: "Vast Movie Database",
      description: "Access reviews for thousands of movies across all genres and eras",
      gradient: "from-green-400 to-teal-500",
      bgColor: "bg-gradient-to-br from-green-50 to-teal-50",
    },
  ]

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent text-lg font-semibold tracking-wide uppercase">
              Platform Features
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-400 to-slate-200 bg-clip-text text-transparent mb-8 leading-tight">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Discover, review, and share your movie experiences with a community that shares your passion for cinema
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div
                className={`card ${feature.bgColor} shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-white/50 backdrop-blur-sm`}
              >
                <div className="card-body items-center text-center p-8">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="card-title text-2xl mb-4 text-slate-800 group-hover:text-slate-900 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg">{feature.description}</p>
                </div>

                {/* Hover effect overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const HelpCentre = () =>{

  const faqs = [
    {
      question: "How do I write my first movie review?",
      answer:
        "Simply search for a movie, click on it, and scroll down to the review section. Click 'Write Review' and share your thoughts!",
    },
    {
      question: "Can I edit my reviews after posting?",
      answer:
        "Yes! You can edit your reviews anytime by going to your profile and selecting the review you want to modify.",
    },
    {
      question: "How are movie ratings calculated?",
      answer:
        "It is demo version ,so we are not calculating it now but we will add this feature later",
    },
  ]

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-20 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-slate-400 to-slate-200 bg-clip-text text-transparent text-lg font-semibold tracking-wide uppercase">
              Support Center
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-400 to-slate-200 bg-clip-text text-transparent mb-8">
            Help Center
          </h2>
          <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Find answers to common questions or get in touch with our support team
          </p>
        </div>

        {/* Help Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-slate-400 to-slate-200 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h3>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="collapse collapse-plus bg-white/80 backdrop-blur-sm shadow-lg border border-slate-200/50 hover:shadow-xl transition-all duration-300"
              >
                <input type="radio" name="faq-accordion" defaultChecked={index === 0} />
                <div className="collapse-title text-lg font-semibold text-slate-800 hover:text-blue-600 transition-colors">
                  {faq.question}
                </div>
                <div className="collapse-content">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className=" rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 80%, #ffffff 0%, transparent 50%), 
                               radial-gradient(circle at 80% 20%, #ffffff 0%, transparent 50%)`,
              }}
            ></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-4xl font-bold text-white mb-6">Still Need Help?</h3>
            <p className="text-blue-100 mb-12 text-xl max-w-2xl mx-auto">
              Our support team is here to help you 24/7 with any questions or concerns
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                <Mail className="w-10 h-10 text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <span className="text-white font-semibold text-lg block mb-2">Email Support</span>
                <span className="text-blue-100">support@moviereview.com</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                <MessageCircle className="w-10 h-10 text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <span className="text-white font-semibold text-lg block mb-2">Live Chat</span>
                <span className="text-blue-100">Available 24/7</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                <Headphones className="w-10 h-10 text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <span className="text-white font-semibold text-lg block mb-2">Phone Support</span>
                <span className="text-blue-100">1-800-MOVIES</span>
              </div>
            </div>

            <button className="btn btn-lg bg-slate-800 text-white hover:bg-slate-600 border-none shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold">
              Contact Support Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {

  return (
    <div className="px-4">
    <UserInitializer />
    <Hero />
    <Features />
    <HelpCentre />
    </div>
  );
}
