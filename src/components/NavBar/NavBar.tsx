import React from "react";
import { NavLink } from "react-router-dom";

import navData from "dataBase/nav.json";

import homeMob from "assets/icons/homeMob.png";
import moviesMob from "assets/icons/movieMob.png";
import tvMob from "assets/icons/tvMob.png";
import bookmarkedMob from "assets/icons/bookmarkMob.png";


interface Navigation {
    id: number;
    name: string;
    icon: string;
};


const navIcons: Record<string, string> = {
    homeMob,
    moviesMob,
    tvMob,
    bookmarkedMob,
};

const Navbar: React.FC = () => {
    return (
        <nav>
            {navData.map(({ id, name, icon }: Navigation) => {
                const mobileIcon = navIcons[icon];
                return (
                    <li key={id}>
                        <NavLink to={name}>
                            <img src={mobileIcon} alt={name} className="mobile-icon" />
                        </NavLink>
                    </li>
                );
            })}
        </nav>
    );
};

export default Navbar;
