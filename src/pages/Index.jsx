import { Box, Button, Container, Flex, Heading, HStack, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Flex as="header" align="center" justify="space-between" p={4} bg="white" boxShadow="md">
        <HStack spacing={8}>
          <Image src="/logo.png" alt="TenFAST Logo" boxSize="50px" />
          <HStack spacing={4}>
            <Button variant="link">Fastighetssystem</Button>
            <Button variant="link">Om oss</Button>
            <Button variant="link">Pris</Button>
            <Button variant="link">Support</Button>
          </HStack>
        </HStack>
        <HStack spacing={4}>
          <Button colorScheme="teal">Kom igång</Button>
          <Button variant="outline">Logga in</Button>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Flex as="section" direction={{ base: "column", md: "row" }} align="center" justify="space-between" p={8} bg="blue.900" color="white">
        <VStack align="start" spacing={4} maxW="lg">
          <Heading size="2xl">Ett modernt fastighetssystem</Heading>
          <Text>TenFAST är ett komplett fastighetssystem som förenklar vardagen för hyresvärd och hyresgäst.</Text>
          <Text>kontakt@tenfast.se</Text>
          <Text>08-199 552</Text>
          <Button colorScheme="teal" size="lg">Kom igång</Button>
        </VStack>
        <Image src="/hero-image.png" alt="Laptop and mobile device showcasing the system" boxSize="500px" />
      </Flex>

      {/* Client Logos */}
      <Flex as="section" align="center" justify="center" p={8} bg="blue.800" color="white">
        <HStack spacing={8}>
          <Image src="/client-logo1.png" alt="Client Logo 1" boxSize="100px" />
          <Image src="/client-logo2.png" alt="Client Logo 2" boxSize="100px" />
          <Image src="/client-logo3.png" alt="Client Logo 3" boxSize="100px" />
          <Image src="/client-logo4.png" alt="Client Logo 4" boxSize="100px" />
        </HStack>
      </Flex>

      {/* Features Section */}
      <Box as="section" p={8}>
        <VStack spacing={4} textAlign="center">
          <Heading>Fastighetssystemet för din verksamhet</Heading>
          <Text>Program för fastighetsägare, förvaltningsbolag och kommuner m.m.</Text>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mt={8}>
          <VStack align="start" spacing={4}>
            <FaCheckCircle size="24px" />
            <Text>Webbaserat</Text>
            <Text>TenFAST är byggt för webben. Ingen installation krävs, obegränsat antal användare. Använd dator eller mobilen!</Text>
          </VStack>
          <VStack align="start" spacing={4}>
            <FaCheckCircle size="24px" />
            <Text>Enkel prissättning</Text>
            <Text>Priset är rörligt och baseras på antal hyresobjekt, utan startavgift. TenFAST är dessutom gratis för mindre hyresvärdar.</Text>
          </VStack>
          <VStack align="start" spacing={4}>
            <FaCheckCircle size="24px" />
            <Text>Automatisera din verksamhet</Text>
            <Text>Automatisk avisering via e-post eller traditionell post. Bankkoppling för inbetalningar, bokföring, m.m.</Text>
          </VStack>
          <VStack align="start" spacing={4}>
            <FaCheckCircle size="24px" />
            <Text>Allt i ett</Text>
            <Text>Få allt relaterat till din verksamhet samlat i ett system och få stenkoll på avtal och hyresgäster.</Text>
          </VStack>
        </SimpleGrid>
      </Box>

      {/* Benefits Section */}
      <Box as="section" p={8} bg="gray.100">
        <VStack spacing={4} textAlign="center">
          <Heading>Det här får du med TenFAST</Heading>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} mt={8}>
          <VStack align="start" spacing={4}>
            <FaCheckCircle size="24px" />
            <Text>Avtalskapare med mallar</Text>
            <Text>Välj bland färdiga mallar eller skapa egna. Signera digitalt med BankID eller skriv ut och signera på papper.</Text>
          </VStack>
          <VStack align="start" spacing={4}>
            <FaCheckCircle size="24px" />
            <Text>Hyresgäst inloggning</Text>
            <Text>Hyresgäster får en egen inloggning där hyresavtal, hyresavier och andra viktiga dokument kan hittas.</Text>
          </VStack>
          <VStack align="start" spacing={4}>
            <FaCheckCircle size="24px" />
            <Text>Bostadskö</Text>
            <Text>För fastighetsägare och förvaltningsbolag som vill hålla en bostadskö.</Text>
          </VStack>
          <VStack align="start" spacing={4}>
            <FaCheckCircle size="24px" />
            <Text>Bokföring</Text>
            <Text>Automatisk integration med bokföringssystemet Fortnox, bl.a. och export till SIE-fil. Hanterar moms och mer.</Text>
          </VStack>
        </SimpleGrid>
      </Box>

      {/* Pricing Section */}
      <Box as="section" p={8}>
        <VStack spacing={4} textAlign="center">
          <Heading>Passar stora och små</Heading>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={8}>
          <VStack align="start" spacing={4} p={4} border="1px" borderColor="gray.200" borderRadius="md">
            <Heading size="md">Free</Heading>
            <Text>0 kr</Text>
            <Text>För privatpersoner och små företag med upp till 5 hyresobjekt.</Text>
            <Button colorScheme="teal">Kom igång</Button>
          </VStack>
          <VStack align="start" spacing={4} p={4} border="1px" borderColor="gray.200" borderRadius="md">
            <Heading size="md">Pro</Heading>
            <Text>10 kr / hyresobjekt / månad</Text>
            <Text>För privata fastighetsägare upp till 100 hyresobjekt.</Text>
            <Button colorScheme="teal">Kom igång</Button>
          </VStack>
          <VStack align="start" spacing={4} p={4} border="1px" borderColor="gray.200" borderRadius="md">
            <Heading size="md">Enterprise</Heading>
            <Text>Offert</Text>
            <Text>För fastighetsbolag eller förvaltare från 50 till tusentals hyresobjekt.</Text>
            <Button colorScheme="teal">Kontakta oss</Button>
          </VStack>
        </SimpleGrid>
      </Box>

      {/* FAQ Section */}
      <Box as="section" p={8} bg="gray.100">
        <VStack spacing={4} textAlign="center">
          <Heading>Vanliga frågor</Heading>
        </VStack>
        <SimpleGrid columns={1} spacing={4} mt={8}>
          <VStack align="start" spacing={4}>
            <Text>Vad är TenFAST fastighetssystem?</Text>
            <Text>Är TenFAST webbaserat?</Text>
            <Text>Vad kostar systemet?</Text>
            <Text>Funkar fastighetssystemet på mobilen?</Text>
            <Text>Hur kan fastighetssystemet vara så billigt?</Text>
            <Text>Varför kan jag använda det gratis?</Text>
            <Text>Vad räknas som ett hyresobjekt?</Text>
            <Text>Vilka funktioner finns i fastighetsprogrammet?</Text>
            <Text>Kan jag skapa hyresavtal och signera digitalt?</Text>
            <Text>Kan hyresgästen använda det?</Text>
            <Text>Indexjustering av hyra</Text>
            <Text>Hur gör jag med mina befintliga hyresavtal?</Text>
            <Text>Kan jag få hjälp att komma i gång?</Text>
          </VStack>
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box as="footer" p={8} bg="gray.800" color="white">
        <VStack spacing={4} textAlign="center">
          <Text>Logga in</Text>
          <Text>kontakt@tenfast.se</Text>
          <Text>08-199 552</Text>
          <Text>Sankt Eriksgatan 14, 112 39 Stockholm</Text>
          <Text>© TenFAST AB 2024</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;