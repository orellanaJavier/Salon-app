import { StyleSheet, Text, View ,Button, SafeAreaView,ScrollView,} from 'react-native';
import React from 'react';
import { Calendar } from 'react-native-calendars';
import Day from 'react-native-calendars/src/calendar/day';


function Agenda(){
 

  return(
    
<SafeAreaView>
      <ScrollView>
      <Calendar   
      minDate='2023-01-01'
      maxDate={'2023-31-12'} 
      firstDay={1} 
      onDayPress={(Day) => {console.log('selected Day', Day)}}
      monthFormat={'yyyy MM TT'} 
      hideArrows={false} 
      hideExtraDays={false}
      disableMonthChange={false} 
      hideDayNames={false} 
      showWeekNumbers={false} 
      markedDates={{'2023-01-01': {selected: false}}} />
      <Calendar onDayPress={(Day) => {console.log('selected Day', Day)}} 
      onMonthChange={(month) => {console.log('current month', month)}} />
      </ScrollView>
    </SafeAreaView>
  );
}
   

export default Agenda;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})