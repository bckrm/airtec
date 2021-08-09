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
                .title('Career Page')
                .icon(VscFile)
                .child(
                    S.document()
                        .schemaType('careerPage')
                        .documentId('careerPage'),
                ),
            S.listItem()
                .title('Fleet Page')
                .icon(VscFile)
                .child(
                    S.document()
                        .schemaType('fleetPage')
                        .documentId('fleetPage'),
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
                .title('Contact Page')
                .icon(VscFile)
                .child(
                    S.document()
                        .schemaType('contactPage')
                        .documentId('contactPage'),
                ),
            S.listItem()
                .title('News Page')
                .icon(VscFile)
                .child(
                    S.document().schemaType('newsPage').documentId('newsPage'),
                ),
            S.listItem()
                .title('Service Page')
                .icon(VscFile)
                .child(
                    S.document()
                        .schemaType('servicePage')
                        .documentId('servicePage'),
                ),
            ...S.documentTypeListItems().filter(
                (listItem) =>
                    ![
                        'aboutPage',
                        'capabilitiesPage',
                        'careerPage',
                        'contactPage',
                        'fleetPage',
                        'indexPage',
                        'newsPage',
                        'servicePage',
                    ].includes(listItem.getId()),
            ),
        ]);
};
