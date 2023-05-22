import React from 'react';
import BloodBankCarousel from "../components/BloodBankCarousel/BloodBankCarousel";
import BloodDonationJumbotron from "../components/BloodDonationJumbotron/BloodDonationJumbotron";
import BloodBankDonationProcess from '../components/BloodBankDonationProcess/BloodBankDonationProcess';
import BloodBankRequestAppointment from '../components/BloodBankRequestAppointmentForm/BloodBankRequestAppointment';
import Navbar1 from '../components/Navbar1/Navbar1';
import OpinionCarousel from '../components/OpinionCarousel/OpinionCarousel';
import ImageWithButton from '../components/ImageWithButton/ImageWithButton';
import CampaignJumbotron from '../components/CampaignJumbotron/CampaignJumbotron';
import Campaign from '../components/Campaign/Campaign';
import SponsorsSection from '../components/SponsorsSection/SponsorsSection';
import PhotoGallery from '../components/PhotoGallery/PhotoGallery';
import Footer from '../components/Footer/Footer';
import BloodDonationNavbar from '../components/BloodDonationNavbar/BloodDonationNavbar';
import CardImage from '../components/CardImage';
import CardGrid from '../components/CardGrid';
// https:localhost/admin/******/ -kaushik
// https:localhost/pharamacy-vendor/********/  -kaushik
// https:localhost/blood-bank/*******/   - damini
// https:localhost/ -gourob
// https:localhost/storre/ -gourab
function BloodBank() {
  return (
  
      <div>
        <Navbar1 />
        {/* <Route exact path="blood-bank/contact" component={<BloodBankContactUs/>} /> */}
        {/* Other routes */}
        <BloodDonationNavbar/>
       <BloodBankCarousel/>
        <BloodDonationJumbotron />
        <BloodBankDonationProcess />
        <BloodBankRequestAppointment />
        <CardImage/>
        <CardGrid/>
        <OpinionCarousel />
        <ImageWithButton />
        <CampaignJumbotron />
        <Campaign />
        <PhotoGallery />
        <SponsorsSection />
        <Footer />
      </div>
  );
}

export default BloodBank;
