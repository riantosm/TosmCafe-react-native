import React from 'react';
import {View, Text, Animated, TouchableOpacity, ScrollView} from 'react-native';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';

// Styles
import styles from '../styles/Styles';

const renderListCategory = (category, index) => {
  return (
    <TouchableOpacity onPress={() => alert(`Show product by ${category.name}`)}>
      <View
        key={category.id}
        style={[
          styles.bg.white,
          styles.shadow.md,
          {
            borderRadius: 10,
            paddingHorizontal: 20,
            paddingVertical: 10,
            margin: 20,
            marginRight: 15,
            marginLeft: index ? 0 : 20,
          },
        ]}>
        <Text>{category.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ListCategoryComp = props => {
  return (
    <Animated.View
      style={[
        styles.custom._.bgBottom,
        {
          // borderWidth: 1,
          // opacity: props.ListCategoryOpacity,
          marginTop: props.ListCategoryMt.interpolate({
            inputRange: [0, 1],
            outputRange: [50, 30],
          }),
        },
      ]}>
      <View style={[{marginTop: 0, width: '100%'}]}>
        <View
          style={[
            styles.flex.directionRow,
            styles.flex.wrap,
            styles.padding.horizontal[20],
          ]}>
          <Text
            style={[
              styles.width.percent[80],
              styles.font.air,
              styles.font.size20,
              styles.text.grayBlack,
            ]}>
            Category Product
          </Text>
          <TouchableOpacity
            style={[styles.width.percent[20]]}
            onPress={() => alert('List Category')}>
            <Text
              style={[
                styles.font.air,
                styles.text.right,
                styles.text.bottom,
                styles.text.blue,
              ]}>
              Edit
              <IconMC
                name="square-edit-outline"
                style={styles.align.self}
                size={15}
                style={[styles.text.center]}
              />
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{width: '100%', borderWidth: 0}}>
          {props.category.map((category, index) => {
            return renderListCategory(category, index);
          })}
        </ScrollView>
      </View>
    </Animated.View>
  );
};

export default ListCategoryComp;
