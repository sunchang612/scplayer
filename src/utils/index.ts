import { Dimensions } from 'react-native'

// 获取屏幕的宽高
const { width: viewWidth, height: viewHeight } = Dimensions.get('window')
const uiWidthPx = 375

const rem = (upx: number) => {
    return upx * viewWidth / uiWidthPx
}

/**
 * 根据百分比获取宽度
 * @param percentage
 * @returns 
 */
const wp = (percentage: number) => {
    const value = (percentage * viewWidth) / 100
    return Math.round(value)
}

/**
 * 
 * @param percentage
 * @returns 
 */const hp = (percentage: number) => {
    const value = (percentage * viewHeight) / 100
    return Math.round(value)
}

export {
    viewWidth,
    viewHeight,
    wp,
    hp,
    rem
}