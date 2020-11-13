import React from 'react';
import { Text, FlatList, SafeAreaView, ImageBackground, Dimensions, TouchableHighlight, Alert } from 'react-native';
// https://1566378246598-5b11a0d486cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60
const Main = (props) => {
  const imageBaseUrl = "https://images.unsplash.com/photo-";
  const imageParameters = "?auto=format&fit=crop&w=375&q=80";
  //     science https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80
  const dataSource = [
    { category: 'General', 
    imageId: '1566378246598-5b11a0d486cc' },
    { category: 'Technology', 
    imageId: '1478358161113-b0e11994a36b' },
    { category: 'Sports', 
    imageId: '1521412644187-c49fa049e84d' },
    { category: 'Health', 
    imageId: '1526256262350-7da7584cf5eb' },
    { category: 'Business', 
    imageId: '1542222024-c39e2281f121' },
    { category: 'Entertainment', 
    imageId: '1511671782779-c97d3d27a1d4' },
    { category: 'Science',
     imageId: '1507413245164-6160d8298b31' },
   
  ];
 
    const renderItemData = ({ item }) => {
    return (
      
        <TouchableHighlight 
        style={{
          flex:1,
        }}
        onPress={() => props.navigation.navigate("NewsPage", { category: item.category })}>
      <ImageBackground
        source={{ uri: imageBaseUrl + item.imageId + imageParameters }}
        style={{
          // width: Dimensions.get('window').width / 2,
          height: Dimensions.get('window').width / 2,
          justifyContent: 'center',
          
        }}>
        <Text style={{
          textAlign: 'center',
          color: '#fff',
          fontSize: 25,
          fontWeight:"bold",
          letterSpacing:3
        }}>{item.category}</Text>
      </ImageBackground>
      </TouchableHighlight>
    );
  }
 
  return (
    <SafeAreaView style={{
      flex:1,
    }}>
      <FlatList
        data={dataSource}
        renderItem={renderItemData}
        keyExtractor={(_, index) => index.toString()}
        numColumns={2}
      />
    </SafeAreaView>
  );
};
 
export {Main};