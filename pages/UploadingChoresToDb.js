import React from "react";
import { useState } from "react";
import AddChoresForm from "../components/dataFlow/choreregistreation/AddChoresForm";
//  import choreList from '../choreregistreation/choreList';

import {
  ref,
  set,
  push,
  getDatabase,
  onChildAdded,
  onChildChanged,
  onChildRemoved,
} from "firebase/database";
function UploadingChoresToDb() {
  //--------------------------------------------+

  const [write, setWrite] = useState();

  const db = getDatabase();
  console.log(db + "is from the datase");

  //--------------------------------------------+

  // function userDate(intros, details, lofBs) {
  //   const db = getDatabase();
  //   set(ref(db, "Chores/" + "005"), {
  //     //  so if i break this up :
  //     intros: "fresh paing large scale",
  //     details: "a new building ",
  //     LofBs: "painter",
  //   });
  // }
  // setWrite(userDate); // in my mind this will trigger the upper funciotn

  //trying the  append method

  const postList = ref(db, "Chores" + "MmvZDWcPI6AIKi4WJ-z");
  const newPost = push(postList);
  set(newPost, {
    name: "child updated? ",
    type: "appendTester",
  });
  console.log(newPost.key);

  //can be used to listen to the messageing app on this node

  //  first we add some data to this postId
  function userDate(intros, details, lofBs) {
    const db = getDatabase();
    set(ref(db, "Chores/" + "MmvZDWcPI6AIKi4WJ-z"), {
      //  so if i break this up :
      intros: "fresh paing large scale",
      details: "a new building ",
      LofBs: "painter",
    });
  }

  const contactRef = ref(db, "Chores/" + "MmvZDWcPI6AIKi4WJ-z");
  onChildAdded(contactRef, (data) => {
    addContactElement(
      postElement,
      data.key,
      data.val().text,
      data.val().author
    );
  });

  onChildChanged(contactRef, (data) => {
    setContactElement(
      postElement,
      data.key,
      data.val().text,
      data.val().author
    );
  });
  onChildRemoved(contactRef, (data) => {
    deletaContactElement(
      postElement,
      data.key,
      data.val().text,
      data.val().author
    );
  });

  async function toDbHandler(choreDataObject) {
    const responce = await fetch(
      // this is the api to the Firestore page  "      https://firestore.googleapis.com/v1/projects/YOUR_PROJECT_ID/databases/(default)/documents/cities/LA
      // "

      // this goes to the test page of the server
      "https://test-2a962-default-rtdb.europe-west1.firebasedatabase.app/Chores.json",
      // this one is sendig the data to the realtiem sys
      // "https://balemoja-9c5e6-default-rtdb.europe-west1.firebasedatabase.app/Chores.json",

      // "https://balmoja-49d90-default-rtdb.europe-west1.firebasedatabase.app/Chores.json",
      {
        method: "POST",
        body: JSON.stringify(choreDataObject),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!responce.ok) {
      throw new Error("Error");
    }
    const data = await responce.json();
    console.log(data);
    // will need to catch this error at some point
  }
  return (
    <React.Fragment>
      <section>
        {write}
        <AddChoresForm onAddchoresform={toDbHandler} />
      </section>
    </React.Fragment>
  );
}

export default UploadingChoresToDb;
