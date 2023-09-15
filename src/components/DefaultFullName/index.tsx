import { useState } from "react";

export default function DefaultFullName() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div className="bg-green-900 p-2 gap-2 flex flex-col rounded-md w-[30ch]">
      <h2 className="text-xl text-white">Default computed</h2>

      <FirstName handleChange={(e) => setFirstName(e.target.value)} />
      <LastName handleChange={(e) => setLastName(e.target.value)} />

      <p className="text-white">
        Full name: {firstName} {lastName}
      </p>
    </div>
  );
}

function FirstName({ handleChange }) {
  return (
    <>
      <label htmlFor="lastName" className="text-white">
        Last name:
      </label>
      <input id="lastName" onChange={handleChange} />
    </>
  );
}

function LastName({ handleChange }) {
  return (
    <>
      <label htmlFor="firstName" className="text-white">
        First name:
      </label>
      <input id="firstName" onChange={handleChange} />
    </>
  );
}
