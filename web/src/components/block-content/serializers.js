import Image from './image';
import Table from './table';
import PdfFile from './pdfFile';

const serializers = {
    types: {
        mainImage: Image,
        pdfFile: PdfFile,
        table: Table,
    },
};

export default serializers;
