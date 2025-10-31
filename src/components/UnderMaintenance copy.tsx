import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import maintenanceAnimation from '../assets/Web under Maintenance.json';

type UnderMaintenanceProps = {
  redirectTo?: string;
  seconds?: number;
  title?: string;
  message?: string;
};

const UnderMaintenance: React.FC<UnderMaintenanceProps> = ({
  redirectTo = '/',
  seconds = 5,
  title = 'Page is under maintenance',
  message = "We're improving this experience. You'll be redirected shortly.",
}) => {
  const navigate = useNavigate();
  const animationRef = useRef<HTMLDivElement | null>(null);
  const lottieInstance = useRef<any | null>(null);

  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate(redirectTo);
    }, seconds * 1000);
    return () => clearTimeout(timerId);
  }, [navigate, redirectTo, seconds]);

  useEffect(() => {
    let cancelled = false;
    const loadLottieFromCDN = (): Promise<any> => {
      if ((window as any).lottie) return Promise.resolve((window as any).lottie);
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js';
        script.async = true;
        script.onload = () => resolve((window as any).lottie);
        script.onerror = () => reject(new Error('Failed to load lottie-web'));
        document.head.appendChild(script);
      });
    };

    (async () => {
      try {
        const lottie = await loadLottieFromCDN();
        if (cancelled || !animationRef.current) return;
        lottieInstance.current = lottie.loadAnimation({
          container: animationRef.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: maintenanceAnimation as unknown as Record<string, unknown>,
        });
      } catch {
        // no-op: show fallback emoji if lottie fails
      }
    })();
    return () => {
      cancelled = true;
      if (lottieInstance.current) {
        lottieInstance.current.destroy();
        lottieInstance.current = null;
      }
    };
  }, []);

  return (
    <main className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-12 bg-white">
      <div className="text-center max-w-xl">
        <div ref={animationRef} className="mx-auto mb-6 h-72 w-72 md:h-80 md:w-80 lg:h-96 lg:w-96"></div>
        <h1 className="text-3xl font-bold mb-3">{title}</h1>
        <p className="text-gray-600 mb-6">{message}</p>
        <p className="text-sm text-gray-500">Redirecting in {seconds} seconds…</p>
      </div>
    </main>
  );
};

export default UnderMaintenance;


