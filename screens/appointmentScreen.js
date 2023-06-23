import React, { useState } from "react";
import { SafeAreaView, View, StatusBar, StyleSheet, Text } from "react-native";
import { Colors, Fonts, Sizes, } from "../../constants/styles";
import { TabView, TabBar } from 'react-native-tab-view';
import AppointmentUpcoming from "../appointmentUpcoming/appointmentUpcomingScreen";
import AppointmentPast from "../appointmentPast/appointmentPastScreen";

const AppointmentScreen = ({ navigation }) => {

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Upcoming' },
        { key: 'second', title: 'Past' },
    ]);

    const renderScene = ({ route, jumpTo }) => {
        switch (route.key) {
            case 'first':
                return <AppointmentUpcoming navigation={navigation} />;
            case 'second':
                return <AppointmentPast navigation={navigation} />;
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    renderTabBar={props => (
                        <TabBar
                            {...props}
                            indicatorStyle={{ backgroundColor: Colors.primaryColor, }}
                            style={{ marginHorizontal: Sizes.fixPadding * 2.0, backgroundColor: Colors.whiteColor, elevation: 0.0, }}
                            renderLabel={({ route, focused }) => (
                                <Text
                                    style={focused ? { ...Fonts.primaryColor15Bold } :
                                        { ...Fonts.grayColor15Bold }}>
                                    {route.title}
                                </Text>
                            )}
                        />
                    )}
                />
            </View>
        </SafeAreaView>
    )

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <Text style={{ ...Fonts.blackColor18Bold }}>
                    Appointment
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerWrapStyle: {
        paddingHorizontal: Sizes.fixPadding * 2.0,
        paddingVertical: Sizes.fixPadding + 5.0
    },
});

export default AppointmentScreen;