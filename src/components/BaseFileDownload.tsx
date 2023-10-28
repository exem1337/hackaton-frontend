import { Button } from 'react-bootstrap';
import { AiFillFileUnknown } from 'react-icons/ai'
import { FileService } from '../service/File.service';

interface IBaseFileDownloadProps {
  title: string;
  fileId: number;
}

const BaseFileDownload = ({ title, fileId }: IBaseFileDownloadProps) => {
  const onDownload = async () => {
    const file = await FileService.getBlobByBlobId(fileId);
    FileService.downloadBlob(file)
  }
  
  return (
    <Button className="base-file" onClick={onDownload}>
      <AiFillFileUnknown />
      { title }
    </Button>
  )
}

export default BaseFileDownload;