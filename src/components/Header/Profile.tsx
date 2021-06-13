import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Bruno Fialho</Text>
          <Text color="gray.300" fontSize="small">
            bruno@mail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Bruno Fialho" src="https://github.com/bruno-fialho.png" />
    </Flex>
  )
}