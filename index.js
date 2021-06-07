class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
   return string.replace(/[^A-Za-z0-9 '-]/g,'')
  }

  
  static titleize(string) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let result = [];
    let arrayOfWords = string.split(" ")
    for (let s = 0; s < arrayOfWords.length; s++) {
      if (s == 0) {
        result.push(this.capitalize(arrayOfWords[s]))
      } else {
        if (exceptions.includes(arrayOfWords[s])) {
          result.push(arrayOfWords[s])
        } else {
          result.push(this.capitalize(arrayOfWords[s]))
        }
      }
    }
    return result.join(" ");

  }
}