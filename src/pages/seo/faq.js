import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

export default function Example() {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>What is SEO?</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            SEO is the process of growing the quality and the quantity of web
            traffic by increasing the visibility of a website/web page of a web
            search engine. This mainly involves helping a website/page getting
            at the top of the search engine results page.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>What is ASO?</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            ASO is the process of increasing the visibility of a mobile
            application in the App Store/Play Store environment. This involves
            helping the app get ranked in the App search in the store.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Can we optimize in the Play Store only?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Yes. you may get only the Play Store optimization if you wish to.
            You will not be charged for the whole ASO optimization package as
            you only request for Play Store Optimization
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Can we optimize in the App Store only?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Yes. you may get only the App Store optimization if you wish to. You
            will not be charged for the whole ASO optimization package as you
            only request for App Store Optimization
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Do you offer a flat rate for SEO?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Yes. we do depending on the project. Reach us via hello@insfra.com
            to check your project’s eligibility.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}
