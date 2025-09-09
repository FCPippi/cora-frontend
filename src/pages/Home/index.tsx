import CardCoraHi from "../../assets/CardCoraHi.png";
import Card from "../../components/Card";
import SearchBar from "../../components/SearchBar";
import FilterIcon from "../../icons/FilterIcon";
import { ContentsCardsGrid, ContentsGreeting, ContentsHeader, ContentsPageContainer, ContentsSubGreeting, HeaderLeft, HeaderRight, SearchBarSlot } from "./style";

const Home = () => {
    const cards = [
        {
            img: CardCoraHi,
            title: "Corpo e Consentimento",
            content:
                'Nesta seção, apresentamos conteúdos que ajudam os pequenos a reconhecer seus limites, saber quem pode tocar e onde, e entender a importância de dizer "sim" ou "não" de forma clara e segura.',
            ageRange: "9-12 anos",
        },
        {
            img: CardCoraHi,
            title: "Prevenção de Abusos",
            content:
                "Nesta seção, ajudamos os pequenos a entender o que é um comportamento seguro e como identificar situações que podem não ser apropriadas. Além de reforçar a importância de sempre buscar ajuda de adultos de confiança.",
            ageRange: "9-12 anos",
        },
        {
            img: CardCoraHi,
            title: "Corpo e Consentimento",
            content:
                'Nesta seção, apresentamos conteúdos que ajudam os pequenos a reconhecer seus limites, saber quem pode tocar e onde, e entender a importância de dizer "sim" ou "não" de forma clara e segura.',
            ageRange: "9-12 anos",
        },
        {
            img: CardCoraHi,
            title: "Prevenção de Abusos",
            content:
                "Nesta seção, ajudamos os pequenos a entender o que é um comportamento seguro e como identificar situações que podem não ser apropriadas. Além de reforçar a importância de sempre buscar ajuda de adultos de confiança.",
            ageRange: "9-12 anos",
        },
        {
            img: CardCoraHi,
            title: "Corpo e Consentimento",
            content:
                'Nesta seção, apresentamos conteúdos que ajudam os pequenos a reconhecer seus limites, saber quem pode tocar e onde, e entender a importância de dizer "sim" ou "não" de forma clara e segura.',
            ageRange: "9-12 anos",
        },
        {
            img: CardCoraHi,
            title: "Prevenção de Abusos",
            content:
                "Nesta seção, ajudamos os pequenos a entender o que é um comportamento seguro e como identificar situações que podem não ser apropriadas. Além de reforçar a importância de sempre buscar ajuda de adultos de confiança.",
            ageRange: "9-12 anos",
        },
        {
            img: CardCoraHi,
            title: "Corpo e Consentimento",
            content:
                'Nesta seção, apresentamos conteúdos que ajudam os pequenos a reconhecer seus limites, saber quem pode tocar e onde, e entender a importância de dizer "sim" ou "não" de forma clara e segura.',
            ageRange: "9-12 anos",
        },
        {
            img: CardCoraHi,
            title: "Prevenção de Abusos",
            content:
                "Nesta seção, ajudamos os pequenos a entender o que é um comportamento seguro e como identificar situações que podem não ser apropriadas. Além de reforçar a importância de sempre buscar ajuda de adultos de confiança.",
            ageRange: "9-12 anos",
        },
        {
            img: CardCoraHi,
            title: "Corpo e Consentimento",
            content:
                'Nesta seção, apresentamos conteúdos que ajudam os pequenos a reconhecer seus limites, saber quem pode tocar e onde, e entender a importância de dizer "sim" ou "não" de forma clara e segura.',
            ageRange: "9-12 anos",
        },
    ];

    return (
        <ContentsPageContainer>
            <ContentsHeader>
                <HeaderLeft>
                    <ContentsGreeting>Olá, Maria!</ContentsGreeting>
                    <ContentsSubGreeting>
                        O que você gostaria de aprender hoje?
                    </ContentsSubGreeting>

                    <SearchBarSlot>
                        <SearchBar />
                    </SearchBarSlot>

                </HeaderLeft>
                <HeaderRight>{<FilterIcon />}</HeaderRight>
            </ContentsHeader>
            <ContentsCardsGrid>
                {cards.map((c, i) => (
                    <Card key={i} {...c} />
                ))}
            </ContentsCardsGrid>
        </ContentsPageContainer>
    );
};

export default Home;