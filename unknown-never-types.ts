let userInput: unknown; // unknown is a type that is not known
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number): never { // never is a type that never returns anything;not intended to return anything
  throw { message: message, errorCode: code };
}

generateError('An error occurred!', 500);
