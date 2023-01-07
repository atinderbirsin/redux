import Button from "../components/Button";
import SongList from "../components/SongList";
import { useDispatch } from "react-redux";
import { resetSong } from "../store/songSlice";

function HomePage() {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex mt-6 justify-center gap-3 w-full flex-wrap">
        <Button onClick={() => dispatch(resetSong())} danger rounded>
          Reset Songs
        </Button>
        <Button danger rounded>
          Reset Books
        </Button>
      </div>

      <div className="w-full flex justify-center">
        <SongList />
      </div>
    </div>
  );
}

export default HomePage;
