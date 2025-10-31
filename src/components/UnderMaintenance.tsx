import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type UnderMaintenanceProps = {
  redirectTo?: string;
  seconds?: number;
  title?: string;
  message?: string;
  /** Render to fill the entire viewport height */
  fullPage?: boolean;
  /** Show an additional dismissible modal overlay */
  showModal?: boolean;
  /** Tailwind classes to size the main Lottie animation container */
  animationSizeClass?: string;
  /** Tailwind classes to size the modal Lottie animation container */
  modalAnimationSizeClass?: string;
};

const UnderMaintenance: React.FC<UnderMaintenanceProps> = ({
  redirectTo = '/',
  seconds = 5,
  title = 'Page is under maintenance',
  message = "We're improving this experience. You'll be redirected shortly.",
  fullPage = true,
  showModal = false,
  animationSizeClass = 'h-94 w-94',
  modalAnimationSizeClass = 'h-16 w-16',
}) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(showModal);
  const [remainingSeconds, setRemainingSeconds] = useState(seconds);
  const animationContainerRef = useRef<HTMLDivElement | null>(null);
  const modalAnimationContainerRef = useRef<HTMLDivElement | null>(null);
  const animationJsonUrl = new URL('../assets/Web under Maintenance.json', import.meta.url).href;

  useEffect(() => {
    if (seconds <= 0) return; // countdown/redirect disabled

    const timeoutId = setTimeout(() => {
      navigate(redirectTo);
    }, seconds * 1000);

    const intervalId = setInterval(() => {
      setRemainingSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [navigate, redirectTo, seconds]);

  // Initialize main Lottie animation if lottie is available
  useEffect(() => {
    const lottieGlobal = (window as unknown as { lottie?: any }).lottie;
    if (!lottieGlobal) return;
    if (!animationContainerRef.current) return;

    const anim = lottieGlobal.loadAnimation({
      container: animationContainerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: animationJsonUrl,
    });

    return () => {
      try { anim.destroy(); } catch {}
    };
  }, [animationJsonUrl]);

  // Initialize modal Lottie animation when modal opens
  useEffect(() => {
    if (!isModalOpen) return;
    const lottieGlobal = (window as unknown as { lottie?: any }).lottie;
    if (!lottieGlobal) return;
    if (!modalAnimationContainerRef.current) return;

    const anim = lottieGlobal.loadAnimation({
      container: modalAnimationContainerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: animationJsonUrl,
    });

    return () => {
      try { anim.destroy(); } catch {}
    };
  }, [animationJsonUrl, isModalOpen]);

  return (
    <main className={`${fullPage ? 'min-h-screen' : ''} flex-1 flex items-center justify-center px-4 py-16 bg-gray-50`}>
      <div className="text-center max-w-xl">
        <div className={`mx-auto mb-6 ${animationSizeClass} flex items-center justify-center`}>
          <div ref={animationContainerRef} className={animationSizeClass} aria-hidden="true" />
        </div>
        <h1 className="text-3xl font-bold mb-3">{title}</h1>
        <p className="text-gray-600 mb-6">{message}</p>
        {seconds > 0 && (
          <p className="text-sm text-gray-500">Redirecting in {remainingSeconds} second{remainingSeconds === 1 ? '' : 's'}…</p>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsModalOpen(false)} />
          <div className="relative z-10 w-full max-w-md mx-auto rounded-lg bg-white shadow-xl p-6">
            <div className="flex items-start gap-3">
              <div className={`mt-0.5 ${modalAnimationSizeClass} flex items-center justify-center`}>
                <div ref={modalAnimationContainerRef} className={modalAnimationSizeClass} aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold">Under maintenance</h2>
                <p className="mt-1 text-gray-600">
                  {title}. {message}
                  {seconds > 0 && (
                    <> You will be redirected in {remainingSeconds} second{remainingSeconds === 1 ? '' : 's'}.</>
                  )}
                </p>
              </div>
            </div>
            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default UnderMaintenance;


