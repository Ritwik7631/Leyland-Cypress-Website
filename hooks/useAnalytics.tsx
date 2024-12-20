'use client'
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { analytics } from '@/firebase/client';
import { logEvent } from 'firebase/analytics';

export function useFirebaseAnalytics() {

  const logCustomEvent = (eventName: string, eventParams?: object) => {
    if (analytics) {
      logEvent(analytics, eventName, eventParams);
    }
  };

  return { logCustomEvent };
}