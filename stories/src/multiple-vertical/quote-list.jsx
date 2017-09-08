// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from '../../../src';
import QuoteItem from '../primatives/quote-item';
import { grid, colors } from '../constants';
import type { Quote } from '../types';
import type {
  DroppableProvided,
  DroppableStateSnapshot,
  DraggableProvided,
  DraggableStateSnapshot,
} from '../../../src/';

const Wrapper = styled.div`
  background-color: ${({ isDraggingOver }) => (isDraggingOver ? colors.blue.lighter : colors.blue.light)};
  display: flex;
  flex-direction: column;
  opacity: ${({ isDropDisabled }) => (isDropDisabled ? 0.5 : 1)};
  padding: ${grid}px;
  padding-bottom: 0;
  transition: background-color 0.1s ease, opacity 0.1s ease;
  user-select: none;
  width: 250px;
`;

const DropZone = styled.div`
  /* stop the list collapsing when empty */
  min-height: 250px;
`;

const ScrollContainer = styled.div`
  overflow: auto;
  max-height: 400px;
`;

const Container = styled.div`
  /* flex child */
  flex-grow: 1;

  /* flex parent */
  display: flex;
  flex-direction: column;
`;

const Title = styled.h4`
  margin-bottom: ${grid}px;
`;

export default class QuoteList extends Component {
  props: {|
    listId: string,
    listType?: string,
    internalScroll?: boolean,
    isDropDisabled?: boolean,
    quotes: Quote[],
    style?: Object,
  |}

  renderBoard = (dropProvided: DroppableProvided) => {
    const { listId, listType, quotes } = this.props;

    return (
      <Container>
        <Title>{listId}</Title>
        <DropZone innerRef={dropProvided.innerRef}>
          {quotes.map((quote: Quote) => (
            <Draggable key={quote.id} draggableId={quote.id} type={listType}>
              {(dragProvided: DraggableProvided, dragSnapshot: DraggableStateSnapshot) => (
                <div>
                  <QuoteItem
                    key={quote.id}
                    quote={quote}
                    isDragging={dragSnapshot.isDragging}
                    provided={dragProvided}
                  />
                  {dragProvided.placeholder}
                </div>
            )}
            </Draggable>
          ))}
          {dropProvided.placeholder}
        </DropZone>
      </Container>
    );
  }

  render() {
    const { listId, listType, internalScroll, isDropDisabled, style } = this.props;

    return (
      <Droppable droppableId={listId} isDropDisabled={isDropDisabled} type={listType}>
        {(dropProvided: DroppableProvided, dropSnapshot: DroppableStateSnapshot) => (
          <Wrapper
            style={style}
            isDraggingOver={dropSnapshot.isDraggingOver}
            isDropDisabled={isDropDisabled}
          >
            {internalScroll ? (
              <ScrollContainer>
                {this.renderBoard(dropProvided)}
              </ScrollContainer>
            ) : (
              this.renderBoard(dropProvided)
            )}
          </Wrapper>
        )}
      </Droppable>
    );
  }
}
