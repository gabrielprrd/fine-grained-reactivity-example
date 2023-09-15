import { useObservable, observer, Memo } from "@legendapp/state/react";
import { ObservableObject } from "@legendapp/state";

const FullName = ({
  user,
}: {
  user: ObservableObject<{
    firstName: string;
    lastName: string;
  }>;
}) => (
  <p className="text-white">
    Full name: <Memo>{user.firstName}</Memo> <Memo>{user.lastName}</Memo>
  </p>
);

const FirstName = observer(
  ({
    user,
  }: {
    user: ObservableObject<{
      firstName: string;
      lastName: string;
    }>;
  }) => (
    <div className="flex flex-col gap-2">
      <label htmlFor="firstName" className="text-white">
        First Name
      </label>
      <input
        id="firstName"
        value={user.firstName.get()}
        onChange={(e) => user.firstName.set(e.target.value)}
      />
    </div>
  )
);

const LastName = observer(
  ({
    user,
  }: {
    user: ObservableObject<{
      firstName: string;
      lastName: string;
    }>;
  }) => (
    <div className="flex flex-col gap-2">
      <label htmlFor="lastName" className="text-white">
        Last Name
      </label>
      <input
        id="lastName"
        value={user.lastName.get()}
        onChange={(e) => user.lastName.set(e.target.value)}
      />
    </div>
  )
);

export default function FineGrainedFullName() {
  const user = useObservable({
    firstName: "",
    lastName: "",
  });
  return (
    <div className="bg-green-900 p-2 gap-2 flex flex-col rounded-md w-[30ch]">
      <h2 className="text-xl text-white">Fine Grained Full Name</h2>
      <FirstName user={user} />
      <LastName user={user} />
      <FullName user={user} />
    </div>
  );
}
