import React from 'react';
import  MovieLogo  from '../../assets/images/react-movie-logo.svg';
import  TmdbLogo  from '../../assets/images/tmdb_logo.svg';
import { Link } from 'react-router-dom';
import { Wrapper,Content,LogoImg,LogoTmdbImg } from './Header.styles';
export default function Header() {
    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <LogoImg src={MovieLogo} alt='rmdb-logo'/>
                </Link>
                
                <LogoTmdbImg src={TmdbLogo} alt = 'tmdb-logo'/>
            </Content>
        </Wrapper>
    )
}
