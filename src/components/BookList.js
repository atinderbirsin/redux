import { AiFillDelete, AiOutlinePlus } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { addBook, removeBook } from "../store/bookSlice";
import Button from "./Button";

function generateBookName() {
  const adjectives = [
    "Mysterious",
    "Magical",
    "Dark",
    "Light",
    "Funny",
    "Sad",
    "Exciting",
    "Thrilling",
  ];
  const nouns = [
    "Garden",
    "Adventure",
    "Journey",
    "Mystery",
    "Love",
    "Friendship",
    "Enemy",
    "War",
  ];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return `${adjective} ${noun}`;
}

function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const onDeleteButtonClick = (index) => {
    dispatch(removeBook(index));
  };

  const renderedBooks = books.map((book, index) => {
    return (
      <div className="flex items-center gap-2" key={index}>
        <p className="border-b border-gray-500">
          {index + 1}. {book}
        </p>
        <AiFillDelete
          className="text-red-500 cursor-pointer"
          onClick={() => onDeleteButtonClick(index)}
        />
      </div>
    );
  });

  return (
    <div className="border-t border-gray-500 w-10/12 flex justify-between p-2">
      <div>{renderedBooks}</div>

      <div>
        <Button
          onClick={() => dispatch(addBook(generateBookName()))}
          primary
          rounded
          className="flex items-center gap-1"
        >
          Add <AiOutlinePlus />
        </Button>
      </div>
    </div>
  );
}

export default BookList;
