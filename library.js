const library = [
  {
    title: "The Purpose Driven Life",
    author: "Rick Warren",
    isAvailable: true,
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    isAvailable: true,
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    isAvailable: true,
  },
];

let newBook1 = {
  title: "Melania",
  author: "Melania Trump",
  isAvailable: true,
};

let newBook2 = {
    title: "Save America",
    author: "Donald Trump",
    isAvailable: true,
  };

const addNewBooks =(...newBooks)=>{
    library.push(...newBooks);
} 

addNewBooks(newBook1, newBook2)

console.log("The Library with New Books: ", library);

const displayAvailableBooks = () => {
  let availableBooks = library.filter((book) => book.isAvailable == true);
  return availableBooks
};

const availableBooks = displayAvailableBooks();

console.log(availableBooks)

const borrowBook = (bookTitle) => {

  let bookToBorrow = library.find((book) => book.title === bookTitle);
//   console.log(bookToBorrow);

  const titleIsAvailable = library.some(book => book.title === bookTitle)


 const proceedToBorrow =()=>{
    if (bookToBorrow.isAvailable === true) {
        bookToBorrow.isAvailable = false;
        console.log(`You borrowed the book: ${bookTitle}`);
      } else {
        console.log(`${bookTitle} is not available right now`);
      }
 } 
 if(titleIsAvailable){
    proceedToBorrow()
  } else {
    console.log(`${bookTitle} is not in the library`)
  }
};

displayAvailableBooks();

borrowBook("Melania");
borrowBook("Melania");
borrowBook("The Draw")
borrowBook("The Purpose Driven Life")

displayAvailableBooks();

