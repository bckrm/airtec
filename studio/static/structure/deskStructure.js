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
            S.listItem()
                .title('About Page')
                .icon(VscFile)
                .child(
                    S.document()
                        .schemaType('aboutPage')
                        .documentId('aboutPage'),
                ),
            S.listItem()
                .title('Capabilities Page')
                .icon(VscFile)
                .child(
                    S.document()
                        .schemaType('capabilitiesPage')
                        .documentId('capabilitiesPage'),
                ),
            S.listItem()
                .title('Career Page')
                .icon(VscFile)
                .child(
                    S.document()
                        .schemaType('careerPage')
                        .documentId('careerPage'),
                ),
            ...S.documentTypeListItems().filter(
                (listItem) =>
                    ![
                        'indexPage',
                        'aboutPage',
                        'capabilitiesPage',
                        'careerPage',
                    ].includes(listItem.getId()),
            ),
        ]);
};
