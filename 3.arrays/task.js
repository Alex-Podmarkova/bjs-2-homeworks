function compareArrays(arr1, arr2) {
  let equallyArrays = arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
  return equallyArrays;
}

function getUsersNamesInAgeRange(users, gender) {
	let result = users.filter(user.gender === gender).map(user => userAge).reduce((acc, userAge, index, user) => {
		acc += userAge;
		if(index === user.length - 1) {
			return acc / user.length;
		}
		return acc;
	} )
  
}