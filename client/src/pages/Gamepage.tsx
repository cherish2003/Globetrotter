import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Card,
  CardBody,
  CardHeader,
  Badge,
  Flex,
  Image,
  Spinner,
  useToast,
  Progress,
  Stack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { FaMapMarkerAlt, FaShare, FaRedo, FaTrophy } from "react-icons/fa";
import { UserContext } from "../context/UserContext";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const GameScreen = () => {
  const [loading, setLoading] = useState(true);
  const [destination, setDestination] = useState(null);
  const [options, setOptions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, score, updateScore } = useContext(UserContext);
  const navigate = useNavigate();
  const toast = useToast();

  // Fetch a random destination with options
  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }

    fetchRandomDestination();
  }, [user, navigate]);

  // Timer effect
  useEffect(() => {
    if (!isTimerRunning || !destination) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isTimerRunning, destination]);

  // Handle timeout
  const handleTimeout = () => {
    setIsTimerRunning(false);
    setIsCorrect(false);
    updateScore({ correct: score.correct, incorrect: score.incorrect + 1 });
    toast({
      title: "Time's up!",
      description: "You ran out of time.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  };

  // Fetch a random destination
  const fetchRandomDestination = async () => {
    setLoading(true);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShowConfetti(false);
    setTimeLeft(30);
    setIsTimerRunning(true);

    try {
      // Simulate API call to fetch destination
      // In a real app, you would call your backend API
      const response = await mockFetchDestination();
      setDestination(response.destination);
      setOptions(response.options);
    } catch (error) {
      console.error("Error fetching destination:", error);
      toast({
        title: "Error",
        description: "Failed to load destination. Please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  // Mock API call (replace with actual API)
  const mockFetchDestination = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          destination: {
            id: 1,
            name: "Eiffel Tower",
            location: "Paris, France",
            clues: [
              "I was built for a World Fair in the late 19th century.",
              "I was originally meant to be a temporary structure.",
              "I'm made of iron and was once the tallest man-made structure in the world.",
            ],
            funFacts: [
              "The Eiffel Tower shrinks by about 6 inches in winter due to thermal contraction.",
              "It was almost demolished in 1909, but was saved because it was useful as a radio transmission tower.",
              "There are 1,665 steps to the top of the Eiffel Tower.",
            ],
            imageUrl: "https://via.placeholder.com/400x300?text=Eiffel+Tower",
          },
          options: [
            "Eiffel Tower",
            "Statue of Liberty",
            "Big Ben",
            "Taj Mahal",
          ],
        });
      }, 1500);
    });
  };

  // Handle answer selection
  const handleAnswerSelect = (answer) => {
    if (selectedAnswer !== null || !isTimerRunning) return;

    setSelectedAnswer(answer);
    setIsTimerRunning(false);

    const correct = answer === destination.name;
    setIsCorrect(correct);

    if (correct) {
      setShowConfetti(true);
      updateScore({ correct: score.correct + 1, incorrect: score.incorrect });
      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
    } else {
      updateScore({ correct: score.correct, incorrect: score.incorrect + 1 });
    }
  };

  // Handle share
  const handleShare = () => {
    onOpen();
  };

  // Generate share link
  const generateShareLink = () => {
    const shareUrl = `${window.location.origin}/challenge?username=${user.username}&score=${score.correct}`;
    return shareUrl;
  };

  return (
    <Box minH="100vh" bg="gray.50" py={6}>
      {showConfetti && <Confetti recycle={false} numberOfPieces={500} />}

      <Container maxW="container.lg">
        <Flex justifyContent="space-between" alignItems="center" mb={6}>
          <Button
            leftIcon={<Icon as={FaMapMarkerAlt} />}
            colorScheme="teal"
            variant="ghost"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </Button>

          <HStack spacing={4}>
            <Button
              leftIcon={<Icon as={FaShare} />}
              colorScheme="blue"
              onClick={handleShare}
            >
              Challenge a Friend
            </Button>
            <Button
              leftIcon={<Icon as={FaTrophy} />}
              colorScheme="purple"
              onClick={() => navigate("/leaderboard")}
            >
              Leaderboard
            </Button>
          </HStack>
        </Flex>

        <Flex justifyContent="center" mb={4}>
          <Badge
            colorScheme="teal"
            px={4}
            py={2}
            borderRadius="full"
            fontSize="lg"
          >
            Score: {score.correct} / {score.correct + score.incorrect}
          </Badge>
        </Flex>

        {loading ? (
          <Center p={8}>
            <VStack spacing={4}>
              <Spinner size="xl" color="teal.500" thickness="4px" />
              <Text>Loading your next destination...</Text>
            </VStack>
          </Center>
        ) : (
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card shadow="xl" borderRadius="lg" overflow="hidden">
              <Box bg="teal.500" color="white" py={4} px={6}>
                <Flex justifyContent="space-between" alignItems="center">
                  <Heading size="md">🧩 The Globetrotter Challenge</Heading>
                  <HStack>
                    <Icon as={FaMapMarkerAlt} />
                    <Text>Where in the world is this?</Text>
                  </HStack>
                </Flex>
              </Box>

              <Box p={1} bg="yellow.400">
                <Progress
                  value={(timeLeft / 30) * 100}
                  colorScheme={timeLeft < 10 ? "red" : "green"}
                  height="8px"
                  isAnimated
                />
              </Box>

              <CardBody p={6}>
                {selectedAnswer === null ? (
                  <VStack spacing={6} align="stretch">
                    <Box>
                      <Heading size="md" mb={4} color="teal.600">
                        Clues:
                      </Heading>
                      <VStack spacing={3} align="stretch">
                        {destination.clues.map((clue, index) => (
                          <MotionCard
                            key={index}
                            variant="outline"
                            p={4}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.2 }}
                          >
                            <Text>🔎 {clue}</Text>
                          </MotionCard>
                        ))}
                      </VStack>
                    </Box>

                    <Box>
                      <Heading size="md" mb={4} color="teal.600">
                        Where am I?
                      </Heading>
                      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                        {options.map((option, index) => (
                          <MotionBox
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: 0.5 + index * 0.1,
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Button
                              size="lg"
                              height="80px"
                              width="100%"
                              colorScheme="blue"
                              variant="outline"
                              onClick={() => handleAnswerSelect(option)}
                            >
                              {option}
                            </Button>
                          </MotionBox>
                        ))}
                      </SimpleGrid>
                    </Box>
                  </VStack>
                ) : (
                  <VStack spacing={6} align="stretch">
                    <Box
                      p={6}
                      bg={isCorrect ? "green.50" : "red.50"}
                      borderRadius="lg"
                      borderWidth="1px"
                      borderColor={isCorrect ? "green.200" : "red.200"}
                    >
                      <Heading
                        size="md"
                        mb={4}
                        color={isCorrect ? "green.600" : "red.600"}
                      >
                        {isCorrect
                          ? "🎉 Congratulations! You got it right!"
                          : "😢 Oops! That's not right."}
                      </Heading>
                      <Text fontSize="lg" mb={4}>
                        The correct answer is:{" "}
                        <strong>{destination.name}</strong>
                      </Text>
                      <Image
                        src={destination.imageUrl}
                        alt={destination.name}
                        borderRadius="md"
                        mx="auto"
                        mb={4}
                      />
                      <Box mt={4}>
                        <Heading size="sm" mb={2} color="teal.600">
                          Fun Facts:
                        </Heading>
                        <VStack spacing={2} align="stretch">
                          {destination.funFacts.map((fact, index) => (
                            <Text key={index}>• {fact}</Text>
                          ))}
                        </VStack>
                      </Box>
                    </Box>

                    <Flex justifyContent="center">
                      <Button
                        colorScheme="teal"
                        size="lg"
                        leftIcon={<Icon as={FaRedo} />}
                        onClick={fetchRandomDestination}
                      >
                        Next Challenge
                      </Button>
                    </Flex>
                  </VStack>
                )}
              </CardBody>
            </Card>
          </MotionBox>
        )}
      </Container>

      {/* Challenge a Friend Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Challenge a Friend</ModalHeader>
          <ModalBody>
            <VStack spacing={4}>
              <Box bg="teal.50" p={4} borderRadius="md" width="100%">
                <Text fontWeight="bold">Share this link:</Text>
                <Text
                  p={2}
                  bg="white"
                  borderRadius="md"
                  borderWidth="1px"
                  mt={2}
                  fontSize="sm"
                  wordBreak="break-all"
                >
                  {generateShareLink()}
                </Text>
              </Box>

              <Box
                borderWidth="1px"
                borderRadius="md"
                p={4}
                width="100%"
                textAlign="center"
              >
                <Text mb={4}>Challenge Image Preview:</Text>
                <Box
                  bg="teal.500"
                  color="white"
                  p={4}
                  borderRadius="md"
                  width="100%"
                >
                  <Heading size="md">🧩 Globetrotter Challenge</Heading>
                  <Text mt={2}>
                    {user.username} has challenged you to beat their score of{" "}
                    {score.correct}!
                  </Text>
                  <Button mt={4} colorScheme="yellow">
                    Accept Challenge
                  </Button>
                </Box>
              </Box>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="green">Share to WhatsApp</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default GameScreen;
