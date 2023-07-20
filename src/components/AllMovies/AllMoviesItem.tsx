import { MouseEvent, useState } from 'react';

import * as SC from "./AllMoviesStyled"
import { navIcons } from "utilities/navIcons"
import {ReactComponent as BookmarkSvg} from "../../assets/icons/Bookmark.svg"
import { useDispatch } from 'react-redux';
import { changeBookmarked } from 'redux/auth/operations';
import { useMediaQuery } from 'usehooks-ts';

interface ItemProps {
    title: string,
    thumbnail: { regular: { small: string, medium: string} } | undefined,
    year: number,
    category: string,
    rating: string,
    isBookmarked: boolean
}


const MovieIcon = navIcons.moviesMob;
const TvIcon = navIcons.tvMob

const AllMoviesItem: React.FC<ItemProps> = ({ title, thumbnail, year, category, rating, isBookmarked }) => {
    const [iconBookmarked, setIconBookmarked] = useState(isBookmarked)

    const dispatch = useDispatch()
      
    const isTablet = useMediaQuery("(min-width:768px)")

    const thumbnailMobile = thumbnail?.regular?.small ?? ""

    const thumbnailTablet = thumbnail?.regular?.medium ?? ""


    const handleBookmark = (evt: MouseEvent<HTMLButtonElement>): void => {

        const { title }: { title: string } = evt.currentTarget;

        
        dispatch(changeBookmarked({ title: title }));
        
        setIconBookmarked(!iconBookmarked)
    }
    return (<li>
        <SC.BookmarkContainer>
            <SC.BookmarkButton type="button" onClick={handleBookmark} title={title}>
                <BookmarkSvg width={12} height={14} stroke="white" fill={iconBookmarked ? "white" : "none"} style={{ strokeWidth: "2px", opacity:"1" }} />
            </SC.BookmarkButton>
            <SC.AllMoviesItemImage src={isTablet ? thumbnailTablet : thumbnailMobile} alt={title} />
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