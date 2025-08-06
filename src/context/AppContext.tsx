"use client";

import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import { User as FirebaseUser } from 'firebase/auth';
import type { UserProfile, MatchRequest, Match, Message } from '@/lib/types';

// Helper function to check for unread messages for the current profile
const getUnreadMessagesFlag = (state: AppState): boolean => {
    if (!state.profile) return false;
…
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
