import Button from "../components/Button";
import SongList from "../components/SongList";
import { useDispatch } from "react-redux";
import { resetSong } from "../store/songSlice";
import { resetBook } from "../store/bookSlice";
import BookList from "../components/BookList";
import { GiLoveSong } from "react-icons/gi";
import { BsBookHalf } from "react-icons/bs";
import Panel from "../components/Panel";
import Header from "../components/Header";

function HomePage() {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(resetSong());
    dispatch(resetBook());
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex mt-6 justify-center gap-3 w-full flex-wrap">
        <Button onClick={handleButtonClick} danger rounded>
          Reset
        </Button>
      </div>

      <Panel>
        <Header>
          Songs <GiLoveSong />
        </Header>
        <SongList />
      </Panel>

      <Panel>
        <Header>
          Books <BsBookHalf />
        </Header>
        <BookList />
      </Panel>
    </div>
  );
}

export default HomePage;
