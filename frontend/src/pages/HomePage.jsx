import React, { useState, useEffect } from 'react';
import { ArrowRightIcon, SparklesIcon, ZapIcon, CheckIcon, VideoIcon, Code2Icon, UsersIcon } from 'lucide-react';
import { SignInButton } from '@clerk/clerk-react';

// Main application component
function App() {
    // 1. STATE: Track visibility and previous scroll position
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Dummy function for navigation/auth buttons, replacing external libs like react-router Link and Clerk SignInButton
    const handleAction = (action) => {
        console.log(`Action triggered: ${action}`);
        // In a real application, replace this with your actual routing/authentication logic
    };

    // 2. EFFECT: Handle scroll logic
    useEffect(() => {
        let hideTimer;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Clear any existing timer when scrolling starts/stops
            clearTimeout(hideTimer);

            if (currentScrollY > lastScrollY && currentScrollY > 100) { 
                // Scrolling Down & past the initial threshold (100px)
                if (isVisible) {
                    // Start timer to hide after 2 seconds
                    hideTimer = setTimeout(() => {
                        setIsVisible(false); // Hide the navbar after 2 seconds
                    }, 2000); // 2-second delay
                }
            } else if (currentScrollY < lastScrollY) {
                // Scrolling Up
                setIsVisible(true); // Show the navbar immediately
            } else if (currentScrollY <= 100) {
                // At the very top of the page
                setIsVisible(true); // Always visible at the top
            }

            // Update the last scroll position for the next check
            setLastScrollY(currentScrollY);
        };

        // Attach the scroll listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup: remove listener and clear timer when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(hideTimer);
        };
    }, [lastScrollY, isVisible]); 

    return (
        <div className="bg-gradient-to-br from-base-100 via-base-200 to-base-300 min-h-screen">
            {/* Custom CSS for the floating animation */}
            <style jsx="true">
                {`
                @keyframes float {
                    0% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                        /* Subtle vertical lift and rotation for a "hovering" effect */
                        transform: translateY(-10px) rotate(0.5deg);
                    }
                    100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                }

                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
                `}
            </style>

            {/* Navigation - UPDATED with opacity transition */}
            <nav className={`
                bg-base-100/80 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50 shadow-lg 
                transform transition-all duration-500 ease-in-out 
                ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} 
            `}>
                <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
                    {/* Logo/Brand Link */}
                    <a
                        href="#" // Replaced Link to "/" with an anchor tag
                        className='flex items-center gap-3 hover:scale-105 transition-transform duration-200'
                        onClick={() => handleAction('Home Navigation')}
                    >
                        <div className='size-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg'>
                            <SparklesIcon className='size-6 text-white' />
                        </div>
                        <div className='flex flex-col'>
                            <span className='font-black text-xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono tracking-wider '>
                                Hire Connect
                            </span>
                            <span className='text-xs text-base-content/60 font-medium -mt-1'>Code Together</span>
                        </div>
                    </a>

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
            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* LEFT CONTENT */}
                    <div className="space-y-8">
                        <div className="badge badge-primary badge-lg">
                            <ZapIcon className="size-4" />
                            Real-time Collaboration
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                                Code Together,
                            </span>
                            <br />
                            <span className="text-base-content">Learn Together</span>
                        </h1>

                        <p className="text-xl text-base-content/70 leading-relaxed max-w-xl">
                            The ultimate platform for collaborative coding interviews and pair programming.
                            Connect face-to-face, code in real-time, and ace your technical interviews.
                        </p>

                        {/* FEATURE PILLS */}
                        <div className="flex flex-wrap gap-3">
                            <div className="badge badge-lg badge-outline">
                                <CheckIcon className="size-4 text-success" />
                                Live Video Chat
                            </div>
                            <div className="badge badge-lg badge-outline">
                                <CheckIcon className="size-4 text-success" />
                                Code Editor
                            </div>
                            <div className="badge badge-lg badge-outline">
                                <CheckIcon className="size-4 text-success" />
                                Multi-Language
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <SignInButton mode='modal'>
                            <button className="btn btn-primary btn-lg" onClick={() => handleAction('Start Coding Now',SignInButton)}>
                                Start Coding Now
                                <ArrowRightIcon className="size-5" />
                            </button>
                            </SignInButton>

                            <button className="btn btn-outline btn-lg" onClick={() => handleAction('Watch Demo')}>
                                <VideoIcon className="size-5" />
                                Watch Demo
                            </button>
                        </div>

                        {/* STATS */}
                        <div className="stats stats-vertical lg:stats-horizontal bg-base-100 shadow-lg">
                            <div className="stat">
                                <div className="stat-value text-primary">10K+</div>
                                <div className="stat-title">Active Users</div>
                            </div>
                            <div className="stat">
                                <div className="stat-value text-secondary">50K+</div>
                                <div className="stat-title">Sessions</div>
                            </div>
                            <div className="stat">
                                <div className="stat-value text-accent">99.9%</div>
                                <div className="stat-title">Uptime</div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT IMAGE - ADDED FLOATING MOTION */}
                    <img
                        src="hero.png" // Updated to use the uploaded file name
                        alt="CodeCollab Platform"
                        className="w-full h-auto rounded-3xl shadow-2xl border-4 border-base-100 transition-transform duration-500 animate-float"
                    />
                </div>
            </div>

            {/* FEATURES SECTION */}
            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">
                        Everything You Need to <span className="text-primary font-mono">Succeed</span>
                    </h2>
                    <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                        Powerful features designed to make your coding interviews seamless and productive
                    </p>
                </div>

                {/* FEATURES GRID */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body items-center text-center">
                            <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                                <VideoIcon className="size-8 text-primary" />
                            </div>
                            <h3 className="card-title">HD Video Call</h3>
                            <p className="text-base-content/70">
                                Crystal clear video and audio for seamless communication during interviews
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body items-center text-center">
                            <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                                <Code2Icon className="size-8 text-primary" />
                            </div>
                            <h3 className="card-title">Live Code Editor</h3>
                            <p className="text-base-content/70">
                                Collaborate in real-time with syntax highlighting and multiple language support
                            </p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body items-center text-center">
                            <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                                <UsersIcon className="size-8 text-primary" />
                            </div>
                            <h3 className="card-title">Easy Collaboration</h3>
                            <p className="text-base-content/70">
                                Share your screen, discuss solutions, and learn from each other in real-time
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;