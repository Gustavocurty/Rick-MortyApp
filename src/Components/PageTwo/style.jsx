import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { colors, radii, space } from '../../theme';

export const Container = styled.ImageBackground`
  flex: 1;
`;

export const AppBar = styled.View`
  width: 100%;
  padding-bottom: ${space.sm}px;
  padding-horizontal: ${space.lg}px;
  background-color: ${colors.forest};
  border-bottom-width: 2px;
  border-bottom-color: ${colors.portalDim};
`;

export const AppBarTitle = styled.Text`
  color: ${colors.text};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
`;

export const AppBarSub = styled.Text`
  color: ${colors.portal};
  font-size: 12px;
  margin-top: 2px;
  font-weight: 600;
`;

export const ScrollArea = styled(ScrollView)`
  flex: 1;
  width: 100%;
`;

export const PageInner = styled.View`
  width: 100%;
  max-width: 480px;
  padding-top: ${space.md}px;
`;

export const TituloImg = styled.Image`
  width: 100%;
  height: 96px;
  margin-bottom: ${space.md}px;
`;

export const Section = styled.View`
  width: 100%;
  padding: ${space.lg}px;
  margin-bottom: ${space.md}px;
  border-radius: ${radii.lg}px;
  background-color: ${colors.card};
  border-width: 1px;
  border-color: ${colors.border};
  shadow-color: #000;
  shadow-offset: 0px 8px;
  shadow-opacity: 0.25;
  shadow-radius: 12px;
  elevation: 8;
`;

export const SectionTitle = styled.Text`
  font-size: 24px;
  font-weight: 800;
  color: ${colors.text};
  margin-bottom: ${space.sm}px;
  letter-spacing: -0.3px;
`;

export const Body = styled.Text`
  font-size: 15px;
  color: ${colors.textMuted};
  line-height: 22px;
  text-align: left;
`;

export const LinkText = styled.Text`
  font-size: 15px;
  color: ${colors.cyan};
  font-weight: 600;
  line-height: 22px;
`;

export const VideoShell = styled.View`
  width: 100%;
  border-radius: ${radii.md}px;
  overflow: hidden;
  background-color: ${colors.cardElevated};
  border-width: 1px;
  border-color: ${colors.border};
`;
