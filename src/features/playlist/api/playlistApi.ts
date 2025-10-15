import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// https://musicfun.it-incubator.app/api/1.0/
export const playlistsApi = createApi({
  reducerPath: "playlistsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    headers: {
      "API-KEY": import.meta.env.VITE_API_KEY,
    },
  }),
  endpoints: (build) => {
    return {
      fetchPlaylists: build.query<string, string>({
        query: () => {
          return {
            method: "get",
            url: "playlists",
          };
        },
      }),
    };
  },
});
