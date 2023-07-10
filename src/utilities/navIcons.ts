import { ReactComponent as HomeSvg } from "assets/icons/home.svg";
import { ReactComponent as MovieSvg } from "assets/icons/movies.svg";
import { ReactComponent as TvSvg } from "assets/icons/tv.svg";
import { ReactComponent as BookmarkSvg } from "assets/icons/Bookmark.svg";

export const navIcons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  homeMob: HomeSvg,
  moviesMob: MovieSvg,
  tvMob: TvSvg,
  bookmarkedMob: BookmarkSvg,
};