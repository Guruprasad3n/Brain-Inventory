import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const handleLogin = () => {
    const userData = { email, password };
    axios
      .post(`http://localhost:8001/login`, userData)
      .then((res) => {
        console.log(res)
        localStorage.setItem("token", JSON.stringify(userData.email))
        alert("Login Success");
        navigate("/chat")
      })
      .catch((e) => {
        console.log(e)
        alert("Invalid Credintials");
      });
  };

  return (
    <>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isRequired
        />
      </FormControl>

      <FormControl>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isRequired
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </Button>
          </InputRightElement>
        </InputGroup>

        <Button
          onClick={handleLogin}
          display={"block"}
          m="auto"
          mt="3"
          background={"teal"}
          color="white"
          w="50%"
        >
          Login
        </Button>
      </FormControl>
    </>
  );
}
export default Login;
