Template.ToC.helpers({
  groups: function () {
    return [
      controls,
      media,
      navigation,
      containers,
    ];
  },
});

var containers = {
  name: 'Containers',
  components: [
    // {name: 'Accordion'},
    {name: 'Dropdown'},
    // {name: 'Off-canvas'},
    {name: 'Reveal'},
    // {name: 'Table'},
    // {name: 'Tabs'},
  ],
};

var controls = {
  name: 'Controls',
  components: [
    {name: 'Close Button'},
    {name: 'Slider'},
    {name: 'Switch'},
  ],
};

var media = {
  name: 'Media',
  components: [
    {name: 'Orbit'},
    {name: 'Progress Bar'},
    {name: 'Tooltip'},
  ],
};

var navigation = {
  name: 'Navigation',
  components: [
    // {name: 'Accordion Menu'},
    // {name: 'Breadcrumbs'},
    // {name: 'Drilldown Menu'},
    // {name: 'Dropdown Menu'},
    // {name: 'Magellan'},
    // {name: 'Pagination'},
  ],
};
