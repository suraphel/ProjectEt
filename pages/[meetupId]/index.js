// temp off for net service

import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import Link from "next/link";
import MeetupDetail from "../../components/meetups/MeetupDetails";
import Chatroom from "../../pages/chatroom";

// import MeetupDetail from "../ components/meetups/MeetupDetails";

function MeetupDetails(props) {
  return (
    <Fragment>
      {/* <Head>
        <title>{props.meetupDetails.title}</title>
        <meta name="description" content={props.meetupDetails.description} />
      </Head> */}

      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
      <Chatroom />
      <button>
        {" "}
        <Link href="chatroom">Contact the Client</Link>
      </button>
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://admin:fdxCicGrFtNJd9gA@cluster0.xdax3.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false, //states if all the pages are predefined / 404
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://admin:fdxCicGrFtNJd9gA@cluster0.xdax3.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;

//-------------------------
// export async function getServerSideProps() {
//   console.log(process.env.FIREBASE_AUTH);
//   return {
//     props: { Hello: suri },
//   };
// }
