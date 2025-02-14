import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { useParams } from "next/navigation";

export default function ProfileAvatar({
  width = 50,
  height = 50,
  src,
}: {
  width?: number;
  height?: number;
  src?: string;
}) {
  const { id } = useParams<{ id: string }>();
  return (
    <Badge
      overlap='circular'
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      badgeContent={
        <div className='h-3 w-3 rounded-full bg-[#04802E] border border-white' />
      }>
      <Avatar alt={id} src={src} sx={{ width: width, height: height }} />
    </Badge>
  );
}
