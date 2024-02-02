import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div className="">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default SetupPage;
