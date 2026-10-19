import React, {ComponentProps} from 'react';

import {LinearGradient} from "expo-linear-gradient";
import Content from "@/components/Content";

const AppGradient = ({
                        children,
                        colors
                     }: {
    children: any,
    colors: ComponentProps<typeof LinearGradient>['colors'];
}) => {
    return (
        <LinearGradient colors={colors} style={{ flex: 1 }}>
            <Content>{children}</Content>
        </LinearGradient>
    );
};

export default AppGradient;
