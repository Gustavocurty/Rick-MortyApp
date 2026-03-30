import React, { useState, useCallback, useMemo } from 'react';
import { Keyboard, useWindowDimensions, Image as RNImage } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import Api from '../../Services/api';
import { colors, space } from '../../theme';

import RickMorty from '../../../assets/Rick-e-Morty.jpg';
import img from '../../../assets/search.png';
import ImgError from '../../../assets/Rick-e-Morty-Error.jpg';
import background from '../../../assets/background.jpg';
import ImgTitulo from '../../../assets/TituloRickEMorty.webp';

import LottieView from 'lottie-react-native';

import {
  Container,
  ScrollContent,
  HeaderBlock,
  TituloImg,
  HeroWrap,
  ImgBackground,
  HeroOverlay,
  HeroInner,
  SearchRow,
  InputStyle,
  BotaoSearch,
  FotoSearch,
  ResultsSection,
  CardConteudo,
  CharImageWrap,
  ErrorFigure,
  ImageBottom,
  CharName,
  MetaRow,
  Pill,
  PillText,
  StatusDot,
  LocationBox,
  LocationLabel,
  LocationText,
  ErrorText,
  LoadingHint,
} from './style';

function statusColor(status) {
  const s = (status || '').toLowerCase();
  if (s === 'alive') return colors.alive;
  if (s === 'dead') return colors.dead;
  return colors.unknown;
}

export default function PageOne() {
  const [personagem, setPersonagem] = useState('');
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(false);

  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const heroMinHeight = Math.min(200, Math.max(140, width * 0.42));
  const lottieSize = Math.min(220, width * 0.55);

  const errorImageStyle = useMemo(() => {
    const meta = RNImage.resolveAssetSource(ImgError);
    const cardOuter = Math.min(420, width - space.lg * 2);
    const inner = Math.max(120, cardOuter - space.lg * 2);
    if (!meta?.width || !meta?.height) {
      return { width: inner, height: 220 };
    }
    const scale = inner / meta.width;
    return {
      width: inner,
      height: Math.round(meta.height * scale),
    };
  }, [width]);

  const searchPersonagem = useCallback(async () => {
    Keyboard.dismiss();
    if (personagem.trim() === '') {
      alert('Digite um nome para buscar!');
      return;
    }
    try {
      setCarregando(true);
      setErro(false);
      const response = await Api.get(`/character/?name=${encodeURIComponent(personagem.trim())}`);
      const totalCharacters = response.data.results.length;
      const randomIndex = Math.floor(Math.random() * totalCharacters);
      const randomCharacter = response.data.results[randomIndex];
      setDados([randomCharacter]);
    } catch {
      setDados([]);
      setErro(true);
    } finally {
      setCarregando(false);
    }
  }, [personagem]);

  const item = dados[0];

  return (
    <Container source={background} resizeMode="cover">
      <StatusBar style="light" />

      <ScrollContent
        contentContainerStyle={{ flexGrow: 1, paddingBottom: space.xl }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <HeaderBlock style={{ paddingTop: insets.top + 12 }}>
          <TituloImg source={ImgTitulo} resizeMode="contain" />
        </HeaderBlock>

        <HeroWrap>
          <ImgBackground
            source={RickMorty}
            resizeMode="cover"
            style={{ minHeight: heroMinHeight }}
          >
            <HeroOverlay pointerEvents="none" />
            <HeroInner>
              <SearchRow>
                <InputStyle
                  placeholder="Buscar personagem..."
                  placeholderTextColor={colors.textMuted}
                  onChangeText={setPersonagem}
                  value={personagem}
                  returnKeyType="search"
                  onSubmitEditing={searchPersonagem}
                />
                <BotaoSearch onPress={searchPersonagem} accessibilityRole="button" accessibilityLabel="Buscar">
                  <FotoSearch source={img} />
                </BotaoSearch>
              </SearchRow>
            </HeroInner>
          </ImgBackground>
        </HeroWrap>

        <ResultsSection>
          {carregando ? (
            <CardConteudo style={{ alignItems: 'center' }}>
              <LottieView
                autoPlay
                style={{ width: lottieSize, height: lottieSize }}
                source={require('../../../assets/loading.json')}
              />
              <LottieView
                autoPlay
                style={{ width: lottieSize * 0.65, height: lottieSize * 0.65 }}
                source={require('../../../assets/carregando.json')}
              />
              <LoadingHint>Abrindo portal…</LoadingHint>
            </CardConteudo>
          ) : erro ? (
            <CardConteudo>
              <ErrorFigure>
                <RNImage source={ImgError} style={errorImageStyle} resizeMode="contain" />
              </ErrorFigure>
              <ErrorText>
                Por incresça que parível, não tem ninguém com esse nome!
              </ErrorText>
            </CardConteudo>
          ) : item ? (
            <CardConteudo>
              <CharImageWrap>
                <ImageBottom source={{ uri: item.image }} resizeMode="cover" />
              </CharImageWrap>
              <CharName>{item.name}</CharName>

              <MetaRow>
                <Pill style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <StatusDot style={{ backgroundColor: statusColor(item.status) }} />
                  <PillText style={{ color: colors.text }}>{item.status}</PillText>
                </Pill>
                <Pill>
                  <PillText style={{ color: colors.text }}>{item.species}</PillText>
                </Pill>
              </MetaRow>

              <LocationBox>
                <LocationLabel>Última vez visto(a)</LocationLabel>
                <LocationText>{item.location?.name ?? '—'}</LocationText>
              </LocationBox>
            </CardConteudo>
          ) : (
            <CardConteudo style={{ alignItems: 'center', paddingVertical: 24 }}>
              <PillText style={{ textAlign: 'center', textTransform: 'none', fontWeight: '600' }}>
                Use a busca acima para sortear um personagem que combine com o nome digitado.
              </PillText>
            </CardConteudo>
          )}
        </ResultsSection>
      </ScrollContent>
    </Container>
  );
}
