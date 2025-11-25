import { SignedIn, SignedOut, SignInButton, UserButton, SignOutButton } from '@clerk/clerk-react'


function App() {
  
  return (
    <>
      <h1>Welcome to the server! </h1>

      {/* 1. SHOW WHEN SIGNED OUT */}
      <SignedOut>
        {/* The built-in Clerk component to open the sign-in modal */}
        <SignInButton mode='modal'> 
            {/* You can wrap a custom button/text with SignInButton */}
            <button className='ankhdh'>Sign in please</button>
        </SignInButton>
        {/* The SignIn component below is usually unnecessary unless you want the full-page sign-in form */}
      </SignedOut>

      {/* 2. SHOW WHEN SIGNED IN */}
      <SignedIn>
        {/* The standard component to display user profile and Sign Out */}
        <UserButton /> 
      </SignedIn>
      
    </>
  )
}

export default App