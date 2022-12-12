import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import Swiper from 'react-native-swiper';
import {viewWidth, viewHeight, wp, hp, rem} from '../../utils/index';
const snapImg = require('../../assets/swiper-img.jpeg');

console.log('?????');

const SwiperModule = () => {
  const handleClick = () => {
    console.log('mmodule');
  };
  const SwiperItem = () => {
    return (
      <Pressable style={styles.swiper_image} onPress={handleClick}>
        <Image
          style={styles.swiper_image}
          resizeMode="cover"
          source={snapImg}
        />
      </Pressable>
    );
  };
  return (
    <Swiper
      height={200}
      paginationStyle={styles.pagination}
      dot={<View style={[styles.swiper_dot, styles.opacity]} />}
      activeDot={<View style={styles.swiper_dot} />}>
      {SwiperItem()}
      {SwiperItem()}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  swiper_image: {
    flex: 1,
    width: rem(375),
    height: rem(150),
    marginTop: rem(6),
  },
  swiper_dot: {
    width: rem(6),
    height: rem(2),
    marginRight: rem(2),
    backgroundColor: '#fff',
  },
  opacity: {
    opacity: 0.4,
  },

  pagination: {
    bottom: rem(8),
  },
  active_dot: {},
});

export default SwiperModule;
