/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconWode: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 82.922667a424.938667 424.938667 0 0 1 196.544 47.872C762.453333 107.573333 821.482667 96 885.333333 96c23.786667 0 39.253333 25.034667 28.618667 46.314667a7024.8 7024.8 0 0 0-56.917333 116.234666A424.853333 424.853333 0 0 1 938.666667 509.589333c0 235.637333-191.029333 426.666667-426.666667 426.666667s-426.666667-191.029333-426.666667-426.666667c0-235.648 191.029333-426.666667 426.666667-426.666666zM330.666667 362.666667a42.666667 42.666667 0 0 0-42.666667 42.666666v64a42.666667 42.666667 0 1 0 85.333333 0v-64a42.666667 42.666667 0 0 0-42.666666-42.666666z m170.666666 0a42.666667 42.666667 0 0 0-42.666666 42.666666v64a42.666667 42.666667 0 1 0 85.333333 0v-64a42.666667 42.666667 0 0 0-42.666667-42.666666z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconWode.defaultProps = {
  size: 18,
};

IconWode = React.memo ? React.memo(IconWode) : IconWode;

export default IconWode;
