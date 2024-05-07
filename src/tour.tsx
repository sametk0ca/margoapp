import React from "react";
import { View, Text, ImageBackground, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import Carousel from "react-native-snap-carousel"; // Carousel ekleyin
import styles from "../styles/TourScreenStyles";

const Tour = () => {
  // Carousel için örnek fotoğraf dizisi
  const carouselImages = [
    require("../assets/margo.png"),
    require("../assets/margo.png"),
    require("../assets/margo.png"),
    require("../assets/margo.png"),
    require("../assets/margo.png"),
  ];

  // Carousel bileşeni için özel işlev
  const renderCarouselItem = ({ item, index }) => {
    return (
      <ImageBackground source={item} style={styles.carouselItem} key={index} />
    );
  };

  return (
    <ImageBackground
      source={require("../assets/margo.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Margo</Text>
        <Text style={styles.subtitle}>Yeni film ve dizileri takip edin</Text>

        {/* Carousel */}
        <ScrollView>
          <Carousel
            data={carouselImages}
            renderItem={renderCarouselItem}
            sliderWidth={300}
            itemWidth={300}
          />
        </ScrollView>

        {/* Carousel indicator */}
        <View style={styles.indicatorContainer}>
          {carouselImages.map((_, i) => (
            <View
              key={i}
              style={[
                styles.indicator,
                i === 0 ? styles.activeIndicator : null,
              ]}
            />
          ))}
        </View>

        {/* Signup ve login butonları */}
        <View style={styles.buttons}>
          <Button title="Kayıt Ol" onPress={() => {}} />
          <Button title="Giriş Yap" onPress={() => {}} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Tour;
