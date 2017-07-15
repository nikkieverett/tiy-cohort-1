//Data taken from https://en.wikipedia.org/wiki/List_of_Seleucid_rulers

var dataset = {
  rulers: [
    {
      name: 'Seleucus I Nicator',
      startReign: 305,
      endReign: 281,
      consorts: ['Apama']
    },
    {
      name: 'Antiochus I Soter',
      startReign: 281,
      endReign: 261,
      consorts: ['Stratonice of Syria']
    },
    {
      name: 'Antiochus II Theos',
      startReign: 261,
      endReign: 246,
      consorts: ['Laodice I', 'Berenice']
    },
    {
      name: 'Seleucus II Callinicus',
      startReign: 246,
      endReign: 225,
      consorts: ['Laodice II']
    },
    {
      name: 'Seleucus III Ceraunus',
      startReign: 225,
      endReign: 223,
      consorts: []
    },
    {
      name: 'Antiochus III the Great',
      startReign: 223,
      endReign: 187,
      consorts: ['Laodice III', 'Euboea of Chalcis']
    },
    {
      name: 'Seleucus IV Philopator',
      startReign: 187,
      endReign: 175,
      consorts: ['Laodice IV']
    },
    {
      name: 'Antiochus IV Epiphanes',
      startReign: 175,
      endReign: 163,
      consorts: ['Laodice IV']
    },
    {
      name: 'Antiochus V Eupator',
      startReign: 163,
      endReign: 161,
      consorts: []
    },
    {
      name: 'Demetrius I Soter',
      startReign: 161,
      endReign: 150,
      consorts: ['Apama', 'Laodice V']
    },
    {
      name: 'Alexander I Balas',
      startReign: 150,
      endReign: 145,
      consorts: ['Cleopatra Thea']
    },
    {
      name: 'Demetrius II Nicator',
      startReign: 145,
      endReign: 138,
      consorts: ['Cleopatra Thea']
    },
    {
      name: 'Antiochus VI Dionysus',
      startReign: 145,
      endReign: 140,
      consorts: []
    },
    {
      name: 'Diodotus Tryphon',
      startReign: 140,
      endReign: 138,
      consorts: []
    },
    {
      name: 'Antiochus VII Sidetes',
      startReign: 138,
      endReign: 129,
      consorts: ['Cleopatra Thea']
    },
    {
      name: 'Demetrius II Nicator',
      startReign: 129,
      endReign: 126,
      consorts: ['Cleopatra Thea']
    },
    {
      name: 'Alexander II Zabinas',
      startReign: 129,
      endReign: 123,
      consorts: []
    },
    {
      name: 'Cleopatra Thea',
      startReign: 126,
      endReign: 121,
      consorts: []
    },
    {
      name: 'Seleucus V Philometor',
      startReign: 126,
      endReign: 125,
      consorts: []
    },
    {
      name: 'Antiochus VIII Grypus',
      startReign: 125,
      endReign: 96,
      consorts: ['Tryphaena of Egypt', 'Cleopatra Selene I of Egypt']
    },
    {
      name: 'Antiochus IX Cyzicenus',
      startReign: 114,
      endReign: 96,
      consorts: ['Cleopatra IV of Egypt', 'Cleopatra Selene I of Egypt']
    },
    {
      name: 'Seleucus VI Epiphanes Nicator',
      startReign: 96,
      endReign: 95,
      consorts: []
    },
    {
      name: 'Antiochus X Eusebes Philopator',
      startReign: 95,
      endReign: 92,
      consorts: []
    },
    {
      name: 'Demetrius III Eucaerus',
      startReign: 95,
      endReign: 87,
      consorts: []
    },
    {
      name: 'Antiochus XI Epiphanes Philadelphus',
      startReign: 95,
      endReign: 92,
      consorts: []
    },
    {
      name: 'Philip I Philadelphus',
      startReign: 95,
      endReign: 84,
      consorts: []
    },
    {
      name: 'Antiochus XII Dionysus',
      startReign: 87,
      endReign: 84,
      consorts: []
    },
    {
      name: 'Tigranes I of Armenia',
      startReign: 83,
      endReign: 69,
      consorts: []
    },
    {
      name: 'Seleucus VII Kybiosaktes',
      startReign: 83,
      endReign: 69,
      consorts: []
    },
    {
      name: 'Antiochus XIII Asiaticus',
      startReign: 69,
      endReign: 64,
      consorts: []
    },
    {
      name: 'Philip II Philoromaeus',
      startReign: 65,
      endReign: 63,
      consorts: []
    }
  ]
};


// Write a function that returns the rulers who reigned more than five years.
// function moreThanFiveYears(data){
//   let output = [];
//   for(var i = 0; i < data.rulers.length; i++){
//     let ruler = data.rulers[i];
//     if(ruler.startReign - ruler.endReign > 5){
//       output.push(ruler.name);
//     }
//   }
//   return output;
// }
// let output = moreThanFiveYears(dataset);
// console.log(output);


// Write a function that returns the rulers who reigned more than twenty years.
// function moreThanTwentyYears(data){
//   let output =[];
//
//   for(var i = 0; i < data.rulers.length; i++){
//     let rulers = data.rulers[i];
//     if(rulers.startReign - rulers.endReign > 20){
//       output.push(rulers.name);
//     }
//   }
//   return output;
// }
// console.log(moreThanTwentyYears(dataset));

// Once those two are complete, refactor to create a function that allows you to specify the minimum years a ruler has reigned
// function minimumYears(data, years){
//   let output = [];
//   for(var i = 0; i < data.rulers.length; i++){
//     let ruler = data.rulers[i];
//     if(ruler.startReign - ruler.endReign > years){
//       output.push(ruler);
//     }
//   }
//   return output;
// }
//
// console.log(minimumYears(dataset, 10));
// console.log(minimumYears(dataset, 15));

//Write a function that returns the king with the longest name
// function longestKingName(){
//   let output = '';
//   let length = 0;
//   for(var i = 0; i < dataset.rulers.length; i++){
//     if(dataset.rulers[i].name.length > length){
//       length = dataset.rulers[i].name.length;
//       output = dataset.rulers[i].name;
//     }
//   }
//   return output;
// }
// console.log(longestKingName())
//Write a function that returns all kings with 2 consorts
// function kingsConsorts(){
//   let output = [];
//   for(var i = 0; i < dataset.rulers.length; i++){
//     if(dataset.rulers[i].consorts.length === 2){
//       output.push(dataset.rulers[i].name);
//     }
//   }
//   return output;
// }
// console.log(kingsConsorts())
//Write a function that returns all kings with 0 consorts
function kingnsConsortsNon(){
  let output = [];
  for(var i = 0; i < dataset.rulers.length; i++){
    if(dataset.rulers[i].consorts.length <= 0){
      output.push(dataset.rulers[i].name);

    }

    return output;
  }
}
console.log(kingnsConsortsNon());
//Once those two are complete, refactor so that they can both use the same function

// Create a function that calculates the total consorts.

// Use the function you just created to calculate the average number of consorts

// Create a function that calculates the total years that all the rulers ruled.

// Use the function you just created to calculate the average length of the all the rulers' reigns

// Write a function that will take this data and return an array of strings in this format: "{name} ({startReign}-{endReign} BCE)" (e.g. "Seleucus I Nicator (305-281 BCE)").
