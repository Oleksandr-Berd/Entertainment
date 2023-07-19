import React from "react";
import { useLocation } from "react-router";

import * as SC from "./NavBarStyled"
import navData from "dataBase/nav.json";
import { navIcons } from "utilities/navIcons";
import { useMediaQuery } from 'usehooks-ts';

interface Navigation {
    id: number;
    name: string;
    icon: string;
};

const Navbar: React.FC = () => {
    const location = useLocation()

    const isTablet = useMediaQuery("(min-width:768px)")


    return (
        <SC.NavBar>
            {navData.map(({ id, name, icon }: Navigation) => {
                const IconComponent = navIcons[icon];
                return (
                    <SC.Item key={id}>
                        <SC.Link to={name}>
                            <IconComponent fill={location.pathname !== name ? "#5A698F" : "#fff"} width={isTablet ? 20: 16} height={16}/>
                        </SC.Link>
                    </SC.Item>
                );
            })}
        </SC.NavBar>
    );
};

export default Navbar;
