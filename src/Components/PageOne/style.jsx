import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { colors, radii, space } from '../../theme';

export const Container = styled.ImageBackground`
  flex: 1;
`;

/** ScrollView explícito do RN evita `styled.ScrollView` indefinido em alguns bundles (Expo/Metro). */
export const ScrollContent = styled(ScrollView)`
  flex: 1;
  width: 100%;
`;

export const HeaderBlock = styled.View`
  width: 100%;
  padding-horizontal: ${space.lg}px;
  padding-top: ${space.md}px;
  align-items: center;
`;

export const TituloImg = styled.Image`
  width: 100%;
  max-width: 420px;
  height: 100px;
`;

export const HeroWrap = styled.View`
  width: 100%;
  padding-horizontal: ${space.lg}px;
  margin-top: ${space.md}px;
`;

export const ImgBackground = styled.ImageBackground`
  width: 100%;
  border-radius: ${radii.lg}px;
  overflow: hidden;
  border-width: 1px;
  border-color: ${colors.border};
`;

export const HeroOverlay = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(13, 17, 23, 0.58);
`;

export const HeroInner = styled.View`
  width: 100%;
  min-height: 140px;
  padding: ${space.lg}px;
  justify-content: flex-end;
`;

export const SearchRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InputStyle = styled.TextInput`
  flex: 1;
  min-width: 0;
  background-color: ${colors.text};
  color: ${colors.space};
  height: 48px;
  border-radius: ${radii.full}px;
  padding-horizontal: ${space.lg}px;
  font-size: 16px;
  font-weight: 500;
`;

export const BotaoSearch = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  margin-left: ${space.sm}px;
  border-radius: ${radii.full}px;
  background-color: ${colors.portal};
  align-items: center;
  justify-content: center;
  shadow-color: ${colors.portalGlow};
  shadow-offset: 0px 4px;
  shadow-opacity: 0.35;
  shadow-radius: 8px;
  elevation: 6;
`;

export const FotoSearch = styled.Image`
  width: 22px;
  height: 22px;
  tint-color: ${colors.space};
`;

export const ResultsSection = styled.View`
  width: 100%;
  padding-horizontal: ${space.lg}px;
  padding-top: ${space.lg}px;
  padding-bottom: ${space.xl}px;
  align-items: center;
`;

export const CardConteudo = styled.View`
  width: 100%;
  max-width: 420px;
  align-self: center;
  padding: ${space.lg}px;
  background-color: ${colors.card};
  border-radius: ${radii.lg}px;
  border-width: 1px;
  border-color: ${colors.border};
  shadow-color: #000;
  shadow-offset: 0px 12px;
  shadow-opacity: 0.35;
  shadow-radius: 20px;
  elevation: 12;
`;

export const CharImageWrap = styled.View`
  border-radius: ${radii.md}px;
  overflow: hidden;
  border-width: 2px;
  border-color: ${colors.portalDim};
`;

/** Só para imagem local de erro: moldura acompanha o tamanho real da arte (sem forçar quadrado). */
export const ErrorFigure = styled.View`
  width: 100%;
  border-radius: ${radii.md}px;
  overflow: hidden;
  border-width: 2px;
  border-color: ${colors.portalDim};
  background-color: ${colors.cardElevated};
  align-items: center;
`;

export const ImageBottom = styled.Image`
  width: 100%;
  aspect-ratio: 1;
  max-height: 320px;
`;

export const CharName = styled.Text`
  font-size: 22px;
  font-weight: 800;
  color: ${colors.text};
  text-align: center;
  margin-top: ${space.md}px;
  letter-spacing: -0.3px;
`;

export const MetaRow = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${space.sm}px;
  margin-top: ${space.md}px;
`;

export const Pill = styled.View`
  padding-vertical: ${space.xs}px;
  padding-horizontal: ${space.md}px;
  border-radius: ${radii.full}px;
  background-color: ${colors.cardElevated};
  border-width: 1px;
  border-color: ${colors.border};
`;

export const PillText = styled.Text`
  font-size: 13px;
  font-weight: 700;
  color: ${colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const StatusDot = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-right: 6px;
`;

export const LocationBox = styled.View`
  margin-top: ${space.md}px;
  padding: ${space.md}px;
  border-radius: ${radii.md}px;
  background-color: ${colors.cardElevated};
  border-left-width: 4px;
  border-left-color: ${colors.cyan};
`;

export const LocationLabel = styled.Text`
  font-size: 11px;
  font-weight: 700;
  color: ${colors.cyan};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 4px;
`;

export const LocationText = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: ${colors.text};
  line-height: 22px;
`;

export const ErrorText = styled.Text`
  font-size: 15px;
  color: ${colors.text};
  text-align: justify;
  line-height: 22px;
  margin-top: ${space.md}px;
`;

export const LoadingHint = styled.Text`
  margin-top: ${space.sm}px;
  font-size: 14px;
  color: ${colors.textMuted};
  text-align: center;
`;
