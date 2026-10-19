import React from 'react';

import {ScrollView, Text, View} from 'react-native';
import AppGradient from "@/components/AppGradient";

import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";
import GuidedAffirmationsGallery from "@/components/GuidedAffirmationsGallery";

const Affirmations = () => {
    return (
        <View className="flex-1">
            <AppGradient colors={['#2e1f58', "#54426b", '#a790af']}>
                <ScrollView showsHorizontalScrollIndicator={false}>
                    <Text
                        className="text-zinc-100 text-3xl font-bold"
                    >
                        Change your thoughts and you change your world
                    </Text>
                    <View>
                        {AFFIRMATION_GALLERY.map((g) => (
                            <GuidedAffirmationsGallery key={g.title} title={g.title} products={g.data}/>
                        ))}
                    </View>
                </ScrollView>
            </AppGradient>
        </View>
    );
};

export default Affirmations;
