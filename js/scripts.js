var nameFemale = ['Basia' ,'Kasia', 'Zosia', 'Beata', 'Ola'];
var nameMale = ['Artur', 'Łukasz', 'Szymon', 'Antek','Adas'];
var allNames = nameFemale.concat(nameMale);
var newName = 'Marian';
if (allNames.indexOf(newName) === -1) {
 allNames.push (newName) ; 
}
