/*
Question 3: Write a function that converts HEX to RGB. Then Make that function auto-detect the formats so that if you enter 
HEX color format it returns RGB and if you enter RGB color format it returns HEX.
*/

function hextoRGB(hex){
	if(hex[0] === "#" && hex.length === 7){
 			let tempHex = hex.slice(1).toUpperCase();
 			let red = "0x" + tempHex.slice(0,2);
 			let green = "0x" + tempHex.slice(2,4);
 			let blue = "0x" + tempHex.slice(4);
 			let RGB = [parseInt(red),parseInt(green),parseInt(blue)];
 			return RGB;
 		}
 		else{
 			return "Invalid Hex value";
 		}
}


function RGBtoHex(rgb){
	let hex="#";
	if(rgb.length == 3){
			if(rgb[0]>255 || rgb[1] > 255 || rgb[2] > 255){
				return "Invalid RGB value";
			}
			else{
				rgb.forEach((value,i)=>{
					let check = value.toString(16);
					if(check.length == 1){
						rgb[i] = "0" + check;
					}
					else{
						rgb[i] = check;
					}
				});
				rgb.forEach((value)=>{
					hex = hex.concat(value.toString());
				});
				return hex.toUpperCase();
			}
		}
		else{
			return "Invalid RGB value";
		}
}


function colorConverter(color){
	if(typeof color === "string"){
		return hextoRGB(color);
	}
	else if(Array.isArray(color)){
		return RGBtoHex(color);
	}
	return "Not a valid Hex or RGB"; 
}

/*
testing for various inputs
*/

let test_cases = {
	"case 1" : "#776800",
	"case 2" : [141, 104, 146],
	"case 3" : "#32a852",
	"case 4" : [0, 255, 68],
	"case 5" : [500,255,248],
	"case 6" : {
		sample: 1
	},
	"case 7" : "456789",
	"case 8" : "#32a85",
	"case 9" : [0,255,235,200]
};

for(test_case in test_cases){
	console.log(`Output for Test ${test_case}:\n`,colorConverter(test_cases[test_case]));
}
