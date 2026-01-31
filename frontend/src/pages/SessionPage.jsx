import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useEndSession, useJoinSession, useSessionById } from "../hooks/useSessions";
import { PROBLEMS } from "../data/problems";
import { executeCode } from "../lib/piston";
import Navbar from "../components/Navbar";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { getDifficultyBadgeClass } from "../lib/utils";
import { Loader2Icon, LogOutIcon, PhoneOffIcon } from "lucide-react";
import CodeEditorPanel from "../components/CodeEditorPanel";
import OutputPanel from "../components/OutputPanel";
import useStreamClient from "../hooks/useStreamClient";
import { StreamCall, StreamVideo } from "@stream-io/video-react-sdk";
import VideoCallUI from "../components/VideoCallUI";
function SessionPage() {
const navigate = useNavigate();
 const { id } = useParams();
 const { user } = useUser();
   const [output, setOutput] = useState(null);
     const [isRunning, setIsRunning] = useState(false);
  const { data: sessionData, isLoading: loadingSession, refetch } = useSessionById(id);
   const joinSessionMutation = useJoinSession();
    const endSessionMutation = useEndSession();
     const session = sessionData?.session;
      const isHost = session?.host?.clerkId === user?.id;
      
      
const { call, channel, chatClient, isInitializingCall, streamClient } = useStreamClient(
   session,
    loadingSession,
    isHost,
    isParticipant
  );
 // find the problem data based on session problem title
  const problemData = session?.problem
   ? Object.values(PROBLEMS).find((p) => p.title === session.problem)
    : null;
      const [selectedLanguage, setSelectedLanguage] = useState("javascript");
      const [code, setCode] = useState(problemData?.starterCode?.[selectedLanguage] || "");
       // auto-join session if user is not already a participant and not the host
  useEffect(() => {
      if (!session || !user || loadingSession) return;
        if (isHost || isParticipant) return;
         joinSessionMutation.mutate(id, { onSuccess: refetch });
           // remove the joinSessionMutation, refetch from dependencies to avoid infinite loop
  }, [session, user, loadingSession, isHost, isParticipant, id]);

// redirect the "participant" when session ends
  useEffect(() => {
    if (!session || loadingSession) return;
    
    if (session.status === "completed") navigate("/dashboard");
  }, [session, loadingSession, navigate]);
