import * as React from "react"
import { Div, Text, Input, Blue } from "../styles/styled";
import '../styles/style.css'
const IndexPage = () => {
  const [user, setUser] = React.useState()
  const [id, setId] = React.useState("")
  const [err, setErr] = React.useState();
  return (
    <>
    {!user ? (
    <Div d="flex" ff="column" ai="center">
      {err && (
        <Div bg="#ff4949" c="white" w="80vw" p="10px 20px" br="10px" pos="absolute">
          {err}
        </Div>
      )}
      <Div d="flex" jc="center">
        <Text c="#5865F2" fs="60px" br="10px" ta="center">discord info</Text>
      </Div>
      <Div ff="column" ai="center" ta="center">
        <Div>
          <Input p="10px 30px" fs="40px" br="15px" bg="#40444B" c="#c5cad3" _hover="border-radius: 0 15px 15px 0;" placeholder="user id" t="0.2s ease all" w="45vw" onChange={(e) => {setId(e.target.value)}} ></Input>
        </Div> 
        <Div d="flex" ai="center" jc="center" w="100%">
          <Div b="1px solid #40444B" w="20%" h="0px"></Div>
          <Text c="#40444B" m="0.67em">or</Text>
          <Div b="1px solid #40444B" w="20%" h="0px"></Div>
        </Div>
        <Div>
          <Input p="10px 30px" fs="40px" br="15px" bg="#40444B" c="#c5cad3" _hover="border-radius: 0 15px 15px 0;" placeholder="token (soon maybe)" t="0.2s ease all" w="45vw" readOnly></Input>
        </Div>
        <Blue onClick={async () => {
          const result = await fetch("https://discordinfo-server.glitch.me/discord",{
            headers: {"Content-Type": "application/json"},
            method: "POST",
            body: JSON.stringify({id})
          })
          const content = await result.json();
          if(content.error) return setErr(content.error.message)
          setUser(content)
        }}>Search</Blue>
      </Div>
    </Div>
    ): (
      <Div c="white" d="flex" ff="column" ai="center">
      {user.type === "id" ? (
        <>
        <Div>{user.value.id}</Div>
        <Div d="flex" ff="column" w="50vw" bg="#40444B" p="40px" br="20px"> 
          <Div m="0 0 10px 0" fs="20px">
            information
          </Div>
          <Div d="flex">
            <Div>
              <img src={user.value.avatarURL} alt="logo" />
            </Div>
            <Div m="5px 25px">
              <Div c="#5865F2" fw="800" fs="25px">{user.value.tag}</Div>
              <Div>{user.value.bot ? "bot" : "not a bot"}</Div>
              <Div d="flex">created  {new Date(user.value.createdTimestamp).toLocaleString()}</Div>
              <Div></Div>
              <Div></Div>
            </Div>
          </Div>
          <Div m="0 0 10px 0" fs="20px">
            json api
          </Div>
          <Div ow="anywhere" c="#6de36d">
            {JSON.stringify(user.value)}
          </Div>
        </Div>
        </>
      ): (
        <Div>
          token is not implemented !
        </Div>
      )}
      </Div>
    )}
    </>
  )
}

export default IndexPage
