import { json, redirect } from "react-router-dom";

import EventForm from "../components/EventForm";

function NewEventPage() {
  return <EventForm />;
}

export const action = async function ({ request }) {
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };
  console.log(eventData);

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    throw json({ message: "could not submit event" }, { status: 500 });
  }

  return redirect("/events");
};

export default NewEventPage;
