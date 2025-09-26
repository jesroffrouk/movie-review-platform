
export default function Footer(){
    return(
      <>
   <footer className="text-white border-t border-slate-700/50">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-center items-center text-sm text-slate-400">        
          <div className="flex items-center space-x-1">
            <span>Created by</span>
            <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Jesroff
            </span>
            <span className="text-blue-400">💙</span>
          </div>
        </div>
      </div>
    </footer>
      </>
    )
  }