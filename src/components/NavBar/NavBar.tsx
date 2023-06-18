import React from "react";
import { NavLink } from "react-router-dom";

import navData from "dataBase/nav.json";

import * as SC from "./NavBarStyled"

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
        <SC.NavBar>
            {navData.map(({ id, name, icon }: Navigation) => {
                const mobileIcon = navIcons[icon];
                return (
                    <SC.Item key={id}>
                        <NavLink to={name}>
                            <img src={mobileIcon} alt={name} className="mobile-icon" />
                        </NavLink>
                    </SC.Item>
                );
            })}
        </SC.NavBar>
    );
};

export default Navbar;
