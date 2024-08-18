import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import WAVES from 'vanta/dist/vanta.waves.min';

const Home = (props) => {
    const vantaRef = useRef(null);

    useEffect(() => {
        const vantaEffect = WAVES({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x040714
        });

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, []);

    return (
        <Container ref={vantaRef}>
            <h2>Home</h2>
            <h2>Home</h2>
            <h2>Home</h2>
            <h2>Home</h2>
            <h2>Home</h2>
            <h2>Home</h2>
            <h2>Home</h2>
            <h2>Home</h2>
            <h2>Home</h2>
            <h2>Home</h2>
            <h2>Home</h2>
            <h2>Home</h2>
            <h2>Home</h2>
            <h2>Home</h2>
            <h2>Home</h2>
        </Container>
    );
}

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 70px;
    padding: 0 calc(3.5vw + 5px);

    &:after {
        content: '';
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`;

export default Home;
