import styled from "styled-components";

const Login = (props) => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogo src="static/images/logo.png" alt="" />
                    <Description>Get Premier Access to the latest trailers for movies, music, podcasts, shows, and events—all in one place. Engage with exclusive content and stay updated with Filamu.</Description>
                    <SignUp>WATCH NOW</SignUp>
                </CTA>
                <BgImage />
            </Content>
        </Container>
    )
}

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;    
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const BgImage = styled.div`
    height: 100%;    
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("static/images/login-background.png");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`;

const CTA = styled.div`
    margin-bottom: 2vw;
    max-width: 850px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
    align-items: center;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    transitioning-timing-function: ease-out;
    transition: opacity 0.2s;
    width: 100%;
`;

const CTALogo = styled.img`
    margin-bottom: 12px;
    max-width: 320px;
    min-hieght: 1px;
    display: block;
    width: 100%;
`;

const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #5849E6;
    margin-bottom: 12px;
    width: 40%;
    min-width: 300px;
    letter-spacing: 1.5px;
    font-size: 22px;
    padding: 15px 0;
    border: 1px solid transparent;
    border-radius: 5px;

    &:hover {
        background-color: #6D60ED;
    }    
`;

const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 20px;
    margin: 60px 0;
    line-height: 1.5;
    letter-spacing: 1.5px;
    width: 100%;
`;

export default Login;