import React from 'react'
import { View, Text } from 'react-native'
// Styles
import styles from '../styles/Styles';

const HistoryComp = () => {
  return (
    <View style={[styles.margin.vertical[20]]}>
      <View style={[styles.flex.directionRow, styles.flex.justify]}>
        <View style={[styles.width.percent[50]]}>
          <Text
            style={[
              styles.custom.carousell.title,
              styles.font.googleSansBold,
              styles.text.whiteBlack,
            ]}>
            Today's incomes
          </Text>
          <View style={styles.flex.directionRow}>
            <Text
              style={[
                styles.font.size12,
                styles.text.white,
                styles.font.googleSansBold,
                {textAlignVertical: 'top', paddingTop: 5},
              ]}>
              Rp{' '}
            </Text>
            <Text
              style={[
                styles.font.size25,
                styles.margin.vertical[10],
                styles.font.googleSansBold,
                styles.text.white,
              ]}>
              150000
            </Text>
          </View>
        </View>
        <View style={[styles.width.percent[50]]}>
          <Text
            style={[
              styles.custom.carousell.title,
              styles.font.googleSansBold,
              styles.text.whiteBlack,
            ]}>
            Total order
          </Text>
          <Text
            style={[
              styles.font.size25,
              styles.margin.vertical[10],
              styles.font.googleSansBold,
              styles.text.white,
            ]}>
            17
          </Text>
        </View>
      </View>
      {/* <View style={[styles.width.percent[100]]}>
        <Text
          style={[
            styles.custom.carousell.title,
            styles.font.googleSansBold,
            styles.text.whiteBlack,
            // styles.text.center,
          ]}>
          View History >
        </Text>
      </View> */}
    </View>
  )
}

export default HistoryComp