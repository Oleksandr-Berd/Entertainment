import Carousel from 'react-bootstrap/Carousel';

import * as SC from "./TrendingStyled"

import { ReactComponent as BookmarkSvg } from "../../assets/icons/Bookmark.svg"
import { navIcons } from "utilities/navIcons"
import { DataArray } from 'interfaces/interfaces';
import { MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeBookmarked } from 'redux/auth/operations';

interface MoviesProps {
    movies?: DataArray[];
    error?: string | null;
}


const MovieIcon = navIcons.moviesMob;
const TvIcon = navIcons.tvMob

const Trending = ({ movies }: MoviesProps): JSX.Element => {
    const [movieBookmarked, setMovieBookmarked] = useState<boolean>(false)
    const dispatch = useDispatch()

    const handleBookmark = (evt: MouseEvent<HTMLButtonElement>): void => {

        const { title }: { title: any } = evt.currentTarget;


        dispatch(changeBookmarked({ title: title }));
        console.log(evt.currentTarget.title);

        setMovieBookmarked(!movieBookmarked)
    }

    return (<Carousel data-bs-theme="dark" style={{ marginBottom: "24px", marginTop: "16px" }}>
        {!!movies ? movies.map(({ _id, title, thumbnail, year, category, rating, isBookmarked }) => {
            const thumbnailMobile = thumbnail?.trending?.small ?? ""
            return (
                <SC.ItemStyled key={_id}>
                    <SC.BookmarkButton onClick={handleBookmark} title={title}>
                        <BookmarkSvg width={12} height={14} stroke="white" fill={movieBookmarked ? "white" : "none"} style={{ strokeWidth: "2px", opacity: "1" }} />
                    </SC.BookmarkButton>
                    <SC.ImageTrending
                        className="d-block w-100"
                        src={thumbnailMobile}
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

