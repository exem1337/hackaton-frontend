import { Button } from 'react-bootstrap';
import { AiFillFileUnknown } from 'react-icons/ai'

interface IBaseFileDownloadProps {
  title: string;
  fileId: string;
}

const BaseFileDownload = ({ title, fileId }: IBaseFileDownloadProps) => {
  return (
    <Button className="base-file">
      <AiFillFileUnknown />
      { title }
    </Button>
  )
}

export default BaseFileDownload;