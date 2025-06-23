'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import AppErrorBoundary from './ErrorBoundary';

function EztowModel() {
  const { scene } = useGLTF('/eztow.glb');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <primitive 
      object={scene} 
      scale={[1, 1, 1]}
      position={[0, -0.8, 0]}
      rotation={[0, Math.PI / 4, 0]}
    />
  );
}

function LoadingFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#37b0a6] mx-auto mb-2"></div>
        <p className="text-sm text-gray-500">Chargement 3D...</p>
      </div>
    </div>
  );
}

function ErrorFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
      <div className="text-center">
        <p className="text-sm text-gray-500">Erreur de chargement 3D</p>
      </div>
    </div>
  );
}

export default function Eztow3D() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <LoadingFallback />;
  }

  return (
    <AppErrorBoundary>
      <Suspense fallback={<LoadingFallback />}>
        <div className="w-full h-full relative">
          <Canvas
            camera={{ position: [2.5, 1.2, 2.5], fov: 48 }}
            style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}
            gl={{ antialias: true, alpha: true }}
            onWheel={(e) => e.stopPropagation()}
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            
            <EztowModel />
            
            <OrbitControls 
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              autoRotate={true}
              autoRotateSpeed={0.9}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 6}
            />
          </Canvas>
          
          {/* Instructions overlay */}
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-20 text-white text-xs px-2 py-1 rounded text-[10px]">
            Cliquez et faites glisser pour faire tourner la caméra
          </div>
        </div>
      </Suspense>
    </AppErrorBoundary>
  );
} 