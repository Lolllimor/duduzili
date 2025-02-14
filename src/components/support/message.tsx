import ProfileAvatar from "./profile-avatar";

export default function Message({
  children,
  alignRight,
  photo,
}: {
  children?: React.ReactNode;
  alignRight?: boolean;
  photo?: string;
}) {
  return (
    <div
      className={`flex mt-5 items-center gap-2 ${alignRight && "justify-end"}`}>
      {!alignRight && <ProfileAvatar src={photo} width={30} height={30} />}
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
