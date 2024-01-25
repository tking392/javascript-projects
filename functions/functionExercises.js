//A. makeLine(size) function
// Write a function makeLine(size) that returns a line with exactly size hashes. 

function makeLine(size) {
    let line = '';
    for (i = 0; i < size; i++) {
        line += '#';
    }
    return line;
}

// console.log(makeLine(5));

//B. makeSquare(size) function
// Wrate a function called makeSquare(size) that returns size by size string of hashes. Mush be a single string. 

function makeSquare(size) {
    let square = '';
    for (let i = 0; i < size; i++) {
       square += (makeLine(size) + '\n'); 
    }
    return square.slice(0,-1);
}

// console.log(makeSquare(5));

//C. makeRectangle(width, heigth) function
// Write a function makeRectangle(width, heigth) that returns a rectangle with the given width and heigth. Use makeLine function to do ths. 

function makeRectangle(width, heigth) {
    let rectangle = '';
    for (let i= 0; i < heigth; i++) {
        rectangle += (makeLine(width) + '\n');
    }
    return rectangle.slice(0,-1);
}

// console.log(makeRectangle(5, 3));

//D. makeDownwardStairs(height) function
// Write a function makeDownwardStairs(height) that prints a stairs pattern with the given height. Use makeLine function to do this. 

function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
        stairs += (makeLine(i + 1) + '\n');
    }
    return stairs.slice(0,-1);
}

// console.log(makeDownwardStairs(5));

//E. makeSpaceLine(numSpaces, numChars) function
// Write a function makeSpaceLine(numSpaces, num Chars) that returns a line with exactly the specified number of spaces, followed by the specified number of hashes, followed by spaces. 

function makeSpaceLine(numSpaces, numChars) {
    let spaceLine = '';
    let space = '';
    let line = makeLine(numChars);
    for (let i = 0; i < numSpaces; i++) {
        space += ' ';
    }
    spaceLine = space + line + space;
    return spaceLine;
}

// console.log(makeSpaceLine(3, 5));

//F. makeIsoscelesTriangle(height) function
// Write a function makeIsoscelesTriangle(height) that returns a triangle of the given height. 

function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
        triangle += (makeSpaceLine(height - i - 1, 2 * i + 1) + '\n');
    }
    return triangle.slice(0,-1);
}

// console.log(makeIsoscelesTriangle(5));

//G. makeDiamond(height) function
// Write a function that returns a diamond where the triangle formed by the top portion has the given height. 

function makeDiamond(height) {
    let diamond = '';
    let copy = makeIsoscelesTriangle(height);
    let startFlip = copy.split('');
    let connect = startFlip.reverse();
    let flipped = connect.join('');
    diamond = makeIsoscelesTriangle(height) + '\n' + flipped; 
    return diamond;
}

console.log(makeDiamond(5));