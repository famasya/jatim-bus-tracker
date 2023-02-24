import { Button, Modal } from "antd-mobile";

export default function TimetableModal(props: { content: string }) {
  const showModal = () => {
    Modal.show({
      content: <div dangerouslySetInnerHTML={{ __html: props.content }} />,
      closeOnMaskClick: true,
    });
  };

  return (
    <Button
      size="small"
      type="button"
      disabled={props.content.length == 0}
      onClick={showModal}
    >
      Show timetable
    </Button>
  );
}
