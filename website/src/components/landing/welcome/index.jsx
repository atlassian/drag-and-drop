// @flow
import React from 'react';
import Media from 'react-media';
import styled from 'react-emotion';
import Board from './board';
import CallToAction from './call-to-action';
import SocialIcons from './social-icons';
import DraggableLogo from './draggable-logo';
import { grid } from '../../../constants';
import { smallView } from '../../media';

const Title = styled.h1`
  font-weight: normal;
  font-size: 40px;
  margin: 0;
  padding-left: ${grid * 2}px;

  ${smallView.fn(`
    text-align: center;
    font-size: 10vw;
    white-space: nowrap;
  `)};
`;

const Tagline = styled.p`
  font-size: 20px;
  ${smallView.fn(`text-align: center`)};
`;

const SideBySide = styled.div`
  padding-top: ${grid * 10}px;
  padding-left: ${grid * 6}px;
  padding-right: ${grid * 6}px;
  max-width: 1400px;
  margin: 0 auto;

  display: flex;
  /* wrap early if we need it (hopefully not!) */
  /* flex-wrap: wrap; */

  ${smallView.fn(`
    flex-direction: column;
    align-items: center;
  `)};
`;

const verticalSpacing = `margin-top: ${grid * 4}px;`;

const VerticalRhythm = styled.div`
  ${verticalSpacing};
`;

const Content = styled.div`
  margin-top: ${grid * 8}px;
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  ${smallView.fn(`
    align-items: center;
  `)};
`;

const Example = styled.div`
  flex-grow: 0;

  ${smallView.fn(`${verticalSpacing}`)};
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
`;

export default () => (
  <Media query={smallView.query}>
    {(isSmall: boolean) => (
      <SideBySide>
        <Content>
          <Brand>
            <DraggableLogo />
            <Title>react-beautiful-dnd</Title>
          </Brand>
          <Tagline>
            Beautiful and accessible drag and drop for lists with React{' '}
          </Tagline>
          <VerticalRhythm>
            <CallToAction isSmallView={isSmall} />
          </VerticalRhythm>
          <VerticalRhythm>
            <SocialIcons />
          </VerticalRhythm>
        </Content>
        <Example>
          <Board numberOfColumns={isSmall ? 1 : 2} />
        </Example>
      </SideBySide>
    )}
  </Media>
);
