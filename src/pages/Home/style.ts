import styled from "styled-components";

export const ContentsPageContainer = styled.main`
  max-width: 1160px;
  margin: 24px auto;
  padding: 0 24px;
`;

export const ContentsHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
  margin: 8px 0 28px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 16px;
    margin-bottom: 20px;
  }
`;

export const HeaderLeft = styled.div`
  flex: 1 1 auto;
  min-width: 0;
  max-width: 720px;
  display: flex;               
  flex-direction: column;       
  align-items: flex-start;      
  gap: 6px;                    
`;

export const HeaderRight = styled.div`
  flex: 0 0 auto;
  display: flex;               
  align-items: center;
  align-self: flex-start;      
  height: 40px;                  
  margin-top: 2px;              

  @media (max-width: 900px) {
    align-self: flex-end;
    margin-top: 0;
  }
`;

export const ContentsGreeting = styled.h1`
  margin: 0;
  font-family: "Alexandria", system-ui, sans-serif;
  font-weight: 600;
  font-size: 1.75rem;
  color: #777777;
  text-align: left;              

  @media (max-width: 900px) {
    font-size: 1.5rem;
  }
`;

export const ContentsSubGreeting = styled.p`
  margin: 0;                     
  font-family: "Alexandria", system-ui, sans-serif;
  font-size: 1.5rem;               
  color: #777777;
  text-align: left;        

  @media (max-width: 900px) {
    font-size: 0.95rem;
  }
`;

/* Slot define a largura/posição da barra */
export const SearchBarSlot = styled.div`
  margin-top: 8px;               
  max-width: 580px;              
  width: 100%;

  @media (max-width: 640px) {
    max-width: 100%;
  }
`;

export const ContentsCardsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px 48px;
  align-items: stretch;

  @media (max-width: 1200px) {
    gap: 24px 28px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;
