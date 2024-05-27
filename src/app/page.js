// src/app/page.js
"use client";
import { useState, useEffect } from 'react';
import SelectionModal from "@/components/SelectionModal";
import '../components/Loader.css'

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          setLoading(false);
        }
        return newProgress;
      });
    }, 500); // Change the progress interval time as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen h-auto w-full">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="loader">
            <svg className="circular" viewBox="25 25 50 50">
              <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="4" strokeMiterlimit="10" />
            </svg>
            <span className='text-center flex'>{progress}%</span>
          </div>
        </div>
      ) : (
        <SelectionModal />
      )}
    </main>
  );
}