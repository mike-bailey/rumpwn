// Affine Cipher

// This code was written by Tyler Akins and is placed in the public domain.
// It would be nice if this header remained intact.  http://rumkin.com

// Requires util.js


// Perform a Affine transformation on the text
// encdec = -1 for decode, 1 for encode (kinda silly, but kept it like this
//    to be the same as the other encoders)
// text = the text to encode/decode
// inc = how far to shift the letters.
// key = the key to alter the alphabet
// alphabet = The alphabet to use if not A-Z
function Affine(encdec, text, mult, inc, key, alphabet)
{
   var s = "";
   
   if (typeof(alphabet) != 'string')
      alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   
   mult = mult * 1;
   inc = inc * 1;
   
   if (encdec < 0) {
      var i = 1;
	  while ((mult * i) % 26 != 1) {
		  i += 2;
	  }
      mult = i;
      inc = mult * (alphabet.length - inc) % alphabet.length;
   }
   
   key = MakeKeyedAlphabet(key, alphabet);
   
   for (var i = 0; i < text.length; i++)
   {
      var b = text.charAt(i);
      var idx;
      if ((idx = alphabet.indexOf(b)) >= 0)
      {
         idx = (mult * idx + inc) % alphabet.length;
	 b = key.charAt(idx);
      }
      else if ((idx = alphabet.indexOf(b.toUpperCase())) >= 0)
      {
         idx = (mult * idx + inc) % alphabet.length;
	 b = key.charAt(idx).toLowerCase();
      }
      s += b;
   }
   return s;
}
// Starting here are modifications to make it more deadly :P 
// Michael Bailey wrote this part for use in competition Marshall Academy Cyber Club
// Not for commercial use, and Intellectual Property still stays with Michael, NOT
// Marshall Academy, FCPS, etc etc
function affine_pwn(encodedtext) {
   b = 0
	while (b < 26) {
		document.getElementById("decoded").innerHTML+="<b>" + Affine(-1, encodedtext, 1, b) + "</b>" + " while b is " + b + " and a is 1<br />" ;
      		document.getElementById("decoded").innerHTML+="<b>" +Affine(-1, encodedtext, 3, b) + "</b>" + " while b is " + b + " and a is 3<br />" ;
        	document.getElementById("decoded").innerHTML+="<b>" +Affine(-1, encodedtext, 5, b) + "</b>" + " while b is " + b + " and a is 5<br />" ;
	       	document.getElementById("decoded").innerHTML+="<b>" +Affine(-1, encodedtext, 7, b) + "</b>" + " while b is " + b + " and a is 7<br />";
        	document.getElementById("decoded").innerHTML+="<b>" +Affine(-1, encodedtext, 9, b) + "</b>" + " while b is " + b + " and a is 9<br />";
        	document.getElementById("decoded").innerHTML+="<b>" +Affine(-1, encodedtext, 11, b) + "</b>" + " while b is " + b + " and a is 11<br />";
        	document.getElementById("decoded").innerHTML+="<b>" +Affine(-1, encodedtext, 15, b) + "</b>" + " while b is " + b + " and a is 15<br />";
        	document.getElementById("decoded").innerHTML+="<b>" +Affine(-1, encodedtext, 17, b) + "</b>" + " while b is " + b + " and a is 17<br />";
		b++;
	}

}
