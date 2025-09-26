'use client'
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
    <div className="max-w-md mt-24 text-2xl">
      <h1 className="mb-3 text-7xl font-bold drop-shadow-lg">Hello there</h1>
      <p className="mb-3 font-medium drop-shadow-md">
        You arrived at the best platform where <br /> you can review movies without getting killed 
      </p>
      <button className="btn btn-outline cursor-none">Be comfortable</button>
    </div>
  </div>
</div>
    </>
  )
}

const Features =() =>{
  return (
    <section className="py-20 lg:py-22 relative overflow-hidden">

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-400 to-slate-200 bg-clip-text text-transparent mb-8 leading-tight">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Discover, review, and share your movie experiences with a community that shares your passion for cinema
          </p>
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
          <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Find answers to common questions or get in touch with me
          </p>
        </div>
        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group collapse collapse-plus backdrop-blur-md shadow-lg border-2 border-slate-100/50 rounded-2xl hover:shadow-2xl hover:border-blue-200/50 transition-all duration-500 hover:-translate-y-1"
            >
              <input 
                type="radio" 
                name="faq-accordion" 
                defaultChecked={index === 0}
                className="peer"
              />
              
              
              <div className="collapse-title text-lg md:text-xl font-bold hover:text-blue-600 transition-all duration-300 py-6 px-6 md:px-8 rounded-t-2xl peer-checked:bg-gradient-to-r peer-checked:from-violet-600 peer-checked:to-gray-500 peer-checked:text-white peer-checked:shadow-lg">
                <span className="flex items-center justify-between">
                  <span className="pr-4">{faq.question}</span>
                </span>
              </div>
              
              
              <div className="collapse-content rounded-b-2xl">
                <div className="pt-4 pb-6 px-6 md:px-8">
                  <div className="h-px bg-gradient-to-r mb-4"></div>
                  <p className="leading-relaxed text-base md:text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
          </div>
      </div>
    </section>
  )
}

const ConnectWithMe = () => {

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      url: 'https://linkedin.com/in/jogendra-padhan-1349802b1',
      color: 'from-blue-500 to-blue-700',
      description: 'Professional networking and career updates'
    },
    {
      name: 'GitHub',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      url: 'https://github.com/jesroffrouk',
      color: 'from-gray-600 to-gray-800',
      description: 'Code repositories and open source projects'
    },
    {
      name: 'Twitter',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      url: 'https://x.com/JesroffR',
      color: 'from-slate-700 to-black',
      description: 'Thoughts, insights, and quick updates'
    },
    {
      name: 'Email',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      url: 'dragonsj93@gmail.com',
      color: 'from-emerald-500 to-teal-600',
      description: 'Direct communication and collaborations'
    },
    {
      name: 'Discord',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>
      ),
      url: 'https://discordapp.com/users/jawsjaban',
      color: 'from-indigo-500 to-purple-600',
      description: 'Gaming and community discussions'
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <h2 className="text-5xl md:text-7xl font-black mb-4 leading-tight">
              Connect With Me
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Feel free to contact me on any of these platforms and let&apos;s connect.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target={social.name === 'Email' ? '_self' : '_blank'}
              rel={social.name === 'Email' ? '' : 'noopener noreferrer'}
              className="group"
              title={social.description}
            >
              <div className={`
                flex items-center justify-center w-16 h-16 
                bg-gradient-to-br ${social.color} rounded-xl shadow-lg 
                hover:shadow-2xl hover:scale-110 transition-all duration-300
                text-white
              `}>
                <div className="w-7 h-7">
                  {social.icon}
                </div>
              </div>
            </a>
          ))}
        </div>


        <div className="text-center">
          <div className=" backdrop-blur-md rounded-3xl shadow-xl border-2 border-slate-100/50 p-12 max-w-4xl mx-auto">
            <div className="mb-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Collaborate?
              </h3>
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
                I&apos;m always excited to work on new projects, discuss innovative ideas, or just have a friendly chat about technology and development.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="https://x.com/JesroffR"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:border-transparent hover:text-white transition-all duration-300 px-8"
              >
                Connect on 
                <svg className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {

  return (
    <div className="px-4">
    <UserInitializer />
    <Hero />
    <Features />
    <HelpCentre />
    <ConnectWithMe />
    </div>
  );
}
