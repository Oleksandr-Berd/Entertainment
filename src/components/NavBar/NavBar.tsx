import React from "react";

import navData from "dataBase/nav.json";

import * as SC from "./NavBarStyled"

import { ReactComponent as HomeSvg } from 'assets/icons/home.svg'
import { ReactComponent as MovieSvg } from 'assets/icons/movies.svg'
import { ReactComponent as TvSvg } from 'assets/icons/tv.svg'
import { ReactComponent as BookmarkSvg } from 'assets/icons/Bookmark.svg'
import { useLocation, useParams } from "react-router";

interface Navigation {
    id: number;
    name: string;
    icon: string;
};


const navIcons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    homeMob: HomeSvg,
    moviesMob: MovieSvg,
    tvMob: TvSvg,
    bookmarkedMob: BookmarkSvg,
};

const Navbar: React.FC = () => {
    const location = useLocation()

    console.log(location);

    return (
        <SC.NavBar>
            {navData.map(({ id, name, icon }: Navigation) => {
                const IconComponent = navIcons[icon];
                return (
                    <SC.Item key={id}>
                        <SC.Link to={name}>
                            <IconComponent fill={location.pathname !== name ? "#5A698F" : "#fff"} width={16} height={16}/>
                        </SC.Link>
                    </SC.Item>
                );
            })}
        </SC.NavBar>
    );
};

export default Navbar;
