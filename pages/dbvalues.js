import {
  ref,
  set,
  push,
  getDatabase,
  onChildAdded,
  onChildChanged,
  onChildRemoved,
  onValue,
} from "firebase/database";

const Dbvalues = () => {
  // from which db to collect the data

  const db = getDatabase();

  const choreData = ref(db, "Chores/" + "MmX-sHs960IH4yClei4");
  onValue(choreData),
    (snapshot) => {
      const data = snapshot.val();
      updateChoreData(postElement, data);
      console.log(data);
    };
  return (
    <>
      <p>This is a test </p>
    </>
  );
};
export default Dbvalues;
