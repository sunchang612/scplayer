import { } from 'react'
import { View, ScrollView, StyleSheet, Image, Text } from 'react-native'
import { rem } from '../../utils'

const JayImage = require('../../assets/Jay.webp')

interface Props {

}

const RecommendModule = () => {
    return (
        <ScrollView alwaysBounceHorizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.card_wrap}>
                <View>
                    <Image style={styles.cover_Image} source={JayImage} />
                    <Text>播放</Text>
                </View>
                <Text>周杰伦歌单</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cover_Image: {
        width: rem(100),
        height: rem(100)
    },
    card_wrap: {
        marginTop: rem(10),
        color: 'red',
    }
})

export default RecommendModule
