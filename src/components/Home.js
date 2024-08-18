import styled from 'styled-components'
import ImageSlider from './ImageSlider';
import Viewers from './Viewers';
import Recommends from './Recommends';
import NewFilamu from './NewFilamu';
import Originals from './Originals';
import Trending from './Trending';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import db from "../firebase";
import { setMovies } from '../features/movie/movieSlice';
import { selectUserName } from '../features/user/userSlice';

const Home = (props) => {

    const dispatch = useDispatch();
    const username = useSelector(selectUserName);
    let recommends = [];
    let newFilamus = [];
    let originals = [];
    let trending = [];

    useEffect(() => {
        db.collection('movies').onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                console.log(recommends);
                switch (doc.data().type) {
                    case 'recommend':
                        recommends = [...recommends, { id: doc.id, ...doc.data() }];
                        break;
                    case 'new':
                        newFilamus = [...newFilamus, { id: doc.id, ...doc.data() }];
                        break;
                    case 'original':
                        originals = [...originals, { id: doc.id, ...doc.data() }]
                        break;
                    case 'trending':
                        trending = [...trending, { id: doc.id, ...doc.data() }]
                        break;
                }
            });

            dispatch(
                setMovies({
                    recommend: recommends,
                    newFilamu: newFilamus,
                    original: originals,
                    trending: trending,
                })
            );
        });
    }, [username]);



    return (
        <Container id="homeBackground">
            <ImageSlider />
            <Viewers />
            <Recommends />
            <Trending />
            <NewFilamu />
            <Originals />
        </Container>
    );
}

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 0;
    padding: 0 calc(3.5vw + 5px);

    &:after {        
        background: url("static/images/background3.png") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }    
`;

export default Home;