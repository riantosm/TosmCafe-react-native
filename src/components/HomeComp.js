import React from 'react';
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TextInput,
  Image,
} from 'react-native';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';

// Styles
import styles from '../styles/Styles';

const renderListOrder = (order, index) => {
  return (
    <TouchableOpacity key={order.id} id={order.id}>
      <View
        style={[
          styles.flex.directionRow,
          styles.flex.justify,
          styles.margin.top[10],
        ]}>
        <Text style={[styles.width.percent[10]]}>{index + 1}</Text>
        <Text style={[styles.width.percent[30]]}>{order.invoice}</Text>
        <Text style={[styles.width.percent[30]]}>Rp {order.totalOrder}</Text>
        <Text style={[styles.width.percent[30]]}>{order.date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const HomeComp = props => {
  return (
    <Animated.View
      style={[
        styles.custom._.bgBottom,
        {
          // borderWidth: 1,
          // opacity: props.ListCategoryOpacity,
          marginTop: props.HomeMt.interpolate({
            inputRange: [0, 1],
            outputRange: [50, 20],
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
              styles.width.percent[40],
              styles.font.air,
              styles.text.bottom,
              styles.font.size20,
              styles.text.grayBlack,
              styles.height.normal[30],
            ]}>
            Recent Orders
          </Text>
          {/* <TouchableOpacity
            style={[styles.width.percent[60]]}
            onPress={() => alert('List Category')}>
            <Text
              style={[
                styles.font.air,
                styles.text.right,
                styles.text.bottom,
                styles.text.blue,
                styles.height.normal[30],
              ]}>
              Edit Category
              <IconMC
                name="square-edit-outline"
                style={[styles.align.self, styles.text.top]}
                size={15}
              />
            </Text>
          </TouchableOpacity> */}
        </View>
      </View>
      <View
        style={[
          styles.width.percent[100],
          styles.bg.white,
          styles.shadow.sm,
          styles.margin.vertical[20],
          styles.padding.vertical[20],
        ]}>
        <View style={[styles.align.self, styles.width.percent[90]]}>
          <View style={[styles.flex.directionRow, styles.flex.justify]}>
            <Text style={[styles.width.percent[10], styles.font.weight]}>
              #
            </Text>
            <Text style={[styles.width.percent[30], styles.font.weight]}>
              Invoice
            </Text>
            <Text style={[styles.width.percent[30], styles.font.weight]}>
              Total Order
            </Text>
            <Text style={[styles.width.percent[30], styles.font.weight]}>
              Date
            </Text>
          </View>
          <FlatList
            data={props.order}
            renderItem={({item, index}) => renderListOrder(item, index)}
            ListEmptyComponent={
              <View style={{alignItems: 'center', paddingTop: 20}}>
                <Text>- No Data -</Text>
              </View>
            }
          />
        </View>
      </View>
    </Animated.View>
  );
};

export default HomeComp;
