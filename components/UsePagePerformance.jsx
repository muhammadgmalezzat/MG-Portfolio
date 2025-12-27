import { useEffect } from "react";

const usePagePerformance = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Measure page load time
    window.addEventListener("load", () => {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;

      if (process.env.NODE_ENV === "development") {
        console.log(`Page Load Time: ${pageLoadTime}ms`);
      }
    });

    // Report Web Vitals
    if ("PerformanceObserver" in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (process.env.NODE_ENV === "development") {
            console.log(`${entry.name}: ${entry.value}ms`);
          }
        });
      });

      observer.observe({ entryTypes: ["paint", "largest-contentful-paint"] });

      return () => observer.disconnect();
    }
  }, []);
};

export default usePagePerformance;

// Usage in _app.js or index.js:
// import usePagePerformance from '../hooks/usePagePerformance';
//
// function MyApp({ Component, pageProps }) {
//   usePagePerformance();
//   return <Component {...pageProps} />;
// }
