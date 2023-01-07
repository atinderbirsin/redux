import { useDispatch } from "react-redux";
import BookList from "../components/BookList";
import Button from "../components/Button";
import Panel from "../components/Panel";
import { resetBook } from "../store/bookSlice";

function BooksPage() {
  const dispatch = useDispatch();

  return (
    <Panel className="mt-4">
      <Button onClick={() => dispatch(resetBook())} danger>
        Reset Books
      </Button>
      <BookList />
    </Panel>
  );
}

export default BooksPage;
