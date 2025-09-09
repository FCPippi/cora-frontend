import styled from "styled-components";

export const CardModuleContainer = styled.div`
  display: grid;
  grid-template-columns: clamp(240px, 42%, 300px) minmax(0, 1fr);
  align-items: stretch;
  height: 100%;
  background: rgba(217, 217, 217, 0.35);
  border-radius: 1.6rem;
  overflow: hidden;
  width: 100%;
  min-height: 20.1rem;
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: clamp(96px, 30vw, 120px) minmax(0, 1fr);
    gap: 10px;
    border-radius: 1.2rem;
    min-height: initial;
  }
`;

export const CardModuleImageColumn = styled.div`
  padding: 0;
  align-self: stretch;
  display: flex;
`;

export const CardModuleImageFrame = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  border: 0.5rem solid #ed67a3;

  border-radius: 1.6rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;

    transform: scale(1.04);
    transform-origin: center;

    border: none !important;
    box-shadow: none !important;
  }

  @media (max-width: 768px) {
    border-radius: 1.2rem;
    height: 100%;
  }
`;

export const CardModuleBody = styled.div`
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;

  @media (max-width: 768px) {
    padding: 10px;
    gap: 6px;
  }
`;

export const CardModuleHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  min-width: 0;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 6px;
  }
`;

export const CardModuleTitle = styled.h2`
  margin: 0;
  min-width: 0;
  overflow-wrap: break-word;
  hyphens: auto;

  font-family: "Cherry Bomb One", system-ui, sans-serif;
  font-size: clamp(1.6rem, 1.2rem + 1.2vw, 2.2rem);
  font-weight: 400;
  color: #ed67a3;
  -webkit-text-stroke: 0.1rem #fff5e1;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.15rem;
    -webkit-text-stroke: 0.05rem #fff5e1;
    letter-spacing: 0.2px;
  }
`;

export const CardModuleAgeRange = styled.span`
  flex: 0 0 auto;
  white-space: nowrap;
  font-family: "Cherry Bomb One", system-ui, sans-serif;
  font-weight: 700;
  color: #6f6f6f;
  font-size: 1.6rem;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const CardModuleDescription = styled.p`
  margin: 0;
  min-width: 0;
  color: #777;
  font-family: "Alexandria", system-ui, sans-serif;
  line-height: 1.5;
  font-size: 1.05rem;
  max-width: 60ch;

  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 0.92rem;
    -webkit-line-clamp: 3;
    max-width: none;
    text-align: left;
  }
`;
