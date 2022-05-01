// 1
// console.log(hello);                                   
// var hello = 'world';                                 
// console.log (hello) would log undefined

// 2
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
// console.log would log "magnet because its accessing the information in the funtion test()"

// 3
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
//console.log would log "only okay" because its logging the value in the function print() first
// then would console log "super cool"

// it console.logged only "super cool"

// 4
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
//  console.log's "chicken" then "half chicken"

// 5
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// Its going to give an error because there is no mean function

// 6
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
//console.log's "rock, and r&b because they rest in the function 
// then "disco"
// Right Answer:
// console.log'd undefined , rock, r&b and disco


// 7
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

// console.log's "san jose", seattle, "burbank", san jose

// 8 - Bonus ES6: const
