import React from 'react';

import {ImageBackground, Text, View} from 'react-native';

import bg from '@/assets/images/bg.webp';
import CustomButton from "@/components/CustomButton";
import {useRouter} from "expo-router";
import AppGradient from "@/components/AppGradient";

const Index = () => {
    const router = useRouter();

    return (
        <View className="flex-1">
            <ImageBackground
                source={bg}
                resizeMode="cover"
                style={{ flex: 1 }}
            >
            <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
                <View className="flex-1 justify-around">
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
            </AppGradient>
        </ImageBackground>
        </View>
    );
};

export default Index;
