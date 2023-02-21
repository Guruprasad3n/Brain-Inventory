import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Login from "./Loginmain";
import Signup from "./Signup";

function Home() {
  return (
    <Container maxW={"xl"} centerContent>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        mb={"2"}
        color={"black"}
      >
        <Text fontSize={"2xl"}>Chat App</Text>
      </Box>

      <Box
        bg={"wgite"}
        w={"80%"}
        py={"5"}
        borderRadius={"lg"}
        border="1px solid teal"
      >
        <Tabs isFitted variant="enclosed" colorScheme="green">
          <TabList>
            <Tab>Login</Tab>
            <Tab>Register</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}
export default Home;
