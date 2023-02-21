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

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const handleSignup = () => {
    const userData = { name, email, phone, password };
    axios
      .post(`http://localhost:8001/signup`, userData)
      .then((res) => {
        alert("Signip Success");
      })
      .catch((e) => {
        alert("User Already Exist");
      });
  };

  return (
    <>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          isRequired
        />
      </FormControl>
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
        <FormLabel>Phone Number</FormLabel>
        <Input
          placeholder="Phone"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
          onClick={handleSignup}
          display={"block"}
          m="auto"
          mt="3"
          background={"teal"}
          color="white"
          w="50%"
        >
          Register
        </Button>
      </FormControl>
    </>
  );
}
export default Signup;
