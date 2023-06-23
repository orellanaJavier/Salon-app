import React from "react";
import { SafeAreaView, View, StatusBar, StyleSheet, ScrollView, Image, TouchableOpacity, Text } from "react-native";
import { Colors, Fonts, Sizes, } from "../../constants/styles";
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

const servicesList = ['Hair wash herbal', 'Hair color', 'Simple hair cuting - hair wash']

const AppointmentDetailsScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 2.0 }}
                >
                    {salonInfo()}
                    {servicesInfo()}
                    {specialistsInfo()}
                    {dateTimeInfo()}
                    {totalAmountInfo()}
                </ScrollView>
            </View>
            {bookNowButton()}
        </SafeAreaView>
    )

    function bookNowButton() {
        return (
            <View style={styles.bookNowButtonWrapStyle}>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => navigation.push('PaymentMethod')}
                    style={styles.bookNowButtonStyle}
                >
                    <Text style={{ ...Fonts.whiteColor18SemiBold }}>
                        Book Now
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    function totalAmountInfo() {
        return (
            <View style={styles.totalAmountInfoWrapStyle}>
                <Text style={{ ...Fonts.blackColor16Bold }}>
                    Total Amount
                </Text>
                <Text style={{ ...Fonts.blackColor16Bold }}>
                    $209.00
                </Text>
            </View>
        )
    }

    function dateTimeInfo() {
        return (
            <View style={{
                marginHorizontal: Sizes.fixPadding * 2.0,
                marginVertical: Sizes.fixPadding,
            }}>
                <Text style={{ ...Fonts.blackColor15Bold }}>
                    Appointment Date Time
                </Text>
                <Text style={{ ...Fonts.grayColor13SemiBold }}>
                    Thursday • 14 August,2021 • 2:00 pm
                </Text>
            </View>
        )
    }

    function specialistsInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ ...Fonts.blackColor15Bold }}>
                    Selected Specialist
                </Text>
                <Text style={{ ...Fonts.grayColor13SemiBold }}>
                    Joya Patel • Hair stylist
                </Text>
            </View>
        )
    }

    function servicesInfo() {
        return (
            <View style={{
                marginHorizontal: Sizes.fixPadding * 2.0,
                marginVertical: Sizes.fixPadding,
            }}>
                <Text style={{ ...Fonts.blackColor15Bold }}>
                    Services
                </Text>
                <Text>
                    {servicesList.map((item, index) => (
                        <Text key={`${index}`}
                            style={{ ...Fonts.grayColor13SemiBold }}
                        >
                            {item} {index == servicesList.length - 1 ? '' : `• `}
                        </Text>
                    )
                    )}
                </Text>
            </View>
        )
    }

    function salonInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, flexDirection: 'row', alignItems: 'center' }}>
                <Image
                    source={require('../../assets/images/salon/salon2.png')}
                    style={{ width: 70.0, height: 70.0, borderRadius: Sizes.fixPadding }}
                />
                <View style={{ marginLeft: Sizes.fixPadding, }}>
                    <Text style={{ lineHeight: 16.0, ...Fonts.blackColor14Bold }}>
                        Crown salon
                    </Text>
                    <Text style={{ ...Fonts.grayColor12SemiBold }}>
                        A 9/a Sector 16,Gautam Budh Nagar
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <AntDesign
                            name="star"
                            color={Colors.yellowColor}
                            size={13}
                        />
                        <Text style={{ marginLeft: Sizes.fixPadding - 5.0, ...Fonts.grayColor12SemiBold }}>
                            4.6 (100 Reviews)
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <MaterialIcons
                    name="arrow-back-ios"
                    size={22}
                    color={Colors.blackColor}
                    onPress={() => navigation.pop()}
                />
                <Text style={{ marginLeft: Sizes.fixPadding, ...Fonts.blackColor18Bold }}>
                    Appointment Details
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Sizes.fixPadding * 2.0,
        paddingVertical: Sizes.fixPadding + 5.0
    },
    bookNowButtonWrapStyle: {
        position: 'absolute',
        bottom: 0.0,
        left: 0.0,
        right: 0.0,
        backgroundColor: Colors.whiteColor
    },
    bookNowButtonStyle: {
        backgroundColor: Colors.primaryColor,
        borderRadius: Sizes.fixPadding,
        paddingVertical: Sizes.fixPadding,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding * 2.0,
    },
    totalAmountInfoWrapStyle: {
        marginHorizontal: Sizes.fixPadding * 2.0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});

export default AppointmentDetailsScreen;