import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/Styles';

const VersionComp = () => {
  return (
    <Text
      style={[
        styles.text.center,
        styles.text.blue,
        styles.font.size12,
        styles.font.googleSansBold,
      ]}>
      TosmCafe v1.0.0
    </Text>
  );
};

export default VersionComp;
