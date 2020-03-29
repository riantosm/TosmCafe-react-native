import React from 'react';
import {View, Text, Animated, TouchableOpacity} from 'react-native';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';

// Styles
import styles from '../styles/Styles';

const HistoryComp = props => {
  return (
    <View style={[styles.margin.vertical[20]]}>
      <View style={styles.flex.directionRow}>
        <Animated.View
          style={[
            styles.width.percent[50],
            {
              right: props.toCenter.interpolate({
                inputRange: [0, 1],
                outputRange: [20, 0],
              }),
            },
          ]}>
          <View style={{alignSelf: 'flex-start', marginLeft: 20}}>
            <Text
              style={[
                styles.custom.carousell.title,
                styles.font.gothaMed,
                styles.text.whiteBlack,
                styles.text.center,
              ]}>
              Today's incomes
            </Text>
            <View style={[styles.flex.directionRow, styles.margin.left[10]]}>
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
                  styles.text.green,
                  styles.text.center,
                ]}>
                422.000
              </Text>
            </View>
            <Text
              style={[
                styles.font.googleSansReg,
                styles.text.whiteBlack,
                styles.text.center,
                styles.font.size15,
              ]}>
              Total order{' '}
              <Text style={[styles.font.googleSansBold, styles.text.orange]}>
                17
              </Text>
            </Text>
          </View>
        </Animated.View>
        <Animated.View
          style={[
            styles.width.percent[50],
            {
              left: props.toCenter.interpolate({
                inputRange: [0, 1],
                outputRange: [20, 0],
              }),
            },
          ]}>
          <View style={{alignSelf: 'flex-end', marginRight: 20}}>
            <Text
              style={[
                styles.custom.carousell.title,
                styles.font.gothaMed,
                styles.text.whiteBlack,
                styles.text.center,
              ]}>
              Year's incomes
            </Text>
            <View style={[styles.flex.directionRow, styles.margin.left[10]]}>
              <Text
                style={[
                  styles.font.size12,
                  styles.text.white,
                  styles.font.googleSansBold,
                  {textAlignVertical: 'top', paddingTop: 10},
                ]}>
                Rp{' '}
              </Text>
              <Text
                style={[
                  styles.font.size25,
                  styles.margin.vertical[10],
                  styles.font.googleSansBold,
                  styles.text.green,
                  styles.text.center,
                ]}>
                42.422.000
              </Text>
            </View>
            <TouchableOpacity>
              <Text
                style={[
                  styles.font.googleSansReg,
                  styles.text.whiteBlack,
                  styles.text.center,
                  styles.font.size15,
                ]}>
                View detail{' '}
                <Text style={[styles.font.googleSansBold, styles.text.orange]}>
                  <IconMC
                    name="arrow-right-circle-outline"
                    style={styles.align.self}
                    size={15}
                    style={[styles.text.center]}
                  />
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
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
  );
};

export default HistoryComp;
