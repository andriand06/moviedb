import React,{ useContext } from 'react';
import  MovieLogo  from '../../assets/images/react-movie-logo.svg';
import  TmdbLogo  from '../../assets/images/tmdb_logo.svg';
import { Link } from 'react-router-dom';
import { Wrapper,Content,LogoImg,LogoTmdbImg } from './Header.styles';
import { Context } from '../../context'
export default function Header() {
    const [user] = useContext(Context);
    console.log(user);
    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <LogoImg src={MovieLogo} alt='rmdb-logo'/>
                </Link>
                {
                    user ? (
                        <span>Logged in as : {user.username}</span>
                    ) : (
                        <Link to="/login">
                            <span>Login</span>
                        </Link>    
                    )
                }
                <LogoTmdbImg src={TmdbLogo} alt = 'tmdb-logo'/>
            </Content>
        </Wrapper>
    )
}
