import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';

const ReadMoreText = ({ text, maxLength }) => {
  const [showFullText, setShowFullText] = useState(false);
  const truncatedText = text.slice(0, maxLength);

  return (

    <View style={{ alignItems: 'center' }}>
      <Text style={{ color: colors.white, lineHeight: 25, fontSize: 12, alignSelf: 'center' }}>{showFullText ? text : truncatedText}
        {text.length > maxLength && !showFullText && (
          <TouchableOpacity onPress={() => setShowFullText(true)}>
            <Text style={{ alignSelf: 'center', fontSize: 12, lineHeight: 22, color: 'white', fontWeight: 'bold' }}>Read More</Text>
          </TouchableOpacity>
        )}
      </Text >
    </View>


  );
};

export default ReadMoreText;