const readLineSync = require('readline-sync');
const utilityOption = parseInt(readLineSync.question(`Welcome to Epoch Converters Utility. \nWhich utility function would you like to use? 
1. Binary to Decimal
2. Binary to Hexadecimal
3. Binary to Octal
4. Decimal to Binary
5. Decimal to Hexadecimal
6. Decimal to Octal
7. Hexadecimal to Binary
8. Hexadecimal to Decimal
9. Hexadecimal to Octal
10. Octal to Binary
11. Octal to Decimal
12. Octal to Hexadecimal\nEnter your choice:`));

function binaryToDecimal(input)
{
   return parseInt(input,2);
}

function binaryToHexadecimal(input)
{
   let decimal = parseInt(input,2);
   return decimal.toString(16);
}

function binaryToOctal(input)
{
   let decimal = parseInt(input,2);
   return decimal.toString(8);
}

function decimalToBinary(input)
{
   return input.toString(2);
}

function decimalToHexadecimal(input)
{
   return input.toString(16);
}

function decimalToOctal(input)
{
   return input.toString(8);
}

function hexadecimalToDecimal(input)
{
   return parseInt(input,16);
}

function hexadecimalToOctal(input)
{
   let decimal = parseInt(input,16);
   return decimal.toString(8);
}

function hexadecimalToBinary(input)
{
   let decimal = parseInt(input,16);
   return decimal.toString(2);
}

function octalToDecimal(input)
{
   return parseInt(input,8);
}

function octalTohexadecimal(input)
{
   let decimal = parseInt(input,8);
   return decimal.toString(16);
}

function octalToBinary(input)
{
   let decimal = parseInt(input,8);
   return decimal.toString(2);
}

switch(utilityOption)
{
  case 1:
  const inp1 = readLineSync.question('Enter your input in Binary\n');
  console.log("Output: "+binaryToDecimal(inp1));
  break;

  case 2:
  const inp2 = readLineSync.question('Enter your input in Binary\n');
  console.log("Output: "+binaryToHex(inp2));
  break;

  case 3:
  const inp3 = readLineSync.question('Enter your input in Binary\n');
  console.log("Output: "+binaryToOctal(inp3));
  break;

  case 4:
  const inp4 = parseInt(readLineSync.question('Enter your input in Decimal\n'));
  console.log("Output: "+decimalToBinary(inp4));
  break;

  case 5:
  const inp5 = parseInt(readLineSync.question('Enter your input in Decimal\n'));
  console.log("Output: "+decimalToHex(inp5));
  break;

  case 6:
  const inp6 = parseInt(readLineSync.question('Enter your input in Decimal\n'));
  console.log("Output: "+decimalToOctal(inp6));
  break;

  case 7:
  const inp7 = readLineSync.question('Enter your input in Hexadecial\n');
  console.log("Output: "+hexToDecimal(inp7));
  break;

  case 8:
  const inp8 = readLineSync.question('Enter your input in Hexadecimal\n');
  console.log("Output: "+hexToOctal(inp8));
  break;

  case 9:
  const inp9 = readLineSync.question('Enter your input in Hexadecimal\n');
  console.log("Output: "+hexToBinary(inp9));
  break;

  case 10:
  const inp10 = readLineSync.question('Enter your input in Octal\n');
  console.log("Output: "+octalToDecimal(inp10));
  break;

  case 11:
  const inp11 = readLineSync.question('Enter your input in Octal\n');
  console.log("Output: "+octalToHex(inp11));
  break;

  case 12:
  const inp12 = readLineSync.question('Enter your input in Octal\n');
  console.log("Output: "+octalToBinary(inp12));
  break;

  default:
  console.log('Invalid Option');
  break;
}





