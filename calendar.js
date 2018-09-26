$(document).ready(function() {

    // page is now ready, initialize the calendar..
    $('#calendar').fullCalendar({
        weekends: true,
        dayClick: function() {
          alert('a day has been clicked!');
        },
        defaultView: 'month'
        
    });
  


});

// $(function() {

//     $('#calendar').fullCalendar({
//       themeSystem: 'bootstrap3',
//       header: {
//         left: 'prev,next today',
//         center: 'title',
//         right: 'month,agendaWeek,agendaDay,listMonth'
//       },
//       weekNumbers: true,
//       eventLimit: true, // allow "more" link when too many events
//       events: 'https://fullcalendar.io/demo-events.json'
//     });
  
//   });

// -----------------
// $(document).ready(function(){
//     $('#calendar').fullCalendar({
//         themeSystem: 'bootstrap3',
//         header: {
//             left: 'prev, next today',
//             center: 'title',
//             right: 'month'
//         },
//         weekends: true,
//         defaultView: 'month'
//     });
// });