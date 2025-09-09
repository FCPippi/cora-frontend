import CardCoraHi from "../../assets/CardCoraHi.png";
import Card from "../../components/Card";
import SearchBar from "../../components/SearchBar";
import CircleGreenHeartIcon from "../../icons/CircleGreenHeart";
import CircleIcon from "../../icons/CircleIcon";
import FatCircleIcon from "../../icons/FatCircleIcon";
import FilterIcon from "../../icons/FilterIcon";
import RedHeartIcon from "../../icons/RedHeartIcon";

import {
    ContentsCardsGrid,
    ContentsGreeting,
    ContentsHeader,
    ContentsPageContainer,
    ContentsSubGreeting,
    DecoBottomLeftHeart,
    DecoBottomRightGreen,
    DecorationsLayer,
    DecoTopLeftFat,
    DecoTopRightYellow,
    HeaderLeft,
    HeaderRight,
    SearchBarSlot,
} from "./style";

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
        // {
        //     img: CardCoraHi,
        //     title: "Prevenção de Abusos",
        //     content:
        //         "Nesta seção, ajudamos os pequenos a entender o que é um comportamento seguro e como identificar situações que podem não ser apropriadas. Além de reforçar a importância de sempre buscar ajuda de adultos de confiança.",
        //     ageRange: "9-12 anos",
        // },
        // {
        //     img: CardCoraHi,
        //     title: "Corpo e Consentimento",
        //     content:
        //         'Nesta seção, apresentamos conteúdos que ajudam os pequenos a reconhecer seus limites, saber quem pode tocar e onde, e entender a importância de dizer "sim" ou "não" de forma clara e segura.',
        //     ageRange: "9-12 anos",
        // },
        // {
        //     img: CardCoraHi,
        //     title: "Prevenção de Abusos",
        //     content:
        //         "Nesta seção, ajudamos os pequenos a entender o que é um comportamento seguro e como identificar situações que podem não ser apropriadas. Além de reforçar a importância de sempre buscar ajuda de adultos de confiança.",
        //     ageRange: "9-12 anos",
        // },
        // {
        //     img: CardCoraHi,
        //     title: "Corpo e Consentimento",
        //     content:
        //         'Nesta seção, apresentamos conteúdos que ajudam os pequenos a reconhecer seus limites, saber quem pode tocar e onde, e entender a importância de dizer "sim" ou "não" de forma clara e segura.',
        //     ageRange: "9-12 anos",
        // },
    ];

    return (
        <ContentsPageContainer>
            {/* Camada de decorações (fica atrás de tudo) */}
            <DecorationsLayer aria-hidden>
                <DecoTopLeftFat>
                    <FatCircleIcon />
                </DecoTopLeftFat>

                <DecoTopRightYellow>
                    <CircleIcon color="#FDC647" />
                </DecoTopRightYellow>

                <DecoBottomLeftHeart>
                    <RedHeartIcon />
                </DecoBottomLeftHeart>

                <DecoBottomRightGreen>
                    <CircleGreenHeartIcon direction="right" />
                </DecoBottomRightGreen>
            </DecorationsLayer>

            {/* Header com saudação, subtítulo, busca e filtro */}
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

                <HeaderRight>
                    <FilterIcon />
                </HeaderRight>
            </ContentsHeader>

            {/* Grid de cards */}
            <ContentsCardsGrid>
                {cards.map((c, i) => (
                    <Card key={i} {...c} />
                ))}
            </ContentsCardsGrid>
        </ContentsPageContainer>
    );
};

export default Home;
