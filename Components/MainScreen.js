import React from "react";
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'native-base';
import {
    HomeTab,
    AddMediaTab,
    LikesTab,
    ProfileTab,
    SearchTab
} from './AppTabNavigator/index';

const AppTabNavigator = createBottomTabNavigator({
    HomeTab: {
        screen: HomeTab
    },
    SearchTab: {
        screen: SearchTab
    },
    AddMediaTab: {
        screen: AddMediaTab
    },
    LikesTab: {
        screen: LikesTab
    },
    ProfileTab: {
        screen: ProfileTab
    }
}, {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
        activeTintColor: "black",
        inactiveTintColor: "gray",
        showLabel: false,
        showIcon: true,
        style: {
            ...Platform.select({
                android: {
                    backgroundColor: "white"
                }
            })
        }
    },
    navigationOptions: {
        header: null,
        headerLeft: <Icon
            style={{ paddingLeft: 10 }}
            name="camera" 
        />,
        title: "Instagram",
        headerRight: <Icon
            style={{ paddingRight: 10 }}
            name="paper-plane"
        />
    }
});

export default AppTabNavigator;