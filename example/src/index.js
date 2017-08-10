import React from "react";

import {
  Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill, Fit,
  Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Quote, Slide, SlideSet,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text
} from "../../src";

import preloader from "../../src/utils/preloader";

import createTheme from "../../src/themes/default";

import Interactive from "../assets/interactive";

require("normalize.css");
require("../../src/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  architecture: require("../assets/architecture.png"),
  code1: require("../assets/code1.png"),
  code2: require("../assets/code2.png"),
  code3: require("../assets/code3.png"),
};

preloader(images);

const theme = createTheme({
  primary: "#2e3644",
  secondary: "#4a6087",
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck autoplay={false} transition={["zoom", "slide"]} theme={theme} transitionDuration={500}>

        <Slide transition={["zoom"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React-Apollo
          </Heading>
          <Heading size={1} fit caps>
            A HOC for Apollo-Client
          </Heading>
          {/* <Heading size={1} fit caps textColor="black">
            Where You Can Write Your Decks In JSX
          </Heading> */}
          {/* <Link href="https://github.com/FormidableLabs/spectacle">
            <Text bold caps textColor="tertiary">View on Github</Text>
          </Link> */}
          {/* <Text textSize="1.5em" margin="20px 0px 0px" bold>Easily fetch data from GraphQL servers to build complex and reactive UIs</Text> */}
        </Slide>

        <Slide id="wait-what" transition={["slide"]} notes="Random notes asdf">
          {/* <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/> */}
          <Heading size={1} caps textColor="#b3bfd6" textFont="primary">
            Why??
          </Heading>
          <List textColor="white" textFont="primary">
            <Appear><ListItem margin={'10px 0px 10px 0px'}>Fetch data from graphQL servers and build complex reactive UIs</ListItem></Appear>
            <Appear><ListItem margin={'10px 0px 10px 0px'}>Works with any graphQL server built within a backend</ListItem></Appear>
            <Appear><ListItem margin={'10px 0px 10px 0px'}>Can drop into any existing project</ListItem></Appear>
            <Appear><ListItem margin={'10px 0px 10px 0px'}>Sounds cool... :D</ListItem></Appear>
          </List>
        </Slide>
        {/* <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/deck.example")}
            margin="20px auto"
          />
        </Slide> */}
        <Slide transition={["slide"]} notes="blah blah">
          <Heading size={1} caps textColor="black" textFont="primary">
            Architecture
          </Heading>
          <Layout>
            <Fill>
              <List textColor="white" textFont="primary">
                <Appear><ListItem margin={"75px 0px 10px 0px"}>Can make queries directly to any microservice with a graphQL server</ListItem></Appear>
                <Appear><ListItem margin={"25px 0px 10px 0px"}>Node useful as an intermediary layer (MS don't have to implement graphQL)</ListItem></Appear>
              </List>
            </Fill>
            <Fill>
              <Image src={images.architecture.replace("/", "")} margin="90px 10px 0px 40px" height="300px"/>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["slide"]} notes="blah blah blah">
          <Heading size={3} caps textColor="black" textFont="primary">
            Define Schema Types on the Server
          </Heading>
          <Layout>
            <Fill>
              <List textColor="white" textFont="primary">
                <Appear><ListItem margin={"75px 0px 10px 0px"}>Specifies what queries can be made</ListItem></Appear>
                <Appear><ListItem margin={"25px 0px 10px 0px"}>Can nest relationships within types User -> Company</ListItem></Appear>
                <Appear><ListItem margin={"25px 0px 10px 0px"}>Must provide way to resolve nested data in query definition</ListItem></Appear>
              </List>
            </Fill>
            <Fill>
              <Image src={images.code1.replace("/", "")} margin="90px 10px 0px 40px" height="300px"/>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["slide"]} notes="Here we specify the return type to be an array of usertypes.
          Then define a resolver that makes GET request to a microservice. One should create utility classes to chain requests and manipulate data returned">
          <Heading size={4} caps textColor="black" textFont="primary">
            Queries - Define RootQueryType on Server
          </Heading>
          <Image src={images.code2.replace("/", "")} margin="10px 10px 0px 40px" height="250px"/>
          <Layout>
            <Fill>
              <List textColor="white" textFont="primary">
                <Appear><ListItem textSize="27px" margin={"25px 0px 10px 0px"}>Object will hold all possible queries that can be made to the graphQL server</ListItem></Appear>
              </List>
            </Fill>
            <Fill>
              <List textColor="white" textFont="primary">
                <Appear><ListItem textSize="27px" margin={"25px 0px 10px 0px"}>Node can call any of the microservices to obtain data</ListItem></Appear>
              </List>
            </Fill>
            <Fill>
              <List textColor="white" textFont="primary">
                <Appear><ListItem textSize="27px" margin={"25px 0px 10px 0px"}>Queries defined on the client will format and dictate what data will be returned</ListItem></Appear>
              </List>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["slide"]} notes="">
          <Heading size={4} caps textColor="black" textFont="primary">
            Mutations - Define RootMutation on Server
          </Heading>
          <Image src={images.code3.replace("/", "")} margin="10px 10px 0px 40px" height="250px"/>
          <Layout>
            <Fill>
              <List textColor="white" textFont="primary">
                <Appear><ListItem textSize="27px" margin={"25px 0px 10px 0px"}>Mutations are used to make writes to the backend</ListItem></Appear>
              </List>
            </Fill>
            <Fill>
              <List textColor="white" textFont="primary">
                <Appear><ListItem textSize="27px" margin={"25px 0px 10px 0px"}>The functions are explicitly called within the client when needed</ListItem></Appear>
              </List>
            </Fill>
            <Fill>
              <List textColor="white" textFont="primary">
                <Appear><ListItem textSize="27px" margin={"25px 0px 10px 0px"}>Precautions must be made to avoid stale cached data when syncing data in the UI</ListItem></Appear>
              </List>
            </Fill>
          </Layout>
        </Slide>

        <Slide>
          <Heading margin={"0px 0px 60px 0px"}size={4} caps textColor="white" textFont="primary">
            Client Side Integration
          </Heading>
          <ComponentPlayground
            theme="dark"
          />
        </Slide>
        <Slide transition={["slide"]} notes="Random notes asdf">
          {/* <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/> */}
          <Heading size={1} caps textColor="#b3bfd6" textFont="primary">
            Cons / Security
          </Heading>
          <List textColor="white" textFont="primary">
            <Appear><ListItem margin={'10px 0px 10px 0px'}>Single point of failure</ListItem></Appear>
            <Appear><ListItem margin={'10px 0px 10px 0px'}>Potential for large / unpredicatable amounts of data due to multiple endpoint requests</ListItem></Appear>
            <Appear><ListItem margin={'10px 0px 10px 0px'}>Code injection, sniffing, and possible mass recursive queries send to server</ListItem></Appear>
            <Appear><ListItem margin={'10px 0px 10px 0px'}>Wasteful to strip data, rather than handle that from an API standpoint</ListItem></Appear>
          </List>
        </Slide>
        {/* <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              Full Width
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit textColor="tertiary">
              Adjustable Darkness
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={1} caps fit textColor="primary">
              Background Imagery
            </Heading>
          </Appear>
        </Slide> */}

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading caps fit>Flexible Layouts</Heading>
          <Layout>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                Left
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                Right
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <BlockQuote>
            <Quote>Wonderfully formatted quotes</Quote>
            <Cite>Ken Wheeler</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["spin", "zoom"]} bgColor="tertiary">
          <Heading caps fit size={1} textColor="primary">
            Inline Markdown
          </Heading>
          <Markdown>
            {`
  ![Markdown Logo](${images.markdown.replace("/", "")})

  You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
  * Lists too!
  * With ~~strikethrough~~ and _italic_
  * And let's not forget **bold**
            `}
          </Markdown>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps fit textColor="tertiary">
            Your presentations are interactive
          </Heading>
          <Interactive/>
        </Slide>
      <Slide transition={["slide"]} bgColor="primary">
        <Heading size={3} caps textColor="tertiary">
          End
        </Heading>
      </Slide>
      </Deck>
    );
  }
}
