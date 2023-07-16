import * as SC from "./AllMoviesStyled"
import { navIcons } from "utilities/navIcons"
import {ReactComponent as BookmarkSvg} from "../../assets/icons/Bookmark.svg"

interface ItemProps {
    title: string,
    thumbnail: { regular: { small: string } } | undefined,
    year: number,
    category: string,
    rating: string,
    isBookmarked: boolean
}



const MovieIcon = navIcons.moviesMob;
const TvIcon = navIcons.tvMob

const AllMoviesItem: React.FC<ItemProps> = ({ title, thumbnail, year, category, rating, isBookmarked }) => {
    const thumbnailMobile = thumbnail?.regular?.small ?? ""


    return (<li>
        <SC.BookmarkContainer>
            <SC.BookmarkButton type="button">
                <BookmarkSvg width={12} height={14} stroke="white" fill={isBookmarked ? "white" : "none"} style={{ strokeWidth: "2px", opacity:"1" }} />
            </SC.BookmarkButton>
            <SC.AllMoviesItemImage src={thumbnailMobile} alt="" />
        </SC.BookmarkContainer>
        <SC.AllMoviesInfoContainer>
            <p>{year}</p>
            <SC.Circle></SC.Circle>
            {category === "Movie" ? <MovieIcon width={12} fill="#979797" /> : <TvIcon width={12} fill="#979797" />}
            <p>{category}</p>
            <SC.Circle></SC.Circle>
            <p>{rating}</p>
        </SC.AllMoviesInfoContainer>
        <SC.MovieTitle>{title}</SC.MovieTitle>
    </li>);
}

export default AllMoviesItem;