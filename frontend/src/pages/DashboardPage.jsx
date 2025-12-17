import React, { useState } from 'react'
import {useNavigate} from 'react-router';
import {useUser} from '@clerk/clerk-react';
import { useActiveSessions, useCreateSession, useMyRecentSessions } from '../hooks/useSession';

function DashboardPage() {
  const navigate = useNavigate()
  const {user} = useUser()
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [roomConfig, setRoomConfig] = useState({ problem: "", difficulty: "" });
 const useCreateSessionMutation= useCreateSession()
 const {data:activeSessionsData,isLoading:loadingActiveSessions} = useActiveSessions();
 const {data:recentSessionData, isLoading:loadingRecentSessions }= useMyRecentSessions()
 
  const handleCreateRoom = () => {
    if (!roomConfig.problem || !roomConfig.difficulty) return;
    
    createSessionMutation.mutate(
      {
        problem: roomConfig.problem,
        difficulty: roomConfig.difficulty.toLowerCase(),
      },
      {
        onSuccess: (data) => {
          setShowCreateModal(false);
          navigate(`/session/${data.session._id}`);
        },
      }
    );
  };

  const activeSessions = activeSessionsData?.sessions || [];
  const recentSessions = recentSessionsData?.sessions || [];
  
  const handleCreateRoom = () => {
    if (!roomConfig.problem || !roomConfig.difficulty) return;

      createSessionMutation.mutate(
      {
        problem: roomConfig.problem,
        difficulty: roomConfig.difficulty.toLowerCase(),
      },
      {
        
        onSuccess: (data) => {
          setShowCreateModal(false);
          navigate(`/session/${data.session._id}`);
        },
      }
    );
  };
    const activeSessions = activeSessionsData?.sessions || [];
      const recentSessions = recentSessionsData?.sessions || [];

       const isUserInSession = (session) => {
    if (!user.id) return false;
  
    return session.host?.clerkId === user.id || session.participant?.clerkId === user.id;
  };



  return (
     <>
      <div className="min-h-screen bg-base-300">
        <Navbar />
        <WelcomeSection onCreateSession={() => setShowCreateModal(true)} />

             {/* Grid layout */}
        <div className="container mx-auto px-6 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <StatsCards
              activeSessionsCount={activeSessions.length}
              recentSessionsCount={recentSessions.length}
            />
  )
}

export default DashboardPage