// The privacy policy, carried over in full and verbatim from
// foreyessolutions.com/privacy-policy (as published, "Last updated: January,
// 2026"). The only change is the company name: "ForEyes Books & Billing
// (formerly ForEyes Solutions)" on first mention and "ForEyes Books & Billing"
// after. Nothing has been added, removed, or reworded. Any change to this text
// is a legal change: get it reviewed before editing.

export type PrivacyBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  /** A labelled email address, rendered as a mailto link. */
  | { type: "email"; label: string; address: string };

export type PrivacySection = {
  id: string;
  /** null for the opening statement, which has no heading of its own. */
  heading: string | null;
  blocks: PrivacyBlock[];
};

export const privacyPolicy: {
  title: string;
  /** The policy's own dateline, exactly as published. */
  updated: string;
  sections: PrivacySection[];
} = {
  title: "Privacy Policy",
  updated: "Last updated: January, 2026",
  sections: [
    {
      id: "introduction",
      heading: null,
      blocks: [
        {
          type: "paragraph",
          text: "Protecting your private information is our priority. This Statement of Privacy applies to http://foreyessolutions.com, and ForEyes Books & Billing (formerly ForEyes Solutions) and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to ForEyes Books & Billing include http://foreyessolutions.com. The ForEyes Books & Billing website is a general informational site. By using the ForEyes Books & Billing website, you consent to the data practices described in this statement.",
        },
      ],
    },
    {
      id: "collection-of-your-personal-information",
      heading: "Collection of your Personal Information",
      blocks: [
        {
          type: "paragraph",
          text: "In order to better provide you with products and services offered, ForEyes Books & Billing may collect personally identifiable information, such as your:",
        },
        {
          type: "list",
          items: [
            "First and Last Name",
            "E-mail Address",
            "Phone Number",
          ],
        },
        {
          type: "paragraph",
          text: "We do not collect any personal information about you unless you voluntarily provide it to us. However, you may be required to provide certain personal information to us when you elect to use certain products or services. These may include: (a) registering for an account; (b) entering a sweepstakes or contest sponsored by us or one of our partners; (c) signing up for special offers from selected third parties; (d) sending us an email message; (e) submitting your credit card or other payment information when ordering and purchasing products and services. To wit, we will use your information for, but not limited to, communicating with you in relation to services and/or products you have requested from us. We also may gather additional personal or non-personal information in the future.",
        },
      ],
    },
    {
      id: "use-of-your-personal-information",
      heading: "Use of your Personal Information",
      blocks: [
        {
          type: "paragraph",
          text: "ForEyes Books & Billing collects and uses your personal information to operate and deliver the services you have requested.",
        },
        {
          type: "paragraph",
          text: "ForEyes Books & Billing may also use your personally identifiable information to inform you of other products or services available from ForEyes Books & Billing and its affiliates.",
        },
      ],
    },
    {
      id: "sharing-information-with-third-parties",
      heading: "Sharing Information with Third Parties",
      blocks: [
        {
          type: "paragraph",
          text: "ForEyes Books & Billing does not sell, rent or lease its customer lists to third parties.",
        },
        {
          type: "paragraph",
          text: "ForEyes Books & Billing may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to ForEyes Books & Billing, and they are required to maintain the confidentiality of your information.",
        },
        {
          type: "paragraph",
          text: "ForEyes Books & Billing may disclose your personal information, without notice, if required to do so by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served on ForEyes Books & Billing or the site; (b) protect and defend the rights or property of ForEyes Books & Billing; and/or (c) act under exigent circumstances to protect the personal safety of users of ForEyes Books & Billing, or the public.",
        },
        {
          type: "paragraph",
          text: "No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All OPT-IN requests include text messaging originator opt-in data and consent; this information will not be shared with third parties.",
        },
      ],
    },
    {
      id: "automatically-collected-information",
      heading: "Automatically Collected Information",
      blocks: [
        {
          type: "paragraph",
          text: "Information about your computer hardware and software may be automatically collected by ForEyes Books & Billing. This information can include: your IP address, browser type, domain names, access times and referring website addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of the ForEyes Books & Billing website.",
        },
      ],
    },
    {
      id: "use-of-cookies",
      heading: "Use of Cookies",
      blocks: [
        {
          type: "paragraph",
          text: "The ForEyes Books & Billing website may use \"cookies\" to help you personalize your online experience. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you.",
        },
        {
          type: "paragraph",
          text: "One of the primary purposes of cookies is to provide a convenience feature to save you time. The purpose of a cookie is to tell the Web server that you have returned to a specific page. For example, if you personalize ForEyes Books & Billing pages, or register with ForEyes Books & Billing site or services, a cookie helps ForEyes Books & Billing to recall your specific information on subsequent visits. This simplifies the process of recording your personal information, such as billing addresses, shipping addresses, and so on. When you return to the same ForEyes Books & Billing website, the information you previously provided can be retrieved, so you can easily use the ForEyes Books & Billing features that you customized.",
        },
        {
          type: "paragraph",
          text: "You have the ability to accept or decline cookies. Most Web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. If you choose to decline cookies, you may not be able to fully experience the interactive features of the ForEyes Books & Billing services or websites you visit.",
        },
      ],
    },
    {
      id: "links",
      heading: "Links",
      blocks: [
        {
          type: "paragraph",
          text: "This website contains links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.",
        },
      ],
    },
    {
      id: "right-to-deletion",
      heading: "Right to Deletion",
      blocks: [
        {
          type: "paragraph",
          text: "Subject to certain exceptions set out below, on receipt of a verifiable request from you, we will:",
        },
        {
          type: "list",
          items: [
            "Delete your personal information from our records; and",
            "Direct any service providers to delete your personal information from their records.",
          ],
        },
        {
          type: "paragraph",
          text: "Please note that we may not be able to comply with requests to delete your personal information if it is necessary to:",
        },
        {
          type: "list",
          items: [
            "Complete the transaction for which the personal information was collected, fulfill the terms of a written warranty or product recall conducted in accordance with federal law, provide a good or service requested by you, or reasonably anticipated within the context of our ongoing business relationship with you, or otherwise perform a contract between you and us;",
            "Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity; or prosecute those responsible for that activity;",
            "Debug to identify and repair errors that impair existing intended functionality;",
            "Exercise free speech, ensure the right of another consumer to exercise his or her right of free speech, or exercise another right provided for by law;",
            "Comply with the California Electronic Communications Privacy Act;",
            "Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when our deletion of the information is likely to render impossible or seriously impair the achievement of such research, provided we have obtained your informed consent;",
            "Enable solely internal uses that are reasonably aligned with your expectations based on your relationship with us;",
            "Comply with an existing legal obligation; or",
            "Otherwise use your personal information, internally, in a lawful manner that is compatible with the context in which you provided the information.",
          ],
        },
      ],
    },
    {
      id: "children-under-thirteen",
      heading: "Children Under Thirteen",
      blocks: [
        {
          type: "paragraph",
          text: "ForEyes Books & Billing does not knowingly collect personally identifiable information from children under the age of thirteen. If you are under the age of thirteen, you must ask your parent or guardian for permission to use this website.",
        },
      ],
    },
    {
      id: "e-mail-communications",
      heading: "E-mail Communications",
      blocks: [
        {
          type: "paragraph",
          text: "From time to time, ForEyes Books & Billing may contact you via email for the purpose of providing announcements, promotional offers, alerts, confirmations, surveys, and/or other general communication. In order to improve our Services, we may receive a notification when you open an email from ForEyes Books & Billing or click on a link therein.",
        },
        {
          type: "paragraph",
          text: "If you would like to stop receiving marketing or promotional communications via email from ForEyes Books & Billing, you may opt out of such communications by clicking on the UNSUBSCRIBE button.",
        },
      ],
    },
    {
      id: "changes-to-this-statement",
      heading: "Changes to this Statement",
      blocks: [
        {
          type: "paragraph",
          text: "ForEyes Books & Billing reserves the right to change this Privacy Policy from time to time. We will notify you about significant changes in the way we treat personal information by sending a notice to the primary email address specified in your account, by placing a prominent notice on our website, and/or by updating any privacy information. Your continued use of the website and/or Services available after such modifications will constitute your: (a) acknowledgment of the modified Privacy Policy; and (b) agreement to abide and be bound by that Policy.",
        },
      ],
    },
    {
      id: "contact-information",
      heading: "Contact Information",
      blocks: [
        {
          type: "paragraph",
          text: "ForEyes Books & Billing welcomes your questions or comments regarding this Statement of Privacy. If you believe that ForEyes Books & Billing has not adhered to this Statement, please contact ForEyes Books & Billing at:",
        },
        { type: "email", label: "Email Address:", address: "privacy@foreyessolutions.com" },
      ],
    },
  ],
};
