import * as SC from "./AllMoviesStyled"
import { navIcons } from "utilities/navIcons"

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

const AllMoviesItem = ({ title, thumbnail, year, category, rating, isBookmarked }: ItemProps): JSX.Element => {
    const thumbnailMobile = thumbnail?.regular?.small ?? ""


    return (<li>
        <SC.AllMoviesItemImage src={thumbnailMobile} alt="" />
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