import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";

export default function ProfileAvatar() {
  return (
    <Badge
      overlap='circular'
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      badgeContent={
        <div className='h-4 w-4 rounded-full bg-[#04802E] border border-white' />
      }>
      <Avatar
        alt='Babatunde'
        src='/newuser.png'
        sx={{ width: 100, height: 100 }}
      />
    </Badge>
  );
}
