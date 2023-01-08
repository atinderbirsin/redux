import { useDispatch } from "react-redux";
import Button from "../components/Button";
import Panel from "../components/Panel";
import SongList from "../components/SongList";
import { resetSong } from "../store";

function SongsPage() {
  const dispatch = useDispatch();

  return (
    <Panel className="mt-4">
      <Button danger onClick={() => dispatch(resetSong())}>
        Reset Songs
      </Button>
      <SongList />
    </Panel>
  );
}

export default SongsPage;
