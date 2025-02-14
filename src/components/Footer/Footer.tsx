import { ActionIcon, Container, Group, Image } from '@mantine/core';
import { VscGithub, VscTwitter } from 'react-icons/vsc';
import './Footer.scss';

export function Footer() {
  return (
    <div className={'footer-wrapper'}>
      <Container className={'inner'}>
        <Image src="/favicon.ico" />
        <Group gap={0} className={'links'} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <VscTwitter size={18} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <VscGithub size={18} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
