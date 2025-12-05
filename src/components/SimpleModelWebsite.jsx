import styled, { css, keyframes } from 'styled-components';
import { useEffect, useState, useRef } from 'react';
import { doces, text, socialContact } from '../data/doceslist';

const SimpleWebsiteDiv = styled.div`
  width: 100vw;
  background: ${text.corFundo};
  z-index: 4;
  position: relative;

  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
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
  animation: ${shine} 4s linear infinite;
`;

const gold = css`
  background: linear-gradient(90deg, #b88900, #ffd473, #b88900);
  background-size: 200%;
  animation: ${shine} 4s linear infinite;
`;

const goldMask = css`
  background: linear-gradient(90deg, #b88900, #ffd473, #b88900);
  background-size: 200%;
  animation: ${shine} 4s linear infinite;
`;

const LogoWrapper = styled.div`
  filter: drop-shadow(${(props) => props.$size}px ${(props) => props.$size}px ${(props) => props.$size}px rgba(0,0,0,0.4));
  width: auto;
  height: auto;
`;

const LogoImg = styled.div`
  ${goldMask};
  width: ${(props) => props.$size}vw;
  min-width: 45vh;
  height: ${(props) => props.$size}vh;
  mask-image: url("/Logo.svg");
  -webkit-mask-image: url("/Logo.svg");
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
`;

const LinksImg = styled.div`
  ${goldMask}
  width: 2vw;
  min-width: 5vh;
  height: 2vw;
  min-height: 5vh;
  mask-image: url(${(props) => props.$img});
  -webkit-mask-image: url(${(props) => props.$img});
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
  cursor: pointer;
  &:hover { transform: scale(1.1); }
  &:active { background: ${(props) => props.$color || text.cor}80; transform: scale(0.9); }
`;

const Cursive = styled.h1`
  font-size: clamp(
    ${(props) => props.$size * 1.3}vh,
    ${(props) => props.$size}vw,
    ${(props) => props.$size * 1.5}vw
  );
  font-family: "Charm", cursive;
  font-weight: 700;
  font-style: normal;
  color: white;
  margin: 5px;
  ${(props) => props.$color === "white" ? "" : goldText};
`;

const Serif = styled.h1`
  font-size: clamp(
    ${(props) => props.$size * 1.5}vh,
    ${(props) => props.$size}vw,
    ${(props) => props.$size * 1.5}vw
  );
  font-family: "Charm", cursive;
  font-weight: 400;
  font-style: normal;
  color: white;
  margin: 5px;
  ${(props) => props.$color === "white" ? "" : goldText};
`;

const HeaderDiv = styled.div`
  width: 70%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.$width}vw;

  @media (max-width: 768px) {
    width: 100vw !important;
    height: 55vh;
  }

`;

const LogoDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: ${text.cor};

  h1, h3 {
    filter: drop-shadow( 2px 2px 2px rgb(0,0,0,0.3));
    padding: 0;
    margin: 0;
  }
`;

const Button = styled.button`
  border-radius: 20px;
  background: ${(props) => props.$color || text.cor};
  border: none;
  color: ${(props) => props.$text || "white"};
  outline: none;
  cursor: pointer;
  width: fit-content;
  transition: 0.2s ease;
  filter: drop-shadow( 2px 2px 2px rgb(0,0,0,0.3));
  margin-bottom: 20px;

  &:hover { transform: scale(1.02); }
  &:active { background: ${(props) => props.$color || text.cor}80; transform: scale(0.98); }
  &:focus { outline: none; box-shadow: none; }
  -webkit-tap-highlight-color: transparent;
  &::-moz-focus-inner { border: 0; } ;
  ${(props) => props.$color === "white" ? "" : gold};

  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
`;

const ScrollWrapper = styled.div`
  height: 40vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.$width}vw;

  @media (max-width: 768px) {
    width: 100vw !important;
  }
`;

const ScrollItems = styled.div`
  display: flex;
  overflow-x: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  width: 90%;
  height: 90%;
  gap: 34px;
  scroll-behavior: smooth;
  align-items: center;

  @media (max-width: 768px) {
    -webkit-overflow-scrolling: auto !important;
    overscroll-behavior-x: none;
    /* keep overflow visible so user can drag; auto-scroll will also work */
  }
`;

const Item = styled.div`
  flex: 0 0 auto;
  width: 16vw;
  min-width: 20vh;
  height: 16vw;
  min-height: 20vh;
  border-radius: 15px;
  background-image: url(${props => props.$img});
  background-size: cover;
  background-position: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
  &:active {
    opacity: 0.8;
    transform: scale(0.98);
  }
`;

const Arrow = styled.div`
  font-size: 40px;
  width: 3vw;
  align-items: center;
  cursor: pointer;
  ${goldText}
`;

const ContactInfo = styled.div`
  width: ${(props) => props.$width}vw;
  height: 60vh;
  color: ${text.cor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img { filter: drop-shadow( 2px 2px 2px rgb(0,0,0,0.3)); width: auto; max-width: 200px; height: 30%; object-fit: contain; margin-bottom: 20px; }
  h3, h4 { filter: drop-shadow( 1px 1px 1px rgb(0,0,0,0.3)); margin: 3px 0; text-align: center; }
  a { margin-top: 15px; }

  @media (max-width: 768px) {
    width: 100vw !important;
  }
`;

const Info = styled.div`
  width: 30vw;
  height: 100vh;
  position: fixed;
  left: 70%;
  ${gold}
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  div, button { margin: 10px; }
  h3, p { filter: drop-shadow( 2px 2px 2px rgb(0,0,0,0.3)); margin: 10px; padding: 10px; }

  @media (max-width: 768px) {
    display: none;
  }
`;

const InfoMobile = styled.div`
  width: 80vw;
  height: auto;
  position: fixed;
  ${gold}
  z-index: 5;
  display: none;
  flex-direction: column;
  align-items: center;
  div, button { margin: 10px; }
  h3, p { filter: drop-shadow( 2px 2px 2px rgb(0,0,0,0.3)); margin: 10px; padding: 10px; }
  transform: translate(-50%,-50%);
  top: 50%;
  left: 50%;
  border-radius: 30px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Moldura = styled.div`
  filter: drop-shadow( 2px 2px 2px rgb(0,0,0,0.3));
  width: 40vh;
  max-width: 60vw;
  height: 40vh;
  max-height: 60vw;
  background-image: url(${props => props.$img});
  background-size: cover;
  background-position: center;
`;

const Sair = styled.div`
  color: white;
  text-align: end;
  margin: 20px;
  width: 80%;
`;

const cair = keyframes` from { top: 0%; } to { top: 100%; } `;
const girar = (scale) => keyframes` from { transform: scale(${scale}) rotate(0deg); } to { transform: scale(${scale}) rotate(360deg); } `;
const FlocoAnimado = styled.div`
  position: absolute;
  left: ${props => props.$left}%;
  width: 1.5vw;
  min-width: 3vh;
  height: 1.5vw;
  min-height: 3vh;
  transform: scale(${props => props.$scale});
  background-image: url("/flocos.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: invert(1) drop-shadow(1px 1px 1px rgba(0,0,0,0.3));
  border-radius: 50%;
  z-index: 7;
  animation: ${cair} 8s linear infinite, ${props => girar(props.$scale)} 3s linear infinite;
  animation-delay: calc(-8s * (${props => props.$top} / 100)), 0s;
`;

const Links = styled.div`
  display: flex;
  width: 13%;
  min-width: 25vh;
  justify-content: space-around;
  margin: 5px;
`;

const SimpleWebsite = () => {
  const scrollRef = useRef(null);
  const [activeItem, setActiveItem] = useState(null);
  const [mobile, setMobile] = useState(false);

  const listaDuplicada = [...doces, ...doces];
  const totalOriginal = doces.length;

  let width = activeItem === null ? 100 : 70;

  const getItemWidth = () => {
    if (!scrollRef.current) return 0;
    const item = scrollRef.current.children[0];
    if (!item) return 0;

    const style = window.getComputedStyle(scrollRef.current);
    const gapStr = style.gap || style.columnGap || '0px';
    const gap = parseInt(gapStr, 10) || 0;

    return item.offsetWidth + gap;
  };

  // Desktop auto scroll (unchanged behaviour)
  useEffect(() => {
    let time = mobile ? 1000 : 4000
    const interval = setInterval(scrollRight, time);
    return () => clearInterval(interval);
  }, [mobile]);

  

  const scrollRight = () => {
    if (!scrollRef.current) return;
    const scroll = scrollRef.current;

    const itemWidth = getItemWidth();
    if (!itemWidth) return;

    const maxScroll = itemWidth * totalOriginal;

    if (scroll.scrollLeft + itemWidth >= maxScroll) {
      scroll.scrollTo({ left: scroll.scrollLeft + itemWidth, behavior: 'smooth' });

      setTimeout(() => {
        scroll.style.scrollBehavior = 'auto';
        scroll.scrollLeft = scroll.scrollLeft - maxScroll;
        scroll.style.scrollBehavior = 'smooth';
      }, 300);
    } else {
      scroll.scrollTo({ left: scroll.scrollLeft + itemWidth, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (!scrollRef.current) return;
    const scroll = scrollRef.current;

    const itemWidth = getItemWidth();
    if (!itemWidth) return;

    if (scroll.scrollLeft <= 0) {
      scroll.style.scrollBehavior = 'auto';
      scroll.scrollLeft = itemWidth * totalOriginal;
      scroll.style.scrollBehavior = 'smooth';
    } else {
      scroll.scrollTo({ left: scroll.scrollLeft - itemWidth, behavior: 'smooth' });
    }
  };

  const particulas = Array.from({ length: 15 }, () => {
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const scale = (Math.random() * 0.7 + 0.3).toFixed(2);
    return [left, top, scale];
  });

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <SimpleWebsiteDiv>
      {particulas.map((p, index) => (
        <FlocoAnimado key={index} $left={p[0]} $top={p[1]} $scale={p[2]} />
      ))}

      {activeItem != null && (
        <>
          <Info>
            <Sair onClick={() => setActiveItem(null)}>✖</Sair>
            <Cursive $size={2} $color="white">{doces[activeItem].title}</Cursive>
            <Moldura $img={doces[activeItem].img} />
            <Serif $size={1.5} $color="white">{doces[activeItem].text}</Serif>
            <a href={doces[activeItem].link} target="_blank">
              <Button $color="white" $text={text.cor}>{text.textbutton}</Button>
            </a>
          </Info>
          <InfoMobile>
            <Sair onClick={() => setActiveItem(null)}>✖</Sair>
            <Cursive $size={2} $color="white">{doces[activeItem].title}</Cursive>
            <Moldura $img={doces[activeItem].img} />
            <Serif $size={1.5} $color="white">{doces[activeItem].text}</Serif>
            <a href={doces[activeItem].link} target="_blank">
              <Button $color="white" $text={text.cor}>{text.textbutton}</Button>
            </a>
          </InfoMobile>
        </>
      )}

      <HeaderDiv $width={width}>
        <LogoDiv>
          <LogoWrapper $size={2}>
            <LogoImg $size={30} />
          </LogoWrapper>
          <Serif $size={1.3}>{text.subtitulo}</Serif>
          <Cursive $size={3.5}>{text.titulo}</Cursive>
          <a href={text.link} target="_blank">
            <Button>{text.textbutton}</Button>
          </a>
        </LogoDiv>
      </HeaderDiv>

      <ScrollWrapper $width={width}>
        {!mobile && (<Arrow onClick={scrollLeft}>⟨</Arrow>)}
        <ScrollItems ref={scrollRef}>
          {listaDuplicada.map((doce, index) => (
            <Item key={index} $img={doce.img} onClick={() => setActiveItem(doce.id)} />
          ))}
        </ScrollItems>
        {!mobile && (<Arrow onClick={scrollRight}>⟩</Arrow>)}
      </ScrollWrapper>

      <ContactInfo $width={width}>
        <LogoWrapper $size={1}>
          <LogoImg $size={15} />
        </LogoWrapper>
        <Cursive $size={1.5}>CONTATOS</Cursive>
        <Links>
          {socialContact.map((c, index) => (
            <LogoWrapper key={index}>
              <a href={c.link} target="_blank">
                <LinksImg $img={c.img} />
              </a>
            </LogoWrapper>
          ))}
        </Links>
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
