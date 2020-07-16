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
          <AccordionItemButton>What is Startup Hub
</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
          Startup Hub is a group of entrepreneurs registered under the roof of Insfra Technologies. By registering, you will be able to turn your business idea into a reality, get mentored, transfer knowledge, share experience and grow with Insfra Technologies.

          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>How to Register?</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
          Simple. Click “Register for Entrepreneurship” and follow the steps. This link is also available in the Entrepreneurship page of the site. </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Do I need to pay for the Startup Hub services?
</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
          No. You will not have to pay for the entitled benefits.

          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Do I have to travel to Uva for registrations</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
          No. You may reach us via email.

          </p>
        </AccordionItemPanel>
      </AccordionItem>
      
    </Accordion>
  );
}
