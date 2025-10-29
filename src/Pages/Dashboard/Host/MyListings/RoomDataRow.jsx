const RoomDataRow = ({ room, index, handleUpdate, handleDelete }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <img
          src={room.image}
          alt="room image"
          className="mask mask-squircle h-12 w-12"
        />
      </td>
      <td className="font-bold">{room.title}</td>
      <td>{room.location}</td>
      <td>৳{room.rent.amount}</td>
      <td>{room.rent.type}</td>
      <td>{room.availableFrom}</td>
      <td>{room.availableTo}</td>
      <td>
        <button
          onClick={() => handleDelete(room)}
          className="btn btn-xs bg-red-500 text-white"
        >
          Delete
        </button>
      </td>
      <td>
        <button
          onClick={() => handleUpdate(room)}
          className="btn btn-xs bg-green-500 text-white"
        >
          Update
        </button>
      </td>
    </tr>
  );
};

export default RoomDataRow;
