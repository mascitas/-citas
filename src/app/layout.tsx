
"use client";

import React from 'react';
import MainLayout from '@/components/shared/MainLayout';
import { useAppContext } from '@/context/AppContext';

export default function Layout({ children }: { children: React.ReactNode }) {
    const { state } = useAppContext();

    // While loading, show a spinner.
    if (state.isLoading) {
         return (
          <div className="flex h-screen w-full items-center justify-center bg-background">
            <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary"></div>
                <p className="text-muted-foreground">Cargando tu experiencia...</p>
            </div>
          </div>
        );
    }
    
    // If user and profile exist, show the main application layout
    if(state.user && state.profile) {
        return <MainLayout>{children}</MainLayout>;
    }

    // Render children directly without complex logic for now
    return <>{children}</>;
}
