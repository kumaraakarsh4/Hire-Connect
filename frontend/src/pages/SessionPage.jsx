import React from 'react'
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useEndSession, useJoinSession, useSessionById } from "../hooks/useSessions";
import { PROBLEMS } from "../data/problems";

function SessionPage() {
  return (
    <div>SessionPage</div>
  )
}

export default SessionPage