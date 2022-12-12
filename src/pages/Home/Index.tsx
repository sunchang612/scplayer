import React, { useEffect } from 'react';
import {
  View,
  Text,
  Pressable,
  FlatList,
  ScrollView,
  SafeAreaView
} from 'react-native';
import SwiperModule from './Swiper';
import RecommendModule from './Recommend';

function HomeScreen(props: any) {
    const handleToDetail = () => {
        props.navigation.navigate('Details')
    }

    useEffect(() => {
        props.navigation.setOptions({
            headerTrasparent: true
        })
    }, [])

    const renderItem = () => {
        return (<>
            
        </>)
    }
    return (
        <SafeAreaView>
            <ScrollView style={{}}>
                <SwiperModule />
                <View>
                    <Text>推荐歌单</Text>
                    
                </View>
                <RecommendModule />
            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen
