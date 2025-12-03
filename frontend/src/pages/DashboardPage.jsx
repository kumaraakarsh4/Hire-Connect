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
 const {data:recentSessionData, isLoading:loadingRecentSessions}= useMyRecentSessions()

  return (
    <div>DashboardPage</div>
  )
}

export default DashboardPage