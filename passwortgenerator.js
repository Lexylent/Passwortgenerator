let pass = ""
    let alp =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
	 		  "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","a", "b", "c", "d", "e", "f", "g", "h",
			  "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
			   0,1,2,3,4,5,6,7,8,9,"!","?","&","$","%","§","="]
    function gen(params) {
      pass = ""
      for (let index = 0; index < document.getElementById("länge").value; index++) {
        let random = Math.floor(Math.random() * alp.length)
        pass += alp[random]
      }
      console.log(pass);
    }
	
    // Minimalistisch gehalten by Lexylent
