import { Button, Modal } from "antd-mobile";

export default function TimetableModal(props: { content?: string }) {
  const content =
    props.content?.replace(
      /http:\/\/(.*?)\//,
      window.ENV.SBUS_TRACKER_REV_PROX + "/"
    ) ?? "";
  const showModal = () => {
    Modal.show({
      content: <div dangerouslySetInnerHTML={{ __html: content }} />,
      closeOnMaskClick: true,
    });
  };

  return (
    <Button
      size="small"
      type="button"
      disabled={content.length == 0}
      onClick={showModal}
    >
      Show timetable
    </Button>
  );
}
