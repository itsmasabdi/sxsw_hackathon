import React, { useState } from 'react';
import './Chat.css';

const properties = [
  {
    id: 1,
    url: 'https://www.realestate.com.au/property-apartment-nsw-randwick-143147708',
    location: '2/40 Dutruc Street',
    suburb: 'Randwick, NSW 2031',
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    property_name: 'Property 1',
    domain: 'realestate',
    domain_icon:
      'https://assets.reastatic.net/realestate.com.au/android-chrome-192x192.png',
    image_url:
      'https://i2.au.reastatic.net/800x600-format=webp/086ae089dc16e439cdfeb326ef56c20f77de5e0b080a3301a74f194b500108f3/image.jpg',
  },
  {
    id: 2,
    url: 'https://www.realestate.com.au/property-apartment-nsw-randwick-143267544',
    location: '206/8 Yarraman Avenue',
    suburb: 'Randwick, NSW 2031',
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    property_name: 'Property 2',
    domain: 'realestate',
    domain_icon:
      'https://assets.reastatic.net/realestate.com.au/android-chrome-192x192.png',
    image_url:
      'https://i2.au.reastatic.net/800x600-format=webp/a0a148e35b8c9a988665788cf33d02aea3fb59e1386746f861dfb40878193b8b/image.jpg',
  },
  {
    id: 6,
    url: 'https://www.domain.com.au/2-40-dutruc-street-randwick-nsw-2031-2018782771',
    location: '2/40 Dutruc Street',
    suburb: 'Randwick, NSW 2031',
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    property_name: 'Property 6',
    domain: 'domain',
    domain_icon: 'https://s.domainstatic.com.au/domain/114.png',
    image_url:
      'https://rimh2.domainstatic.com.au/G8iM2BQ07tZ6TNIntn_MpUi-P9c=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/2018782771_1_1_230920_075012-w1478-h982',
  },
  {
    id: 3,
    url: 'https://www.realestate.com.au/property-apartment-nsw-randwick-143134856',
    location: '2/40 Carrington Road',
    suburb: 'Randwick, NSW 2031',
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    property_name: 'Property 3',
    domain: 'realestate',
    domain_icon:
      'https://assets.reastatic.net/realestate.com.au/android-chrome-192x192.png',
    image_url:
      'https://i2.au.reastatic.net/800x600-format=webp/4b24d8538da26d066934acb2aa3a0a48472c8e402ab6dd22ad7e4d1bac4c0c08/image.jpg',
  },
  {
    id: 4,
    url: 'https://www.domain.com.au/3-24-church-street-randwick-nsw-2031-2018839585',
    location: '3/24 Church Street',
    suburb: 'Randwick, NSW 2031',
    bedrooms: 2,
    bathrooms: 2,
    parking: 2,
    property_name: 'Property 4',
    domain: 'domain',
    domain_icon: 'https://s.domainstatic.com.au/domain/114.png',
    image_url:
      'https://rimh2.domainstatic.com.au/jVGQegjkot7Yp7Tr0p33poXvSzU=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/2018839585_1_1_231017_053743-w4000-h2666',
  },
  {
    id: 5,
    url: 'https://www.realestate.com.au/property-townhouse-nsw-randwick-143253028',
    location: '5/14E Dudley Street',
    suburb: 'Randwick, NSW 2031',
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    property_name: 'Property 5',
    domain: 'realestate',
    domain_icon:
      'https://assets.reastatic.net/realestate.com.au/android-chrome-192x192.png',
    image_url:
      'https://i2.au.reastatic.net/800x600-format=webp/a0a148e35b8c9a988665788cf33d02aea3fb59e1386746f861dfb40878193b8b/image.jpg',
  },
];

const Favourite = () => {
  return (
    <div className="h-full bg-white chat-container">
      <div className="space-y-4 p-5">
        {properties.map((property, i) => (
          <a
            href={property.url}
            target="_blank"
            className="flex gap-x-4"
            key={i}
          >
            <div className="flex-shrink-0">
              <img src={property.image_url} className="w-32 h-32" />
            </div>

            <div className="text-left">
              <div className="bg-gray-200 rounded-full text-xs px-3 py-1 text-left inline-flex items-center">
                <img src={property.domain_icon} className="w-4 h-4" />
                <span className="ms-2">{property.domain}</span>
              </div>

              <h5 className="text-lg font-semibold mt-2 text-left ">
                {property.location}
              </h5>

              <h5 className="text-md font-semibold text-left ">
                {property.suburb}
              </h5>
              <div className="grid grid-cols-3 gap-x-4 text-left mt-3">
                <div className="flex items-center space-x-2">
                  <div className="text-blue-500">
                    <svg
                      width="18"
                      height="18"
                      class="domain-icon property-feature__icon css-gsqvet"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        d="M7 6.55752V8.69783C7.44647 8.82039 8.1239 8.9606 8.96149 8.96475C9.83765 8.96914 10.544 8.82303 11 8.69783V6.55752C10.5059 6.44027 9.79156 6.3179 8.9245 6.32534C8.13001 6.33218 7.47101 6.4457 7 6.55752Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M13 8.69783V6.55752C13.471 6.4457 14.13 6.33218 14.9245 6.32534C15.7916 6.3179 16.5059 6.44027 17 6.55752V8.69783C16.544 8.82303 15.8376 8.96914 14.9615 8.96475C14.1239 8.9606 13.4465 8.82039 13 8.69783Z"
                        fill="currentColor"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M21 10.1843V2H3V10.1843C1.8385 10.5984 1 11.6981 1 13V19H3.52264L2.32263 22H4.47735L5.67736 19H18.3226L19.5226 22H21.6773L20.4773 19H23V13C23 11.6981 22.1615 10.5984 21 10.1843ZM5 4H19V10H5V4ZM21 17H3V13C3 12.4487 3.44873 12 4 12H20C20.5513 12 21 12.4487 21 13V17Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-sm mt-1">{property.bedrooms}</p>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="text-blue-500">
                    <svg
                      width="18"
                      height="18"
                      class="domain-icon property-feature__icon css-gsqvet"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        d="M16.8481 8C17.2513 8.56671 17.4937 9.25415 17.498 10H20.5454C20.4912 10.1431 20.4473 10.2915 20.415 10.4443L19.208 17.1733C19.1074 17.6523 18.6182 18 18.0444 18H5.95557C5.38184 18 4.89258 17.6523 4.79786 17.2022L3.57911 10.415C3.54932 10.2725 3.50831 10.1338 3.45802 10H11.0692C11.5861 10.0375 12 10.4554 12 10.9839V13H16V10C16 8.89539 15.1046 8 14 8H9.00002V3.28467C9.00002 2.49219 9.57668 2 10.5049 2C11.4273 2 12 2.49219 12 3.28467V3.99268H14V3.28467C14 1.38135 12.5303 0 10.5049 0C8.47414 0 7.00002 1.38135 7.00002 3.28467V8H0V10H0.45801C1.03174 10 1.521 10.3477 1.61621 10.7978L2.83496 17.5845C3.01129 18.4239 3.55823 19.1198 4.29126 19.5468L3.31262 22H5.4657L6.26355 20H17.7365L18.5343 22H20.6874L19.7082 19.5455C20.4423 19.1157 20.991 18.4128 21.1709 17.5557L22.3779 10.8271C22.479 10.3476 22.9683 9.99999 23.542 9.99999H24V7.99999H16.8481V8Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-sm mt-1">{property.bathrooms}</p>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="text-blue-500">
                    <svg
                      width="18"
                      height="18"
                      class="domain-icon property-feature__icon css-gsqvet"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        d="M23 8H20.2135L19.0156 4.11621C18.626 2.85059 17.4736 2 16.1489 2H7.85107C6.52636 2 5.37402 2.85059 4.98437 4.11572L3.78643 8H1V10H2.78027C2.30053 10.532 2 11.2289 2 12V21H4V17.9144C6.57715 18.7981 9.2594 19.25 11.9976 19.25C12.0386 19.25 12.0801 19.2495 12.1211 19.2495C14.8185 19.2367 17.4616 18.7849 20 17.9144V21H22V12C22 11.2289 21.6995 10.532 21.2197 10H23L23 8ZM6.89551 4.70508C7.02539 4.2832 7.40967 4 7.85108 4H16.1489C16.5903 4 16.9746 4.2832 17.1045 4.70557L18.429 9H5.57104L6.89551 4.70508ZM12.1113 17.2495C9.31732 17.2559 6.6012 16.7496 4 15.7698V12C4 11.4487 4.44873 11 5 11H19C19.5513 11 20 11.4487 20 12V15.7709C17.4692 16.725 14.8224 17.2364 12.1113 17.2495ZM10 14.5275V15H6.87286C6.3908 15 6 14.6092 6 14.1271V13H8.47247C9.3161 13 10 13.6839 10 14.5275ZM15.5275 13H18V14.1271C18 14.6092 17.6092 15 17.1271 15H14V14.5275C14 13.6839 14.6839 13 15.5275 13Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-sm mt-1">{property.parking}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Favourite;
