import {Link} from 'react-router';
import {ArrowRightIcon, SparklesIcon} from 'lucide-react';
import {SignInButton} from '@clerk/clerk-react';
function HomePage() {
  return (
    <div className="bg-gradient-to-br from-base-100 via-base-200 to-base-300">
       <nav className="bg-base-100/80 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50 shadow-lg">
       <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
        <Link to={"/"}
        className='flex items-center gap-3 hover:scale-105 transition-transform duration-200'
        >
            <div className='size-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg'>
                <SparklesIcon className='size-6 text-white'/>
            </div>
            <div className='flex flex-col'>
                <span className='font-black text-xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono tracking-wider  '>
             Hire Connect
                </span>
                <span className='text-xs text-base-content/60 font-medium -mt-1'>Code Together</span>
            </div>
        </Link>
        {/* Authentication button */}
        <SignInButton mode='modal'>
            <button className='group px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2'>
                <span>Get Started</span>
                <ArrowRightIcon className='size-4 group-hover:translate-x-0.5 transition-transform '/>

            </button>
        </SignInButton>
        
       </div>

       </nav>

      {/* Hero Section */}
      
    </div>
  );
}

export default HomePage