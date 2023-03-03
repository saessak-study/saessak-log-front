import { useEffect, useRef } from 'react';

interface props {
  hasMore: boolean;
  loadData: () => void;
  isLoading: boolean;
}

const useInfiniteScroll = ({ hasMore, loadData, isLoading }: props) => {
  const target = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };
    const intersectionHandler = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasMore && !isLoading) {
          loadData();
        }
      });
    };
    const observer = new IntersectionObserver(intersectionHandler, options);
    if (target.current) {
      observer.observe(target.current);
    }
    return () => observer && observer.disconnect();
  }, [hasMore, isLoading, loadData]);

  return target;
};

export default useInfiniteScroll;
