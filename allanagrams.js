function allanagrams(word){
	if(word.length < 2) {
		return [word];
	} else {
		var allanswers = [];
		// for each letter of the word in turn
		for (var i = 0; i < word.length; i++) {
			var letter = word[i];
			// pull that letter out of the word (leaving us with shorterword)
			var shorterword = word.substr(0, i) + word.substr(i + 1, word.length - 1);
			// call allanagrams(shorterword) to get shortwordarray
			var shortwordarray = allanagrams(shorterword);
			// add letter to each word in shortwordarray
			for (var j = 0; j < shortwordarray.length; j++) {
				allanswers.push(letter + shortwordarray [j]);
			}
		
		}
 	// join all those array somehow
 	return allanswers ;
	}
}
allanagrams("potato");