import React from 'react';

import {FlatList, Text, View, Image} from 'react-native';
import {GalleryPreviewData} from "../../models/AffirmationCategory";

interface IProps {
    title: string;
    products: GalleryPreviewData[];
}

const GuidedAffirmationsGallery = (
    {
        title,
        products}
    : IProps
) => {
    return (
        <View className="my-5">
            <View className="mb-2">
                <Text className="text-white font-bold text-xl">
                    {title}
                </Text>
            </View>
            <View>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={products}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View className="h-36 w-32 rounded-md mr-4">
                            <Image
                                source={item.image}
                                resizeMode="cover"
                                className="w-full h-full"
                            />
                        </View>
                    )}
                />


            </View>
        </View>
    );
};

export default GuidedAffirmationsGallery;
