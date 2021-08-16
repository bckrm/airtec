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
import careerPage from './documents/careerPage';
import certification from './documents/certification';
import contactPage from './documents/contactPage';
import fleet from './documents/fleet';
import fleetPage from './documents/fleetPage';
import historyYear from './documents/historyYear';
import iconItem from './documents/iconItem';
import iconText from './documents/iconText';
import imageWithText from './documents/imageWithText';
import indexPage from './documents/indexPage';
import leaderCard from './documents/leaderCard';
import leadershipSection from './documents/leadershipSection';
import newsItem from './documents/newsItem';
import newsPage from './documents/newsPage';
import service from './documents/service';
import servicePage from './documents/servicePage';

// Object types
import aboutPortableText from './objects/aboutPortableText';
import bodyPortableText from './objects/bodyPortableText';
import cta from './objects/cta';
import mainImage from './objects/mainImage';
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
        aboutSection,
        backgroundImgwithCard,
        capabilitiesPage,
        careerPage,
        certification,
        contactPage,
        fleet,
        fleetPage,
        historyYear,
        iconItem,
        iconText,
        imageWithText,
        indexPage,
        leaderCard,
        leadershipSection,
        newsItem,
        newsPage,
        service,
        servicePage,
        // objects
        aboutPortableText,
        bodyPortableText,
        cta,
        mainImage,
        seo,
    ]),
});
