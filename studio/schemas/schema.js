/* eslint-disable import/no-unresolved */
// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// documents
import aboutPage from './documents/aboutPage';
import capabilitiesPage from './documents/capabilitiesPage';
import careerPage from './documents/careerPage';
import certification from './documents/certification';
import contactPage from './documents/contactPage';
import fleet from './documents/fleet';
import fleetPage from './documents/fleetPage';
import historyYear from './documents/historyYear';
import iconGridItem from './documents/iconGridItem';
import iconText from './documents/iconText';
import indexPage from './documents/indexPage';
import leaderCard from './documents/leaderCard';
import leadershipSection from './objects/leadershipSection';
import newsItem from './documents/newsItem';
import newsPage from './documents/newsPage';
import service from './documents/service';
import servicePage from './documents/servicePage';

// Object types
import aboutPortableText from './objects/aboutPortableText';
import aboutSection from './objects/aboutSection';
import backgroundImgwithCard from './objects/backgroundImgwithCard';
import bodyPortableText from './objects/bodyPortableText';
import cta from './objects/cta';
import imageWithText from './objects/imageWithText';
import mainImage from './objects/mainImage';
import pdf from './objects/pdf';
import seo from './objects/seo';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: 'default',
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        // documents
        aboutPage,
        capabilitiesPage,
        careerPage,
        certification,
        contactPage,
        fleet,
        fleetPage,
        historyYear,
        iconGridItem,
        iconText,
        indexPage,
        leaderCard,
        newsItem,
        newsPage,
        service,
        servicePage,
        // objects
        aboutPortableText,
        aboutSection,
        backgroundImgwithCard,
        bodyPortableText,
        cta,
        imageWithText,
        leadershipSection,
        pdf,
        mainImage,
        seo,
    ]),
});
