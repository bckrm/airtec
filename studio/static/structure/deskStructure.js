import S from '@sanity/desk-tool/structure-builder';

import { VscFile } from 'react-icons/vsc';

export default () => {
    return S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Home')
                .icon(VscFile)
                .child(
                    S.document()
                        .schemaType('indexPage')
                        .documentId('indexPage'),
                ),
            ...S.documentTypeListItems().filter(
                (listItem) => !['indexPage'].includes(listItem.getId()),
            ),
        ]);
};