import { Stack, Avatar, AvatarGroup } from "@mui/material";
const MiAvatar = () => {
    const test = ()=>{
        let name = "M Talha"
        const result = name.split(' ')[0][0] + name.split(' ')[1][0];
        console.log(result)
    }
    test()
    const stringAvatar = (name:string)=>{
        return {
            sx: {
              bgcolor: "success.light",
            },
            children: name.split(' ')[0][0] + name.split(' ')[1][0],
          };
    }
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={1}>
        <Avatar {...stringAvatar("M Talha")}/>
        <Avatar {...stringAvatar("John Dick")}/>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" alt="john"/>
        <Avatar src="https://randomuser.me/api/portraits/men/5.jpg" alt="john"/>
      </Stack>
      <Stack direction="row" spacing={1}>
        <AvatarGroup max={2} total={5}>
        <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" alt="john"/>
        <Avatar src="https://randomuser.me/api/portraits/men/8.jpg" alt="john"/>
        <Avatar src="https://randomuser.me/api/portraits/men/3.jpg" alt="john"/>
        <Avatar src="https://randomuser.me/api/portraits/men/2.jpg" alt="john"/>
        <Avatar src="https://randomuser.me/api/portraits/men/6.jpg" alt="john"/>
        <Avatar src="https://randomuser.me/api/portraits/men/9.jpg" alt="john"/>
        </AvatarGroup>
      </Stack>
      <Stack direction="row" spacing={1}>
        <AvatarGroup max={4}>
        <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" alt="john"/>
        <Avatar src="https://randomuser.me/api/portraits/men8.jpg" alt="John Wick"/>
        <Avatar src="https://randomuser.me/api/portraits/men/3.jpg" alt="john"/>
        <Avatar src="https://randomuser.me/api/portraits/men/2.jpg" alt="john"/>
        <Avatar src="https://randomuser.me/api/portraits/men/6.jpg" alt="john"/>
        <Avatar src="https://randomuser.me/api/portraits/men/9.jpg" alt="john"/>
        </AvatarGroup>
      </Stack>
    </Stack>
  );
};

export default MiAvatar;
