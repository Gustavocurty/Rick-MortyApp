import React, { useMemo } from 'react';
import { useWindowDimensions, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import YoutubeIframe from 'react-native-youtube-iframe';

import background from '../../../assets/background.jpg';
import ImgTitulo from '../../../assets/TituloRickEMorty.webp';
import { space } from '../../theme';

import {
  Container,
  AppBar,
  AppBarTitle,
  AppBarSub,
  ScrollArea,
  PageInner,
  TituloImg,
  Section,
  SectionTitle,
  Body,
  LinkText,
  VideoShell,
} from './style';

const API_URL = 'https://rickandmortyapi.com/';

export default function PageTwo() {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const videoWidth = useMemo(() => Math.max(200, Math.min(440, width - 64)), [width]);
  const videoHeight = useMemo(() => Math.round((videoWidth * 9) / 16), [videoWidth]);

  return (
    <Container source={background} resizeMode="cover">
      <StatusBar style="light" />
      <AppBar style={{ paddingTop: insets.top + 10 }}>
        <AppBarTitle>Informações</AppBarTitle>
        <AppBarSub>API · Conteúdo extra</AppBarSub>
      </AppBar>

      <ScrollArea
        contentContainerStyle={{
          paddingBottom: 32,
          paddingHorizontal: space.lg,
          alignItems: 'center',
        }}
        showsVerticalScrollIndicator={false}
      >
        <PageInner>
          <TituloImg source={ImgTitulo} resizeMode="contain" />

          <Section>
            <SectionTitle>Sobre a API</SectionTitle>
            <Body>
              Os dados deste app vêm da The Rick and Morty API, onde você encontra buscas por
              localidades, episódios e personagens — neste projeto usamos a busca por personagens
              na outra aba.
            </Body>
          </Section>

          <Section>
            <SectionTitle>Documentação</SectionTitle>
            <LinkText
              onPress={() => Linking.openURL(API_URL)}
              accessibilityRole="link"
            >
              {API_URL}
            </LinkText>
          </Section>

          <Section>
            <SectionTitle>Vídeo</SectionTitle>
            <VideoShell style={{ marginTop: 8 }}>
              <YoutubeIframe height={videoHeight} width={videoWidth} play={false} videoId="lDX16SVg6-8" />
            </VideoShell>
          </Section>
        </PageInner>
      </ScrollArea>
    </Container>
  );
}
