import { Box, Button, Image, Modal, SimpleGrid, Title } from '@mantine/core';
import { useDidUpdate, useDisclosure } from '@mantine/hooks';
import { useAppDispatch, useAppSelector } from 'libs/redux/hooks';
import { useInjectSaga } from 'redux-injectors';
import { PERSISTED_SCOPE } from './constants';
import saga from './saga';
import { selectPersistedImageLoading, selectPersistedImageUrl } from './selectors';
import { actions } from './slice';

export function CatDisplayPersisted() {
  useInjectSaga({ key: PERSISTED_SCOPE, saga });
  const dispatch = useAppDispatch();
  const catImageUrl = useAppSelector(selectPersistedImageUrl);
  const catImageLoading = useAppSelector(selectPersistedImageLoading);
  const [opened, { open, close }] = useDisclosure(false);
  const handleGetCat = () => {
    dispatch(actions.getCatImage());
  };
  useDidUpdate(() => {
    if (catImageUrl) {
      open();
    }
  }, [catImageUrl]);
  return (
    <Box>
      <Modal title={<Title size={'h4'}>Meow!</Title>} opened={opened} onClose={close}>
        <Image src={catImageUrl} />
      </Modal>
      <SimpleGrid cols={2}>
        {catImageUrl ? (
          <Button size="xs" onClick={open} variant="default">
            Old Cat
          </Button>
        ) : (
          <></>
        )}
        <Button loading={catImageLoading} size="xs" onClick={handleGetCat} variant="default">
          New Cat
        </Button>
      </SimpleGrid>
    </Box>
  );
}
