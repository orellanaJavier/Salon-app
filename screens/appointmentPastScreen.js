import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";

const pastAppointmentsList = [
    {
        id: '1',
        isExpandable: false,
        salonName: 'RedBox salon',
        salonAddress: 'A 9/a Sector 16,Gautam Budh Nagar',
        appointmentDay: 'Thursday',
        appointmentDate: '17 June,2021',
        appointmentTime: '2:00 pm',
        specialistName: 'Joya Patel',
        speciality: 'Hair Stylist',
        services: [
            {
                service: 'Hair wash herbal',
                amount: 35.0,
            },
            {
                service: 'Hair color',
                amount: 149.0,
            },
            {
                service: 'Simple hair cuting - hair wash',
                amount: 25.0,
            },
        ],
    },
    {
        id: '2',
        isExpandable: false,
        salonName: 'Crown salon',
        salonAddress: 'A 9/a Sector 16,Gautam Budh Nagar',
        appointmentDay: 'Monday',
        appointmentDate: '18 August,2021',
        appointmentTime: '4:00 pm',
        specialistName: 'Joya Patel',
        speciality: 'Hair Stylist',
        services: [
            {
                service: 'Hair wash herbal',
                amount: 35.0,
            },
            {
                service: 'Hair color',
                amount: 149.0,
            },
            {
                service: 'Simple hair cuting - hair wash',
                amount: 25.0,
            },
        ],
    },
];

const AppointmentPast = ({ navigation }) => {

    const [pastAppointments, setPastAppointments] = useState(pastAppointmentsList)

    const renderItem = ({ item }) => (
        <View style={styles.appointmentInfoWrapStyle}>
            <Collapse
                touchableOpacityProps={{ activeOpacity: 0.9 }}
                onToggle={(isExpanded) => handlePastBookingsUpdate({ id: item.id, isExpanded })}
            >
                <CollapseHeader>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ ...Fonts.blackColor14Bold }}>
                            {item.salonName}
                        </Text>
                        <MaterialIcons
                            name={item.isExpandable ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                            size={24}
                            color={Colors.blackColor}
                        />
                    </View>
                    <Text style={{ ...Fonts.grayColor13SemiBold }}>
                        {item.salonAddress}
                    </Text>
                    <Text style={{ lineHeight: 16.0, ...Fonts.grayColor13SemiBold }}>
                        {item.appointmentDay} • {item.appointmentDate} • {item.appointmentTime}
                    </Text>
                    <View style={{ marginTop: Sizes.fixPadding - 5.0, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ ...Fonts.greenColor13Bold }}>
                            Completed
                        </Text>
                        <Text
                            onPress={() => navigation.push('ScheduleAppointment')}
                            style={{ marginLeft: Sizes.fixPadding, ...Fonts.primaryColor13Bold }}
                        >
                            Book Again
                        </Text>
                    </View>
                    <View style={{
                        backgroundColor: Colors.grayColor,
                        height: 1.5,
                        marginTop: Sizes.fixPadding,
                        marginBottom: item.isExpandable ? Sizes.fixPadding - 5.0 : Sizes.fixPadding + 5.0,
                    }} />
                </CollapseHeader>
                <CollapseBody>
                    <Text style={{ ...Fonts.blackColor14Bold }}>
                        Specialists
                    </Text>
                    <Text style={{ ...Fonts.grayColor13SemiBold }}>
                        {item.specialistName} • {item.speciality}
                    </Text>
                    <Text style={{ ...Fonts.blackColor14Bold }}>
                        Services
                    </Text>
                    {item.services.map((item, index) => (
                        <View key={index}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <Text style={{ ...Fonts.grayColor13SemiBold }}>
                                    {item.service}
                                </Text>
                                <Text style={{ ...Fonts.grayColor13SemiBold }}>
                                    {`$`}{item.amount.toFixed(1)}
                                </Text>
                            </View>
                        </View>
                    ))}
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: Sizes.fixPadding - 8.0,
                        marginBottom: Sizes.fixPadding - 5.0,
                    }}>
                        <Text style={{ ...Fonts.primaryColor13Bold }}>
                            Total Amount
                        </Text>
                        <Text style={{ ...Fonts.primaryColor13Bold }}>
                            {`$`}{item.services.reduce((total, item) => total = total + item.amount, 0).toFixed(2)}
                        </Text>
                    </View>
                </CollapseBody>
            </Collapse>
        </View>
    )

    function handlePastBookingsUpdate({ id, isExpanded }) {
        const newList = pastAppointments.map((appointment) => {
            if (appointment.id === id) {
                const updatedItem = { ...appointment, isExpandable: isExpanded };
                return updatedItem;
            }
            return appointment;
        });
        setPastAppointments(newList);
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={pastAppointments}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: Sizes.fixPadding * 2.0, }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    appointmentInfoWrapStyle: {
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        borderRadius: Sizes.fixPadding,
        marginHorizontal: Sizes.fixPadding * 2.0,
        paddingVertical: Sizes.fixPadding - 5.0,
        paddingHorizontal: Sizes.fixPadding,
        marginBottom: Sizes.fixPadding * 2.0,
    }
})

export default AppointmentPast;