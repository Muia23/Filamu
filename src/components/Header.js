import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { auth, provider } from "../firebase";
import { selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails, } from "../features/user/userSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = (props) => {

    const dispatch = useDispatch();
    const history = useNavigate();
    const username = useSelector(selectUserName);
    const userphoto = useSelector(selectUserPhoto);

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        )
    }

    const handleAuth = () => {
        if (!username) {
            auth
                .signInWithPopup(provider)
                .then((result) => {
                    setUser(result.user);
                }).catch((error) => {
                    alert(error.message);
                });
        } else if (username) {
            auth
                .signOut()
                .then(() => {
                    dispatch(setSignOutState());
                    history("/");
                }).catch((err) => alert(err.message));
        }
    };

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user);
                history("/home");
            }
        });
    }, [username])

    return (
        <Nav>
            <Logo>
                <img src="static/images/logo.png" alt="Filamu" />
            </Logo>
            {!username ? (
                <Login onClick={handleAuth}>Login</Login>
            ) : (
                <>
                    <NavMenu>
                        <a href="/home">
                            <img src="static/images/Home.svg" alt="HOME" />
                            <span>HOME</span>
                        </a>
                        <a href="/search">
                            <img src="static/images/Search.svg" alt="SEARCH" />
                            <span>SEARCH</span>
                        </a>
                        <a href="/watchlist">
                            <img src="static/images/Watchlist.svg" alt="WATCHLIST" />
                            <span>WATCHLIST</span>
                        </a>
                        <a href="/originals">
                            <img src="static/images/Originals.svg" alt="ORIGINALS" />
                            <span>ORIGINALS</span>
                        </a>
                        <a href="/movies">
                            <img src="static/images/Movies.svg" alt="MOVIES" />
                            <span>MOVIES</span>
                        </a>
                        <a href="/series">
                            <img src="static/images/Series.svg" alt="SERIES" />
                            <span>SERIES</span>
                        </a>
                    </NavMenu>
                    <SignOut>
                        <UserImg src={userphoto} alt={username}></UserImg>
                        <DropDown>
                            <span onClick={handleAuth}>Sign out</span>
                        </DropDown>
                    </SignOut>
                </>
            )
            }
        </Nav>
    );
}


const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    rigth: 0;
    height: 70px;
    box-shadow: 0 10px 15px -3px rgba(42, 14, 97, 0.5), 0 4px 6px -2px rgba(42, 14, 97, 0.5);
    background-color: rgba(2, 1, 15, 0.78);
    backdrop-filter: blur(12px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    width: 100%;
    letter-spacing: 16px;
    z-index: 3;
`;

const Logo = styled.a`
    padding: 0;
    width: 100px;    
    max-height: 80px;
    font-size: 0;
    display: inline-block;
    
    img {
        display: block;
        width: 100%;
    }
`;

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    heightL 100%;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;

        img {
            heights: 20px;
            min-width: 20px;
            width: 20px;
            z-index: auto;
        }

        span {
            color: rgb(249, 249,249);
            font-size: 16px;
            letter-spacing: 1.42px;            
            padding: 1px 10px;
            white-space: nowrap;
            position: relative;
            margin-top: 2px;        
        
            &:before {
                background-color: rgb(249, 249, 249);
                border-radius: 0px 0px 4px 4px;
                bottom: -5px;
                content: "";
                height: 2px;
                left: 3px;                
                opacity: 0;
                position: absolute;
                right: 5px;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
                width: auto;
            }
        }

        &:hover {
            span:before {
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }
    }    

    @media (max-width: 768px) {
        display: none;
    }
`;

const Login = styled.a`
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 5px;
    transition: all 0.2s ease 0s;

    &:hover {
        background: #f9f9f9;
        color: #000;
    }
`;

const UserImg = styled.img`
    height: 100%;
`;

const DropDown = styled.div`
    position: absolute;
    top: 48px;
    right: 0px;
    background: rgb(19, 19, 19);
    border: 1px solid rgba(151, 151, 151, 0.34);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 3px;
    width: 100px;
    opacity: 0;
`;

const SignOut = styled.div`
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    ${UserImg} {
        border-radius: 50%;
        width: 100%
        height: 100%
    }

    &:hover {
        ${DropDown} {
            opacity: 1;
            transition-duration: 1s;
        }
    }
`;

export default Header;