/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconWode from './IconWode';
import IconYinlemusic215 from './IconYinlemusic215';
export { default as IconWode } from './IconWode';
export { default as IconYinlemusic215 } from './IconYinlemusic215';

export type IconNames = 'wode' | 'yinlemusic215';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'wode':
      return <IconWode key="1" {...rest} />;
    case 'yinlemusic215':
      return <IconYinlemusic215 key="2" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
