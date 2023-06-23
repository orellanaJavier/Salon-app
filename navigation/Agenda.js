import React, { useState } from "react";
import { SafeAreaView, View, StatusBar, Image, FlatList, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Colors, Fonts, Sizes, } from '../constants/styles';
import { MaterialIcons } from '@expo/vector-icons';
import CalendarStrip from 'react-native-calendar-strip';

const slotsList = [
    '09:30 am', '10:00 am', '10:30 am', '11:00 am', '11:30 am', '12:00 am', '01:30 pm', '02:00 pm', '02:30 pm', '03:00 pm', '03:30 pm', '04:00 pm', '04:30 pm', '05:00 pm',
    '06:00 pm', '06:30 pm', '07:00 pm', '08:00 pm', '08:30 pm'
];

const specialistsData = [
    {
        id: '1',
        specialistImage: require('../assets/images/specialists/specialist2.png')
        specialistName: 'Joya',
        speciality: 'Hair stylist',
    },
    {
        id: '2',
        specialistImage: require('../assets/images/salon/salon4.png'),
        specialistName: 'Doe',
        speciality: 'St.Barber',
    },
    {
        id: '3',
        specialistImage: require('../assets/images/specialists/specialist3.png'),
        specialistName: 'Helina',
        speciality: 'M.Artist',
    },
    {
        id: '4',
        specialistImage: require('../assets/images/specialists/specialist4.png'),
        specialistName: 'Robat',
        speciality: 'Hair Stylist',
    },
    {
        id: '5',
        specialistImage: require('../assets/images/specialists/specialist5.png'),
        specialistName: 'Jiya',
        speciality: 'M.Artist',
    },
    {
        id: '6',
        specialistImage: require('../assets/images/specialists/specialist4.png'),
        specialistName: 'Robat',
        speciality: 'Hair Stylist',
    }
];

const selectedServicesList = [
    {
        id: '1',
        serviceName: 'Hair wash herbal',
        amount: 35.00,
    },
    {
        id: '2',
        serviceName: 'Hair color',
        amount: 149.00,
    },
    {
        id: '3',
        serviceName: 'Simple hair cutting - hair wash',
        amount: 25.00,
    },
];

const Agenda = ({ navigation }) => {

    const [state, setState] = useState({
        specialists: specialistsData,
        selectedSpecialistId: specialistsData[0].id,
        selectedSlot: '02:00 pm',
    })

    const updateState = (data) => setState((state) => ({ ...state, ...data }))

    const {
        specialists,
        selectedSpecialistId,
        selectedSlot,
    } = state;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                <FlatList
                    ListHeaderComponent={
                        <>
                            {selectDateInfo()}
                            {selectSpecialistInfo()}
                            {availableSlotInfo()}
                            {selectedServicesInfo()}
                            {totalAmountInfo()}
                        </>
                    }
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 8.0, }}
                />
            </View>
            {continueButton()}
        </SafeAreaView>
    )

    function continueButton() {
        return (
            <View style={styles.continueButtonWrapStyle}>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => navigation.push('AppointmentDetail')}
                    style={styles.continueButtonStyle}
                >
                    <Text style={{ ...Fonts.whiteColor18SemiBold }}>
                        Continue
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
                <Text style={{ ...Fonts.blackColor13Bold }}>
                    {`$`}{selectedServicesList.reduce((total, item) => total = total + item.amount, 0).toFixed(2)}
                </Text>
            </View>
        )
    }

    function selectedServicesInfo() {

        const renderItem = ({ item }) => (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Text style={{ ...Fonts.grayColor14Bold }}>
                    {item.serviceName}
                </Text>
                <Text style={{ ...Fonts.grayColor13Bold }}>
                    {`$`}{item.amount.toFixed(2)}
                </Text>
            </View>
        )
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ marginBottom: Sizes.fixPadding, marginTop: Sizes.fixPadding - 2.0, ...Fonts.blackColor16Bold }}>
                    Selected Services
                </Text>
                <FlatList
                    listKey="services"
                    data={selectedServicesList}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }

    function availableSlotInfo() {

        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => updateState({ selectedSlot: item })}
                style={{
                    backgroundColor: selectedSlot == item ? Colors.primaryColor : Colors.whiteColor,
                    borderColor: selectedSlot == item ? Colors.primaryColor : Colors.grayColor,
                    ...styles.availableSlotWrapStyle,
                    flex: 1,
                }}
            >
                <Text style={selectedSlot == item ? { ...Fonts.whiteColor13Bold } : { ...Fonts.grayColor13Bold }}>
                    {item}
                </Text>
            </TouchableOpacity>
        )
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ marginVertical: Sizes.fixPadding + 5.0, ...Fonts.blackColor16Bold }}>
                    Available Slot
                </Text>
                <FlatList
                    listKey="slots"
                    data={slotsList}
                    keyExtractor={(index) => `${index}`}
                    renderItem={renderItem}
                    numColumns={4}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={false}
                />
            </View>
        )
    }

    function selectSpecialistInfo() {

        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => updateState({ selectedSpecialistId: item.id })}
                style={{
                    alignItems: 'center',
                    marginRight: Sizes.fixPadding + 5.0,
                }}
            >
                <Image
                    source={item.specialistImage}
                    style={{
                        borderColor: selectedSpecialistId == item.id ? Colors.primaryColor : 'transparent',
                        ...styles.specialistImageStyle,
                    }}
                />
                <Text style={selectedSpecialistId == item.id ? { ...Fonts.primaryColor12Bold } : { ...Fonts.blackColor12Bold }}>
                    {item.specialistName}
                </Text>
                <Text style={{
                    lineHeight: 11.0,
                    ...selectedSpecialistId == item.id ? { ...Fonts.primaryColor11SemiBold } : { ...Fonts.grayColor11SemiBold }
                }}>
                    {item.speciality}
                </Text>
            </TouchableOpacity>
        )
        return (
            <View>
                <Text style={{ marginVertical: Sizes.fixPadding + 5.0, marginHorizontal: Sizes.fixPadding * 2.0, ...Fonts.blackColor16Bold }}>
                    Select Specialists
                </Text>
                <FlatList
                    data={specialists}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingLeft: Sizes.fixPadding * 2.0,
                    }}
                />
            </View>
        )
    }

    function selectDateInfo() {
        return (
            <View>
                <Text style={{
                    marginBottom: Sizes.fixPadding - 5.0,
                    marginHorizontal: Sizes.fixPadding * 2.0, ...Fonts.blackColor16Bold
                }}>
                    Select Date
                </Text>
                <View style={{ marginBottom: Sizes.fixPadding - 40.0 }}>
                    <CalendarStrip
                        style={{
                            height: 100,
                            paddingTop: Sizes.fixPadding * 2.0,
                            paddingBottom: Sizes.fixPadding,
                        }}
                        highlightDateContainerStyle={{
                            backgroundColor: Colors.primaryColor,
                            borderRadius: Sizes.fixPadding - 11.0,
                        }}
                        iconStyle={{ width: 0.0, height: 0.0, marginHorizontal: Sizes.fixPadding - 5.0 }}
                        dateNumberStyle={{ fontSize: 14, color: Colors.blackColor }}
                        dateNameStyle={{ fontSize: 10, color: Colors.blackColor }}
                        highlightDateNameStyle={{ fontSize: 10, color: Colors.whiteColor }}
                        highlightDateNumberStyle={{ fontSize: 14, color: Colors.whiteColor }}
                        useIsoWeekday={false}
                        scrollable={true}
                        upperCaseDays={true}
                        styleWeekend={true}
                        calendarHeaderStyle={{ position: 'absolute', top: -20.0, }}
                    />
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
                    Schedule Appointment
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
    continueButtonWrapStyle: {
        position: 'absolute',
        bottom: 0.0,
        left: 0.0,
        right: 0.0,
        backgroundColor: Colors.whiteColor
    },
    continueButtonStyle: {
        backgroundColor: Colors.primaryColor,
        borderRadius: Sizes.fixPadding,
        paddingVertical: Sizes.fixPadding,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding * 2.0,
    },
    availableSlotWrapStyle: {
        borderWidth: 1.0,
        borderRadius: Sizes.fixPadding - 3.0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: Sizes.fixPadding - 8.0,
        paddingTop: Sizes.fixPadding - 8.0,
        paddingHorizontal: Sizes.fixPadding - 5.0,
        marginRight: Sizes.fixPadding - 3.0,
        marginBottom: Sizes.fixPadding - 3.0,
    },
    totalAmountInfoWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginVertical: Sizes.fixPadding + 5.0,
    },
    specialistImageStyle: {
        width: 45.0,
        height: 45.0,
        borderWidth: 1.5,
        borderRadius: Sizes.fixPadding - 5.0,
    }
});

export default Agenda;
