const axios = require('axios');

const holidays2019 = "\n= = = = = = = = = = = = = = = = = = = =\n*2019 Holidays:* :christmas_tree_dance: _(Un-Official!)_  \n • Tuesday, January 1 (New Year’s Day) \n • Monday, May 27 (Memorial Day) \n • Thursday, July 4 (Independence Day) \n • Monday, September 2 (Labor Day) \n • Thursday, November 28 (Thanksgiving Day) \n • Friday, November 29 (Day after Thanksgiving Day) \n • Tuesday, December 24 (Company Discretionary Day) \n • Wednesday, December 25 (Company Discretionary Day) \n • Thursday, December 26 (Company Discretionary Day) \n • Friday, December 27 (Company Discretionary Day) \n • Monday, December 30 (Company Discretionary Day)\n= = = = = = = = = = = = = = = = = = = =\n"
const holidays2018 = "\n= = = = = = = = = = = = = = = = = = = =\n*2018 Holidays:* :christmas_tree_dance: _(Federal)_  \n • Monday, January 1	New Year’s Day \n • Monday, January 15	Birthday of Martin Luther King, Jr. \n • Monday, February 19	Washington’s Birthday \n • Monday, May 28	Memorial Day \n • Wednesday, July 4	Independence Day \n • Monday, September 3	Labor Day \n • Monday, October 8	Columbus Day \n • Monday, November 12	Veterans Day \n • Thursday, November 22	Thanksgiving Day \n • Tuesday, December 25	Christmas Day\n= = = = = = = = = = = = = = = = = = = =\n"
const holidays2020 = "\n= = = = = = = = = = = = = = = = = = = =\n*2020 Holidays:* :christmas_tree_dance: _(Federal)_  \ \n • Wednesday, January 1	New Year’s Day \n • Monday, January 20	Birthday of Martin Luther King, Jr. \n • Monday, February 17	Washington’s Birthday \n • Monday, May 25	Memorial Day \n • Friday, July 3	Independence Day \n • Monday, September 7	Labor Day \n • Monday, October 12	Columbus Day \n • Wednesday, November 11	Veterans Day \n • Thursday, November 26	Thanksgiving Day \n • Friday, December 25	Christmas Day\n= = = = = = = = = = = = = = = = = = = =\n"
const helpText = '\n= = = = = = = = = = = = = = = = = = = =\n*Help:* :question_block:\n You can use this command with any of the following options:  \n • /Holidays `Year` \n • ~/Holidays next~ (Work In Progress)\n • /Holidays help (This list!) \n= = = = = = = = = = = = = = = = = = = =\n'
const nextText = 'Sorry!\n`Next` functionality is still under development!'

const examples = [
  "`/Holidays next`",
  "`/Holidays 2019`",
  "`/Holidays` (to get the current year)",
  "`/Holidays help` (to get the list of possible options)",
]

exports.handler = async (event) => {
  var finalText = ""

  switch (event.command) {
    case 'help':
      finalText = helpText
      break;
    case '2019':
      finalText = holidays2019
      break;
    case '2020':
      finalText = holidays2020
      break;
    case '2018':
      finalText = holidays2018
      break;
    case 'next':
      finalText = nextText
      break;
    default:
      finalText = holidays2019

  }

  var examplePayload = {
    "response_type": "in_channel",
    "text": finalText,
    "attachments": [{
      "text": `:bright_idea: You can also try something like ${examples[Math.floor(Math.random()*examples.length)]}`
    }]
  }


  axios.post(event.response_url, examplePayload)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });


  function timeout(ms) {
    return new Promise(resolve => setTimeout(() => {
      resolve()
    }, ms));
  }
  await timeout(666);
  return {
    "good": "true"
  };
  // return {"good":"true"};
};
