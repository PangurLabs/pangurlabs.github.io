// The app screens the words files name by key (image: today). Fresh pictures go in assets/screens/.
import today from "./screens/today.jpg";
import matter from "./screens/matter.jpg";
import filing from "./screens/filing.jpg";
import citations from "./screens/citations.jpg";
import answer from "./screens/answer.jpg";
import time from "./screens/time.jpg";

export const screens = { today, matter, filing, citations, answer, time };
export type ScreenName = keyof typeof screens;
