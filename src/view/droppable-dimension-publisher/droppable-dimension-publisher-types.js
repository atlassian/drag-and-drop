// @flow
import * as React from 'react';
import {
  publishDroppableDimension,
  updateDroppableDimensionIsEnabled,
  updateDroppableDimensionScroll,
} from '../../state/action-creators';
import type {
  DroppableId,
  TypeId,
  Direction,
} from '../../types';

export type MapProps = {|
  shouldPublish: boolean,
|}

export type DispatchProps = {|
  publish: typeof publishDroppableDimension,
  updateIsEnabled: typeof updateDroppableDimensionIsEnabled,
  updateScroll: typeof updateDroppableDimensionScroll,
|}

export type OwnProps = {|
  droppableId: DroppableId,
  direction: Direction,
  ignoreContainerClipping: boolean,
  isDropDisabled: boolean,
  targetRef: ?HTMLElement,
  children: React.Node,
  type: TypeId,
|}

export type Props = {
  ...MapProps,
  ...DispatchProps,
  ...OwnProps
}

// Having issues getting the correct reselect type
// export type Selector = OutputSelector<State, OwnProps, MapProps>;
export type Selector = Function;
