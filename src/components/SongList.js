import Button from "./Button";
import { AiOutlinePlus, AiFillDelete } from "react-icons/ai";
import { addSong, removeSong } from "../store/songSlice";
import { useSelector, useDispatch } from "react-redux";

function generateSongName() {
  const adjectives = [
    "Lonely",
    "Broken",
    "Silent",
    "Loud",
    "Happy",
    "Sad",
    "Bright",
    "Dark",
  ];
  const nouns = [
    "Moon",
    "Heart",
    "Soul",
    "Rain",
    "River",
    "Dream",
    "Night",
    "Sky",
  ];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return `${adjective} ${noun}`;
}

function SongList() {
  const songs = useSelector((state) => state.songs);
  const dispatch = useDispatch();

  const onDeleteButtonClick = (index) => {
    dispatch(removeSong(index))
  }

  const renderedSongs = songs.map((song, index) => {
    return <div className="flex items-center gap-2" key={index}>
        <p className="border-b border-gray-500">{index+1}. {song}</p>
        <AiFillDelete className="text-red-500 cursor-pointer" onClick={() => onDeleteButtonClick(index)}/>
    </div>
  })

  return (
    <div className="border-t border-gray-500 w-10/12 flex justify-between p-2">
      <div>{renderedSongs}</div>

      <div>
        <Button
          onClick={() => dispatch(addSong(generateSongName()))}
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

export default SongList;
