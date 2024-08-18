import styled from "styled-components";

const Detail = (props) => {
    return (
        <Contrainer>
            <Background>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="" />
            </Background>

            <ImageTitle>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5C647DF3FFBFA343CFEA84AC715148F25F9E86F398B408010CC403E7654FB908/scale?width=1440&aspectRatio=1.78" alt="" />
            </ImageTitle>

            <ContentMeta>
                <Controls>
                    <h3>Controls</h3>
                </Controls>
            </ContentMeta>
        </Contrainer>
    );
}


const Contrainer = styled.div`
    position: relative;
    min-height: calc(100vh- 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
    left: 0px;
    opacity: 0.8;
    position: fixed;
    right: 0px;
    top: 0px;
    z-index: -1;

    img {
        width: 100vw;
        height: 100vh;

        @media (max-width: 768px) {
            width: intial;
        }
    }
`;

const ImageTitle = styled.div`
    align-items: flex-end:
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin: 50px auto;
    height: 30vw;
    min-height: 170px;
    padding-bottom: 20px;
    width: 100%;

    img{
        max-width: 600px;
        min-width: 200px;
        width: 35vw;
    }
`;

const ContentMeta = styled.div`
    max-width: 874px;
`;

const Controls = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin: 20px 0px;
    min-height: 56px;

`;

export default Detail;