import React from 'react';

import {SafeAreaView} from "react-native-safe-area-context";

const Content = ({children}: any) => {
    return (
        <SafeAreaView style={{ flex: 1, padding: 20 }}>
            {children}
        </SafeAreaView>
    );
};

export default Content;
