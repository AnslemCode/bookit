import RoomCard from "@/components/RoomCard";
import rooms from "../data/rooms.json";
import Heading from "@/components/Heading";
export default function Home() {
  return (
    <>
      <Heading title="Avaliable Rooms" />
      {rooms.length > 0 ? (
        rooms.map((room) => (
          <div key={room.$id}>
            <RoomCard room={room} />
          </div>
        ))
      ) : (
        <p>No rooms found</p>
      )}
    </>
  );
}
