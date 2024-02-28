import useSWR from "swr";

import { TContentMeta } from "../types";
import fetcher from "../utils/fetcher";

export default function useContentMeta() {
  const {
    data,
    error: isError,
    isLoading,
  } = useSWR<Record<string, TContentMeta>>("/api/content", fetcher, {
    fallbackData: {},
  });

  return {
    isLoading,
    isError,
    data,
  };
}
