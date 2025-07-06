'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLoading } from '@/components/LoadingContext';
import PageLoader from './PageLoader';

const AppLoader = () => {
  const { isLoading } = useLoading();
  const [showInitialLoader, setShowInitialLoader] = useState(true);

  useEffect(() => {
    // Hide initial loader after 2 seconds
    const timer = setTimeout(() => {
      setShowInitialLoader(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {(showInitialLoader || isLoading) && <PageLoader />}
    </AnimatePresence>
  );
};

export default AppLoader;