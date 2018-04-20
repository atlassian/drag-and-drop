// @flow
import React from 'react';
import Link from 'gatsby-link';
import { colors } from '@atlaskit/theme';
import SendIcon from '@atlaskit/icon/glyph/send';
import BookIcon from '@atlaskit/icon/glyph/book';
import EditIcon from '@atlaskit/icon/glyph/edit';
import styled from 'styled-components';
import { grid } from '../../layouts/constants';
import { shake } from '../animations';

const ActionBox = styled.div`
  display: flex;
  align-items: center;
`;

const ActionLink = styled(Link)`
  border: 2px solid grey;
  margin: ${grid}px;
  padding: ${grid * 1}px ${grid * 2}px;
  border-radius: 2px;
  border-radius: 2px;
  color: ${colors.N10};
  font-size: 1.1rem;
  font-weight: bold;
  user-select: none;
  box-sizing: border-box;

  /* shared border styles */
  border-width: 4px;
  border-style: solid;

  /* used to align the text next to the icon */
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
    text-decoration: none;
    color: ${colors.N10};
  }
`;

const ButtonIcon = styled.span`
  display: flex;
  margin-left: ${grid / 2}px;

  ${ActionLink}:hover &, ${ActionLink}:active & {
    animation: ${shake};
  }
`;

const GetStartedLink = ActionLink.extend`
  background-color: ${colors.G300};
  border-color: ${colors.G100};
  font-size: 1.5rem;
  padding-top: ${grid * 1.4}px;
  padding-bottom: ${grid * 1.4}px;

  :hover, :active {
    background-color: ${colors.G200};
  }
`;

const smallButtonWidth: number = 200;

const ExampleLink = ActionLink.extend`
  background-color: ${colors.Y300};
  border-color: ${colors.Y100};
  width: ${smallButtonWidth}px;
  margin-left: 0;

  :hover, :active {
    background-color: ${colors.Y200};
  }
`;

const DocumentationLink = ActionLink.extend`
  background-color: ${colors.P300}
  border-color: ${colors.P100};
  width: ${smallButtonWidth}px;

  :hover, :active {
    background-color: ${colors.P200};
  }
`;

export default () => (
  <ActionBox>
    <ExampleLink to="/examples">
      <span>Examples</span>
      <ButtonIcon>
        <EditIcon size="medium" label="Examples" />
      </ButtonIcon>
    </ExampleLink>
    <GetStartedLink to="/guides/get-started">
      Get started
      <ButtonIcon>
        <SendIcon size="large" label="Get started" />
      </ButtonIcon>
    </GetStartedLink>
    <DocumentationLink to="/documentation">
      <span>Documentation</span>
      <ButtonIcon>
        <BookIcon size="medium" label="Documentation" />
      </ButtonIcon>
    </DocumentationLink>
  </ActionBox>
);

