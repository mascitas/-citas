"use client";

import { Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-background to-secondary p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <div className="flex justify-center items-center gap-2 mb-2">
            <Heart className="w-10 h-10 text-primary" />
            <CardTitle className="text-4xl font-headline text-primary">+citas</CardTitle>
          </div>
          <CardDescription className="text-lg">Conexiones reales. ¿Empezamos?</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center p-8">
            <h2 className="text-2xl font-semibold">Sitio en construcción</h2>
            <p className="text-muted-foreground">Estamos trabajando para solucionar un problema de despliegue. ¡Gracias por tu paciencia!</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
