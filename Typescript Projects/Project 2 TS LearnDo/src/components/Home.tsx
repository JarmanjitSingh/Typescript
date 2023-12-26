import { Button, Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const languages = [
  {
    name: "Japanese",
    code: "ja",
  },
  {
    name: "Hindi",
    code: "hi",
  },
  {
    name: "Spanish",
    code: "es",
  },
  {
    name: "Japanese",
    code: "fr",
  },
];

const Home = () => {

  const navigate = useNavigate();

  const languageSelectHandler = (language: string):void =>{
    navigate(`/learn?language=${language}`)
  }

  return (
    <Container maxWidth={"sm"}>
      <Typography variant="h3" p={"2rem"} textAlign={"center"}>
        Welcome, Begin your journey of learning.
      </Typography>

      <Stack
        direction={"row"}
        spacing={"2rem"}
        p={"2rem"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {
          languages.map(item=> (
            <Button onClick={()=>languageSelectHandler(item.code)} variant="contained" key={item.code}>{item.name}</Button>
          ))
        }

      </Stack>
        <Typography textAlign={'center'}>Choose one language from above</Typography>
    </Container>
  );
};

export default Home;
