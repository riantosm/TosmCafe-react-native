// Library
import React from 'react';
import {Text, View, TouchableOpacity, Animated} from 'react-native';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';

// Styles
import styles from '../styles/Styles';

const MenuComp = props => {
  return (
    <View
      style={[
        styles.bg.white,
        styles.shadow.md,
        styles.custom._.menuBox,
        styles.flex.directionRow,
        styles.flex.justify,
        styles.width.percent[90],
      ]}>
      <TouchableOpacity
        style={[styles.custom._.itemMenu]}
        onPress={() => alert('Menu Product')}>
        <View>
          <IconMC
            name="silverware"
            style={styles.align.self}
            size={30}
            style={[styles.text.blue, styles.text.center]}
          />
          <Text style={[styles.text.center, styles.font.air, styles.text.blue]}>
            Product
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.custom._.itemMenu]}
        onPress={() => alert('Menu Cart')}>
        <View>
          <IconMC
            name="cart-plus"
            style={styles.align.self}
            size={30}
            style={[styles.text.blue, styles.text.center]}
          />
          <Text style={[styles.text.center, styles.font.air, styles.text.blue]}>
            Cart
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.custom._.itemMenu]}
        onPress={() => alert('Menu History')}>
        <View>
          <IconMC
            name="history"
            style={styles.align.self}
            size={30}
            style={[styles.text.blue, styles.text.center]}
          />
          <Text style={[styles.text.center, styles.font.air, styles.text.blue]}>
            History
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MenuComp;
