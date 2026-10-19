import React from 'react';

import {ImageBackground, Text, View} from 'react-native';

import bg from '@/assets/images/bg.webp';
import {LinearGradient} from "expo-linear-gradient";
import CustomButton from "@/components/CustomButton";
import { SafeAreaView } from 'react-native-safe-area-context';
import {useRouter} from "expo-router";

const Index = () => {
    const router = useRouter();

    return (
        <View className="flex-1">
            <ImageBackground
                source={bg}
                resizeMode="cover"
                style={{ flex: 1 }}
            >
            <LinearGradient
                style={{ flex: 1 }}
                colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}
            >
                <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom']}>
                <View className="flex-1 mx-5 my-12 justify-between">
                    <View>
                        <Text className="text-center text-white font-bold text-4xl">
                            Simple Meditation!
                        </Text>
                        <Text className="mt-3 text-center text-white text-2xl font-normal">
                            For Everyone
                        </Text>
                    </View>
                    <View>
                        <CustomButton
                            onPress={() => router.push('/nature-meditate')}
                            title="Get Started"
                            containerStyles="py-4"
                        />
                    </View>
                </View>
                </SafeAreaView>
            </LinearGradient>
        </ImageBackground>
        </View>
    );
};

export default Index;
