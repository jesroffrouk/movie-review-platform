import Link from 'next/link';
import { Film, Search, Star, Edit3, Users, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Intro Section */}
      <section className="hero min-h-[60vh] bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Moviezone
            </h1>
            <p className="text-xl md:text-2xl text-base-content/80 leading-relaxed max-w-3xl mx-auto">
              Simple platform to review movies ,
              Discover films through the eyes of movie lovers, just like you.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-base-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-base-content">
              Why I Built This
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <p className="text-lg leading-relaxed text-base-content/90">
                As a lifelong movie enthusiast, I was frustrated with review platforms dominated by critics who seemed disconnected
                from everyday viewers. I always wanted to create a space for movie lovers to have genuine discussions about the films they love. 
                This platform is my solo project, intended to build features that truly make this possible. I don’t just want to 
                create a platform for reviewing movies,I want to build a place where movie lovers can share and connect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-base-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-base-content">
              How It Works
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
              <div className="card-body text-center">
                <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Search className="w-8 h-8 text-primary" />
                </div>
                <h3 className="card-title justify-center text-xl mb-3">Browse Movies</h3>
                <p className="text-base-content/80">
                  Explore our collectons films across all genres and decades. 
                </p>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20">
              <div className="card-body text-center">
                <div className="mx-auto w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <Star className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="card-title justify-center text-xl mb-3">Read Reviews & Ratings</h3>
                <p className="text-base-content/80">
                  Dive into detailed reviews from real viewers. Get insights beyond just 
                  star ratings – understand the why behind each opinion.
                </p>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20">
              <div className="card-body text-center">
                <div className="mx-auto w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <Edit3 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="card-title justify-center text-xl mb-3">Write Your Own Review</h3>
                <p className="text-base-content/80">
                  Share your thoughts and help others discover great films. 
                  Your voice matters in our community of movie lovers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4 bg-base-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-base-content">
              Who's Behind This?
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className="lg:w-1/3">
              <div className="avatar flex justify-center items-center">
                <div className="w-48 h-48 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Film className="w-20 h-20 text-white m-14" />
                </div>
              </div>
            </figure>
            <div className="card-body lg:w-2/3">
              <h3 className="card-title text-2xl mb-4">Movie Enthusiast & Developer</h3>
              <p className="text-lg leading-relaxed text-base-content/90 mb-4">
                Hey there! I'm a passionate developer who's been obsessed with movies since childhood. 
                When I'm not coding, you'll find me in a theater seat or diving deep into film analysis. 
                I've watched everything from silent classics to the latest blockbusters, and I believe 
                every movie has something to offer – if you know where to look.
              </p>
              <p className="text-lg leading-relaxed text-base-content/90">
                Combining my love for cinema with my technical skills felt like a natural fit. 
                This platform represents hundreds of hours of development, all driven by the simple 
                desire to help fellow movie lovers find their next favorite film.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 bg-base-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-6 text-base-content">
              Future Vision
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="card bg-gradient-to-br from-success/5 to-info/5 border border-success/20">
            <div className="card-body">
              <div className="flex justify-center mb-6">
                <div className="flex items-center gap-4">
                  <Users className="w-8 h-8 text-success" />
                  <Heart className="w-8 h-8 text-error" />
                  <Film className="w-8 h-8 text-info" />
                </div>
              </div>
              <p className="text-xl leading-relaxed text-base-content/90">
                My vision is simple: build the most trusted movie review community on the web. 
                I want to create a space where every film gets a fair chance, where hidden gems 
                can be discovered, and where your next favorite movie is just a review away. 
                Together, we're building something special – a community that celebrates the magic 
                of cinema in all its forms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-base-content">
            Ready to Discover Your Next Favorite Movie?
          </h2>
            <Link href="/moviezone" >
          <button className="btn btn-primary btn-lg text-white px-12 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Start Exploring Reviews
          </button>
        </Link>          
          <p className="text-base-content/70 mt-6">
            Join with us
          </p>
        </div>
      </section>
    </div>
  );
}