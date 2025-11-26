import { SignedIn, SignedOut, SignInButton, UserButton, SignOutButton,useUser } from '@clerk/clerk-react'
import { Routes ,Route, Navigate } from 'react-router';

import HomePage from './pages/HomePage';
import ProblemsPage from './pages/ProblemsPage';
import { Toaster } from 'react-hot-toast';

function App() {
  const {isSignedIn}=useUser();
  
  return (
    <>
    <Routes>
     
     <Route path="/" element={<HomePage/>}/>
    
       <Route path="/problem" element={isSignedIn ? <ProblemsPage/>: <Navigate to={"/"}/> }/>

      
      
    </Routes>
    <Toaster toastOptions={{duration:3000}}/>
    </>
  )
}

export default App