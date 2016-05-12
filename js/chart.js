new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'morris-area-chart',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { week: '2016', value: 20 },
    { week: '2017', value: 10 },
    { week: '2018', value: 5 },
    { week: '2019', value: 5 },
    { week: '2020', value: 20 }
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'week',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['value'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Value'],
  xLabels: ['week']
});