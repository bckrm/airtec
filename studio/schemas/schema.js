/* eslint-disable import/no-unresolved */
// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// documents
import aboutPage from './documents/aboutPage';
import aboutSection from './documents/aboutSection';
import backgroundImgwithCard from './documents/backgroundImgwithCard';
import capabilitiesPage from './documents/capabilitiesPage';
import certification from './documents/certification';
import certificationsSection from './documents/certificationsSection';
import historySection from './documents/historySection';
import historyYear from './documents/historyYear';
import indexPage from './documents/indexPage';
import leaderCard from './documents/leaderCard';
import leadershipSection from './documents/leadershipSection';
import newsCard from './documents/newsCard';
import newsSection from './documents/newsSection';

// Object types
import aboutPortableText from './objects/aboutPortableText';
import mainImage from './objects/mainImage';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: 'default',
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        // documents
        aboutPage,
        aboutSection,
        backgroundImgwithCard,
        capabilitiesPage,
        certification,
        certificationsSection,
        historySection,
        historyYear,
        indexPage,
        leaderCard,
        leadershipSection,
        newsCard,
        newsSection,
        // objects
        aboutPortableText,
        mainImage,
    ]),
});
