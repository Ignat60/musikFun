import { MainPage } from "@/app/ui/MainPage/MainPage";
import { ProfilePage } from "@/features/auth/ui/profilePage/ProfilePage";
import { PlaylistsPage } from "@/features/playlist/ui/PlaylistsPage";
import { TracksPage } from "@/features/tracks/ui/TracksPage";
import { Route, Routes } from "react-router-dom";
// import { PageNotFound } from "../components";
import { PageNotFound } from "@/common/components";

export const Path = {
  Main: "/",
  Playlist: "/playlist",
  Tracks: "/tracks",
  Profile: "/profile",
  NotFound: "*",
} as const;

export const Routing = () => (
  <Routes>
    <Route path={Path.Main} element={<MainPage />} />
    <Route path={Path.Playlist} element={<PlaylistsPage />} />
    <Route path={Path.Tracks} element={<TracksPage />} />
    <Route path={Path.Profile} element={<ProfilePage />} />
    <Route path={Path.NotFound} element={<PageNotFound />} />
  </Routes>
);
