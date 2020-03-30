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

const renderListCategory = (category, index) => {
  return (
    <TouchableOpacity
      onPress={() => alert(`Show product by ${category.name}`)}
      key={category.id}>
      <View
        style={[
          styles.bg.white,
          styles.shadow.sm,
          {
            borderRadius: 10,
            paddingHorizontal: 20,
            paddingVertical: 10,
            margin: 15,
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
            Product
          </Text>
          <TouchableOpacity
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

        {/* search */}
        <View
          style={[
            styles.width.percent[90],
            styles.align.self,
            styles.margin.bottom[10],
            styles.custom.carousell.box,
            styles.bg.white,
            styles.shadow.sm,
          ]}>
          <TextInput
            placeholder="Search..."
            style={[
              {
                borderBottomWidth: 1,
                borderBottomColor: 'gray',
                paddingVertical: 10,
                paddingHorizontal: 15,
              },
            ]}
          />

          <FlatList
            data={props.product}
            renderItem={({item}) => (
              <View style={[styles.flex.directionRow, styles.margin.top[20]]}>
                <View
                  style={[
                    styles.flex.directionRow,
                    styles.flex.justify,
                    styles.width.percent[100],
                  ]}>
                  <Image
                    source={item.image}
                    style={[{width: 50, height: 50}]}
                  />
                  <View style={[{padding: 7, width: '40%'}]}>
                    <Text
                      numberOfLines={1}
                      style={[
                        styles.text.blue,
                        styles.font.size15,
                        styles.font.air,
                        styles.font.w,
                      ]}>
                      {item.name} asd ad asd ad asdadsdasdada
                    </Text>
                    <Text
                      style={[
                        styles.text.gray,
                        styles.font.size12,
                        styles.font.gothaMed,
                        {paddingTop: 3},
                      ]}>
                      {item.category}
                    </Text>
                  </View>
                  <View
                    style={[
                      {
                        width: 'auto',
                        alignItems: 'center',
                        flexDirection: 'row',
                      },
                    ]}>
                    <TouchableOpacity
                      style={[
                        styles.height.normal[20],
                        {paddingHorizontal: 10},
                      ]}>
                      <Text style={[styles.font.googleSansBold, styles.text.orange]}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        styles.height.normal[20],
                        {paddingHorizontal: 10},
                      ]}>
                      <Text style={[styles.font.googleSansBold, styles.text.red]}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
        {/* search */}
      </View>
    </Animated.View>
  );
};

export default ListCategoryComp;
