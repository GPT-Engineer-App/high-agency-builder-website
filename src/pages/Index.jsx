import { Container, Text, VStack, Heading, Box, Link, List, ListItem } from "@chakra-ui/react";

const beliefs = [
  { year: 2024, text: "Soon Agents will work, everything else is a footnote." },
  { year: 2023, month: "June", text: "There is a big opportunity to create value, and reduce risk, by focusing on evals for agents and LLMs." },
  { year: 2023, month: "March", text: "LLMs can take actions, let's make them into 'agents'." },
  { year: 2023, month: "February", text: "AI will make the price of software go to zero." },
  { year: 2022, text: "AGI is here soon, let's load up on semiconductor stocks." },
  { year: 2019, text: "Tesla stock is crazy cheap for only being such a strong luxury brand (+ has much more potential)." },
  { year: 2016, text: "Long term future, we will live in a compute economy, let's long NVIDIA." },
  { year: 2014, text: "Ethereum might be big, let's buy 15k as a 2x arbitrage from Mircea Eliade." },
];

const interests = [
  "Future of humanity",
  "Best practices for building products",
  "Science+Engineering-mindset to design mechanisms for a maximally positive-sum society",
];

const thingsIMade = [
  "Stockholm AI: used to be a technically focused group with the best AI people in Stockholm",
  "AlphaGo Zero re-implementation",
  "Sana Labs: helped mainly with great talent after me",
  "SotA",
  "Depict.ai: YC startup",
  "gpt-engineer: one of the first concepts for LLM doing autonomous coding",
];

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="start">
        <Box>
          <Heading as="h1" size="2xl">Hey, I am Anton Osika</Heading>
          <Text fontSize="xl">a high-agency first-principles builder.</Text>
          <Text fontSize="lg">I like talking to others who are high on openness and share ambitions and passion.</Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg">Beliefs</Heading>
          <Text fontSize="md">This is a selection of my beliefs over time.</Text>
          <List spacing={3} mt={3}>
            {beliefs.map((belief, index) => (
              <ListItem key={index}>
                <Link href={`#${belief.year}-${belief.month || ""}`} color="teal.500">
                  {belief.year} {belief.month && `${belief.month}:`} {belief.text}
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="lg">Interests</Heading>
          <List spacing={3} mt={3}>
            {interests.map((interest, index) => (
              <ListItem key={index}>{interest}</ListItem>
            ))}
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="lg">Things I made</Heading>
          <List spacing={3} mt={3}>
            {thingsIMade.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;