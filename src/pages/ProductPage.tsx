import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductPage = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timerId);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-16 bg-gray-50">
        <div className="text-center max-w-xl">
          <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center text-3xl">⚠️</div>
          <h1 className="text-3xl font-bold mb-3">Product page is under maintenance</h1>
          <p className="text-gray-600 mb-6">We're improving this experience. You'll be redirected to the home page shortly.</p>
          <p className="text-sm text-gray-500">Redirecting in 5 seconds…</p>
        </div>
      </main>
      <Footer />

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowModal(false)} />
          <div className="relative z-10 w-full max-w-md mx-auto rounded-lg bg-white shadow-xl p-6">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 h-10 w-10 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center text-2xl">⚠️</div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold">Under maintenance</h2>
                <p className="mt-1 text-gray-600">The product page is currently undergoing updates. You will be redirected to the home page in 5 seconds.</p>
              </div>
            </div>
            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;

