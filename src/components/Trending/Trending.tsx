import Carousel from 'react-bootstrap/Carousel';

import * as SC from "./TrendingStyled"

import { ReactComponent as BookmarkSvg } from "../../assets/icons/Bookmark.svg"
import { navIcons } from "utilities/navIcons"
import { DataArray } from 'interfaces/interfaces';
import { MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeBookmarked } from 'redux/auth/operations';
import { useMediaQuery } from 'usehooks-ts';

interface MoviesProps {
    movies?: DataArray[];
    error?: string | null;
}


const MovieIcon = navIcons.moviesMob;
const TvIcon = navIcons.tvMob

const Trending = ({ movies }: MoviesProps): JSX.Element => {
    const [movieBookmarked, setMovieBookmarked] = useState<boolean>(false)
    const dispatch = useDispatch()

    const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1439px")
    const isDesktop = useMediaQuery("(min-width: 1440px)")


    const handleBookmark = (evt: MouseEvent<HTMLButtonElement>): void => {

        const { title }: { title: string } = evt.currentTarget;


        dispatch(changeBookmarked({ title: title }));

        setMovieBookmarked(!movieBookmarked)
    }

    return (<Carousel data-bs-theme="dark" style={ { marginBottom: isTablet ? "39px" : isDesktop ? "40px" : "24px", marginTop: isTablet ? "25px": isDesktop ? "25px" : "16px" }}>
        {!!movies ? movies.map(({ _id, title, thumbnail, year, category, rating }) => {
            const thumbnailMobile = thumbnail?.trending?.small ?? ""
            const thumbnailDesktopTablet = thumbnail?.trending?.large ?? ""
            return (
                <SC.ItemStyled key={_id}>
                    <SC.BookmarkButton onClick={handleBookmark} title={title}>
                        <BookmarkSvg width={12} height={14} stroke="white" fill={movieBookmarked ? "white" : "none"} style={{ strokeWidth: "2px", opacity: "1" }} />
                    </SC.BookmarkButton>
                    <SC.ImageTrending
                        className="d-block w-100"
                        src={isTablet ? thumbnailDesktopTablet : isDesktop ? thumbnailDesktopTablet : thumbnailMobile}
                        alt={title}
                    />

                    <SC.CaptionStyled>

                        <div>
                            <SC.ContentContainer>
                                <p>{year}</p>
                                <SC.Circle></SC.Circle>
                                {category === "Movie" ? <MovieIcon width={12} fill="#fff" /> : <TvIcon width={12} fill="#fff" />}
                                <p>{category}</p>
                                <SC.Circle></SC.Circle>

                                <div>{rating}</div>
                            </SC.ContentContainer>
                            <SC.Title>{title}</SC.Title>
                        </div>
                    </SC.CaptionStyled>
                </SC.ItemStyled>
            )
        }
        ) : null
        }
    </Carousel>);
}

export default Trending;

