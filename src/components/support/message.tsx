import ProfileAvatar from "./profile-avatar";

export default function Message({
  children,
  alignRight,
}: {
  children?: React.ReactNode;
  alignRight?: boolean;
}) {
  return (
    <div
      className={`flex mt-5 items-center gap-2 ${
        alignRight && "float-right"
      }`}>
      {!alignRight && <ProfileAvatar width={30} height={30} />}
      <div
        className={`p-3 w-fit max-w-xs rounded-md bg-white ${
          alignRight && "!bg-[#4534B8] !text-white"
        }`}>
        {children}
      </div>
      {alignRight && <ProfileAvatar width={30} height={30} />}
    </div>
  );
}
