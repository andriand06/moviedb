import React from 'react';
import  MovieLogo  from '../../assets/images/react-movie-logo.svg';
import  TmdbLogo  from '../../assets/images/tmdb_logo.svg';

import { Wrapper,Content,LogoImg,LogoTmdbImg } from './Header.styles';
export default function Header() {
    return (
        <Wrapper>
            <Content>
                <LogoImg src={MovieLogo} alt='rmdb-logo'/>
                <LogoTmdbImg src={TmdbLogo} alt = 'tmdb-logo'/>
            </Content>
        </Wrapper>
    )
}
