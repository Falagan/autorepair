import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

type ModalProps = {
  title: JSX.Element;
  body: JSX.Element;
  footer: JSX.Element;
  isOpen: boolean;
  onClose: () => void;
};
export default function ModalDialog(props: ModalProps) {
  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{props.body}</ModalBody>
          <ModalFooter>{props.footer}</ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
