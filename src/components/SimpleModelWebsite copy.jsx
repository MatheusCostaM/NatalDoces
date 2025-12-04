import styled, { css, keyframes } from 'styled-components';
import { useState } from 'react';
import { doces, text } from '../data/doceslist';



const SimpleWebsiteDiv = styled.div`
  width: 100vw;
  background: ${text.corFundo};
  z-index: 4;
  position: relative;
`;

const shine = keyframes`
  from { background-position: 200%; }
  to   { background-position: -200%; }
`;

const goldText = css`
  background: linear-gradient(90deg, #b88900, #ffd473, #b88900);
  background-size: 200%;
  -webkit-background-clip: text;
  color: transparent;
  animation: ${shine} 2s linear infinite;
`;

const gold = css`
  background: linear-gradient(90deg, #b88900, #ffd473, #b88900);
  background-size: 200%;
  animation: ${shine} 2s linear infinite;
`;

const Cursive = styled.h1`
  ${goldText};
  font-size: ${(props) => props.$size}vw;
  font-family: "Charm", cursive;
  font-weight: 700;
  font-style: normal;
`;

const Serif = styled.h1`
  ${goldText};
  font-size: ${(props) => props.$size}vw;
  font-family: "Charm", cursive;
  font-weight: 400;
  font-style: normal;
`;

const HeaderDiv = styled.div`
  width: 100%;
  height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoDiv = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: ${text.cor};

  h1, h3, img {
    filter: drop-shadow( 2px 2px 2px rgb(0,0,0,0.3));
    padding: 0;
    margin: 0;
  }

  img {
    filter: drop-shadow( 2px 2px 2px rgb(0,0,0,0.3));
    height: 40%;
    object-fit: contain;
  }
`;

const SvgImg = styled.img`
  ${gold};
  width: 40%;
`;


const ImageDiv = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    filter: drop-shadow( 3px 3px 3px rgb(0,0,0,0.3));
    width: 100%;
    height: 90%;
    object-fit: contain;
  }
`;

const Button = styled.button`
border-radius: 20px; 
background: ${(props) => props.$color || text.cor}; 
border: none; color: ${(props) => props.$text || "white"}; 
outline: none; 
cursor: pointer; 
width: fit-content; 
transition: 0.2s ease; 
filter: drop-shadow( 2px 2px 2px rgb(0,0,0,0.3));

&:hover { 
  transform: scale(1.02);
 } 

&:active { 
  background: ${(props) => props.$color || text.cor}80; 
  ransform: scale(0.98); 
} 

&:focus { 
  outline: none; box-shadow: none;
 } 

 -webkit-tap-highlight-color: transparent; 

&::-moz-focus-inner { 
  border: 0;
 } ;

${(props) => props.$color === "white" ? "" : gold};

`;

const ScrollWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;

const ScrollItems = styled.div`
  width: 90%;
  height: 35vh;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  padding: 0 20px;
  box-sizing: border-box;
`;

const Arrow = styled.div`
  font-size: 40px;
  color: ${text.cor};
  cursor: pointer;
  padding: 10px;
  user-select: none;
  transition: 0.2s;
  filter: drop-shadow( 2px 2px 2px rgb(0,0,0,0.3));

  &:hover { transform: scale(1.2); }
`;

const Item = styled.div`
  &:hover { 
  transform: scale(1.02); 
  }
  &:active { 
  opacity: 0.7; 
  transform: scale(0.98); 
  }
  filter: drop-shadow( 2px 2px 2px rgb(0,0,0,0.3));

  flex: 0 0 auto;
  width: 15vw;
  height: 90%;
  border-radius: 15px;
  background-image: url(${props => props.$img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const ContactInfo = styled.div`
  width: 100%;
  height: 60vh;
  color: ${text.cor};
  display: flex;
  flex-direction: column;
  justify-content: center; /* centra vertical */
  align-items: center;     /* centra horizontal */

  img {
    filter: drop-shadow( 2px 2px 2px rgb(0,0,0,0.3));
    width: auto;      /* largura automática */
    max-width: 200px; /* limita para não esticar demais */
    height: 30%;      /* mantém altura relativa */
    object-fit: contain;
    margin-bottom: 20px; /* separa do restante do conteúdo */
  }

  h3, h4 {
    filter: drop-shadow( 1px 1px 1px rgb(0,0,0,0.3));
    margin: 3px 0;
    text-align: center;
  }

  a {
    margin-top: 15px; /* separa botão do resto */
  }
`;


const Info = styled.div`
  width: 30vw;
  height: 100vh;
  position: fixed;
  left: 70%;
  background: ${text.cor};
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3, p { 
    filter: drop-shadow( 2px 2px 2px rgb(0,0,0,0.3));
    padding: 10px;
    margin: 0; 
  }
`;

const Moldura = styled.div`
  filter: drop-shadow( 2px 2px 2px rgb(0,0,0,0.3));
  width: 40vh;
  height: 40vh;
  background-image: url(${props => props.$img});
  background-size: cover;
  background-position: center;
`;

const Sair = styled.div`
  color: red;
  text-align: end;
  margin: 20px;
  width: 80%;
`;


const cair = keyframes`
  from { top: 0%; }
  to   { top: 100%; }
`;

const girar = (scale) => keyframes`
  from { transform: scale(${scale}) rotate(0deg); }
  to   { transform: scale(${scale}) rotate(360deg); }
`;

const FlocoAnimado = styled.div`
  position: absolute;
  left: ${props => props.$left}%;
  width: 1.5vw;
  height: 1.5vw;
  transform: scale(${props => props.$scale});

  background-image: url("/flocos.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  filter: invert(1) drop-shadow(1px 1px 1px rgba(0,0,0,0.3));
  border-radius: 50%;
  z-index: 7;

 animation:
  ${cair} 8s linear infinite,
  ${props => girar(props.$scale)} 3s linear infinite;

  animation-delay:
    calc(-8s * (${props => props.$top} / 100)),
    0s;
`;




const SimpleWebsite = () => {
  const [activeItem, setActiveItem] = useState(null);

  // Controle do carrossel
  const [startIndex, setStartIndex] = useState(0);
  const itensPorTela = 5;

  const scrollLeft = () => {
    setStartIndex(prev => Math.max(0, prev - 1)); // volta 1 item
  };

  const scrollRight = () => {
    setStartIndex(prev => Math.min(doces.length - itensPorTela, prev + 1)); // avança 1 item
  };

  const particulas = Array.from({ length: 15 }, () => {
    const left = Math.random() * 100; 
    const top = Math.random() * 100;  
    const scale = (Math.random() * 0.7 + 0.3).toFixed(2); // 0.3 a 1

    return [left, top, scale];
  });

  const itensAtivos = doces.slice(startIndex, startIndex + itensPorTela);

  return (
    <SimpleWebsiteDiv>

      {particulas.map((p, index) => (
        <FlocoAnimado
          key={index}
          $left={p[0]}
          $top={p[1]}
          $scale={p[2]}
        />
      ))}


      {activeItem != null  && (
        <Info>
          <Sair onClick={() => setActiveItem(null)}>X</Sair>
          <h3>{doces[activeItem].title}</h3>
          <Moldura $img={doces[activeItem].img}/>
          <p>{doces[activeItem].text}</p>
          <a href={doces[activeItem].link} target="_blank">
            <Button $color="white" $text={text.cor}>{text.textbutton}</Button>
          </a>
        </Info>
      )}

      <HeaderDiv>
        <LogoDiv>
          <SvgImg src="/Logo.svg" />
          <Serif $size={1.3}>{text.subtitulo}</Serif>
          <Cursive $size={3.5}>{text.titulo}</Cursive>
          <a href={text.link} target="_blank">
            <Button>{text.textbutton}</Button>
          </a>
        </LogoDiv>
        <ImageDiv>
          <img src="PrincipalImage.png" />
        </ImageDiv>
      </HeaderDiv>

      {/* Carrossel com renderização apenas dos ativos */}
      <ScrollWrapper>
        <Arrow onClick={scrollLeft}>⟨</Arrow>
        <ScrollItems>
          {itensAtivos.map((doce, index) => (
            <Item
              key={startIndex + index}
              $img={doce.img}
              onClick={() => setActiveItem(doce.id)}
            />
          ))}
        </ScrollItems>
        <Arrow onClick={scrollRight}>⟩</Arrow>
      </ScrollWrapper>

      <ContactInfo>
        <img src="Logo.png" />
        <Cursive $size={1.5}>CONTATOS</Cursive>
        <Serif $size={1}>{text.email}</Serif>
        <Serif $size={1}>{text.telefone}</Serif>
        <a href={text.link} target="_blank">
          <Button>{text.textbutton}</Button>
        </a>
      </ContactInfo>

    </SimpleWebsiteDiv>
  );
};

export default SimpleWebsite;
