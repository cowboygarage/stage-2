import React, { useState, useEffect } from "react";
import { IconButton } from "react-native-paper";
import { Text, View, Image, ScrollView, RefreshControl } from "react-native";
import styles from "../styles";
import items from "./CatalogItems";

export default function MainPage() {
  // Page Refresh Functionality
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(!refreshing);
    wait(1).then(() => setRefreshing(false));
  }, []);

  // Randomize Array of Items on Refresh
  const [itemArray, setItemArray] = useState([]);
  useEffect(() => {
    const randomizeItem = [...items].sort(() => 0.5 - Math.random());
    setItemArray(randomizeItem);
  }, [refreshing]);

  // Updating 'like' on a copy of list
  const [userList, setUserList] = useState(items);
  const handleChange = (itemId) => {
    const newItems = [...userList];
    newItems[itemId].like = !newItems[itemId].like;
    setUserList(newItems);
  };

  return (
    <ScrollView
      style={styles.MainPage}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.row}>
        {itemArray.map((item, index) => {
          return (
            <View key={index} style={styles.container}>
              <View style={styles.box}>
                <Image style={styles.productimg} source={item.source} />
                <View style={styles.bottomBox}>
                  <View style={styles.textBox}>
                    <Text style={styles.productname}>{item.name}</Text>
                    <Text style={styles.productprice}>${item.price}</Text>
                  </View>
                  <IconButton
                    onPress={() => handleChange(item.id)}
                    icon={() => (
                      <Image
                        source={
                          item.like
                            ? require("../assets/heartFilled.png")
                            : require("../assets/heartClear.png")
                        }
                        style={styles.likeIcon}
                      />
                    )}
                  />
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
