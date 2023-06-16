import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, HStack, IconButton, Select, Show, Spacer, Switch } from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import { LANGUAGES } from '../../../shared/models/languages';
import { HeaderProps } from './models/header-props';

export default function Header(props: HeaderProps) {
  const { onSwitchLang, onToggleSideMenu, onToggleColorThemeMode, title, children } = props;
  return (
    <Flex
      p="3"
      bg="white"
      wrap="wrap"
      alignItems="center"
      position={'fixed'}
      boxShadow="lg"
      w="100%"
      _dark={{ bg: 'gray.800' }}
    >
      {/* Left Slot */}
      <Box p="2">
        <HStack spacing={8} direction="row" wrap="wrap">
          {/* Menu Side Menu */}
          <IconButton aria-label="toggle side menu" icon={<HamburgerIcon />} onClick={() => onToggleSideMenu()} />
          {/* Title */}
          {title}
          {/* Menu Items */}
          <Show breakpoint="(min-width: 1200px)">{children}</Show>
        </HStack>
      </Box>
      <Spacer />
      {/* Right Slot */}
      <Box p="2">
        <HStack spacing={8} direction="row" wrap="nowrap">
          {/* Lang */}
          <Select
            variant="outline"
            onChange={(event: ChangeEvent<HTMLSelectElement>) => {
              const lang: LANGUAGES = event.target.value as LANGUAGES;
              onSwitchLang(lang);
            }}
          >
            <option value={LANGUAGES.ES}>es</option>
            <option value={LANGUAGES.EN}>en</option>
          </Select>
          {/* Theme Mode */}
          <Switch pt="1" size="md" onChange={() => onToggleColorThemeMode()} />
        </HStack>
      </Box>
    </Flex>
  );
}
