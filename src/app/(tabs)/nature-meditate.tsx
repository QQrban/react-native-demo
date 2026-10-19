import React from 'react';

import {FlatList, ImageBackground, Pressable, StatusBar, Text, View} from 'react-native';
import AppGradient from "@/components/AppGradient";

import {MEDITATION_DATA} from "@/constants/MeditationData";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import {LinearGradient} from "expo-linear-gradient";


const NatureMeditate = () => {
    return (
        <View className="flex-1">
            <StatusBar barStyle="light-content" />
            <AppGradient colors={['#161b23', "#0a4d4a", "#766e67"]}>
                <View className="flex-1">
                    <View className="mb-6">
                        <Text className="text-gray-50 mb-3 font-bold text-3xl text-left">
                            Welcome
                        </Text>
                        <Text className="text-gray-50 text-xl text-left">
                            This is Nature Meditate Page
                        </Text>
                    </View>
                    <View className="flex-1">
                        <FlatList
                            style={{ flex: 1 }}
                            data={MEDITATION_DATA}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <Pressable
                                    className="h-52 my-3 overflow-hidden rounded-md"
                                    onPress={() => console.log("yo")}
                                >
                                    <ImageBackground
                                        source={MEDITATION_IMAGES[item.id -1]}
                                        className="flex-1 rounded-md justify-center"
                                    >
                                        <LinearGradient
                                            colors={['transparent', "rgba(0,0,0,0.8)"]}
                                            style={{
                                                flex: 1,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <Text
                                                className="text-gray-50 text-3xl font-bold text-center"
                                            >
                                                {item.title}
                                            </Text>
                                        </LinearGradient>
                                    </ImageBackground>
                                </Pressable>
                            )}
                        />
                    </View>
                </View>
            </AppGradient>
        </View>
    );
};

export default NatureMeditate;
