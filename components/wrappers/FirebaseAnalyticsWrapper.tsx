"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { useFirebaseAnalytics } from "@/hooks/useAnalytics";

export default function AnalyticsWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { logCustomEvent } = useFirebaseAnalytics();

  useEffect(() => {
    if (pathname) {
      logCustomEvent("page_view", {
        page_path: pathname,
        page_search: searchParams.toString(),
      });
    }
  }, [pathname, searchParams, logCustomEvent]);

  return <>{children}</>;
}
