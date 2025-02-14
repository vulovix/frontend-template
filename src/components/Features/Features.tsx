import { Badge, Box, Card, Container, Group, SimpleGrid, Text, Title, useMantineTheme } from '@mantine/core';
import { CatDisplay } from 'features/CatDisplay/CatDisplay';
import { CatDisplayPersisted } from 'features/CatDisplayPersisted/CatDisplayPersisted';
import { LanguagePicker } from 'features/LanguagePicker/LanguagePicker';
import { BiLogoRedux } from 'react-icons/bi';
import { SiI18Next, SiReactrouter, SiReduxsaga, SiWebpack } from 'react-icons/si';
import { TbBrandMantine } from 'react-icons/tb';
import { FormattedMessage } from 'react-intl';
import './Features';

const mockdata = [
  {
    title: 'Webpack Configuration',
    description: 'A custom configuration written to improve chunking, code splitting and overall development experience with HMR, proxying and more.',
    icon: SiWebpack,
  },
  {
    title: 'React Router',
    description: 'With React Router built-in, you can easily create a single page application and have a clean and simple navigation experience.',
    icon: SiReactrouter,
  },
  {
    title: 'Redux Saga',
    description: 'We use Redux Saga to handle asynchronous actions. Most commonly used for data fetching and then storing data in the store.',
    icon: SiReduxsaga,
    example: CatDisplay,
  },
  {
    title: 'Redux Persist',
    description: 'We use Redux Persist to cache data to storage. When refreshed data will be loaded imidiately before running our App component.',
    icon: BiLogoRedux,
    example: CatDisplayPersisted,
  },
  {
    title: 'React i18n',
    description: <FormattedMessage id="homepage.features.intl.description" />,
    icon: SiI18Next,
    example: LanguagePicker,
  },
  {
    title: 'Mantine',
    description: 'With powerful Mantine UI included you can start writing awesome features immediately.',
    icon: TbBrandMantine,
  },
];
export function Features() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={'card'} padding="xl">
      <feature.icon size={50} color={theme.colors.blue[6]} />
      <Text fz="lg" fw={500} className={'cardTitle'} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
      <Box mt={'md'}>{feature.example ? <feature.example /> : <></>}</Box>
    </Card>
  ));

  return (
    <Container className="features-wrapper" size="lg" py="xl">
      <Group justify="center">
        <Badge variant="filled" size="lg">
          FRONTEND TEMPLATE
        </Badge>
      </Group>

      <Title order={2} className={'title'} ta="center" mt="sm">
        Frontend Template Brings You Awesome Features
      </Title>

      <Text c="dimmed" className={'description'} ta="center" mt="md">
        Ready to jump-in project starter!
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
