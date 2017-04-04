const arrayToRegex = (dataArray) => {
  var newArray = [];
    for(var i = 0; i < dataArray.length; i++) {
      newArray.push(new RegExp(dataArray[i], "i"));
    }

    return newArray;
}

export default arrayToRegex;