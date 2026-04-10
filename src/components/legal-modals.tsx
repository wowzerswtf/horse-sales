"use client";

import { useState } from "react";
import { SITE } from "@/lib/config";

function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-start justify-center overflow-y-auto bg-black/50 p-4 backdrop-blur-sm sm:items-center">
      <div className="relative w-full max-w-2xl rounded-xl bg-white p-6 shadow-2xl sm:p-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-brand-dark">{title}</h2>
          <button
            onClick={onClose}
            className="text-2xl leading-none text-brand-dark/30 hover:text-brand-dark"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <div className="max-h-[70vh] overflow-y-auto text-sm leading-relaxed text-brand-dark/70">
          {children}
        </div>
        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="rounded bg-brand-gold px-6 py-2 text-sm font-bold text-brand-dark hover:bg-brand-tan"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export function TermsLink() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hover:text-brand-gold"
      >
        Terms of Service
      </button>
      <Modal open={open} onClose={() => setOpen(false)} title="Terms of Service">
        <p className="font-semibold text-brand-dark">
          {SITE.fullName} — Terms of Service
        </p>
        <p className="mt-2">Last updated: April 2026</p>

        <h3 className="mt-4 font-semibold text-brand-dark">1. Agreement</h3>
        <p className="mt-1">
          By accessing or using the {SITE.fullName} website
          (&ldquo;Site&rdquo;), you agree to be bound by these Terms of Service.
          If you do not agree, do not use the Site.
        </p>

        <h3 className="mt-4 font-semibold text-brand-dark">2. Services</h3>
        <p className="mt-1">
          Iron Hide provides an online platform for marketing and facilitating
          the sale of performance horses. We act as a marketing and sales
          facilitator between sellers (consignors) and buyers. We are not a
          party to any purchase agreement between buyer and seller unless
          explicitly stated.
        </p>

        <h3 className="mt-4 font-semibold text-brand-dark">3. All Sales Final</h3>
        <p className="mt-1">
          All horse sales facilitated through Iron Hide are final. We strongly
          recommend that all buyers obtain a Pre-Purchase Exam (PPE) prior to
          completing any purchase. PPEs are available for $1,000 and can be
          arranged through Iron Hide. Once a purchase is completed, no refunds,
          returns, or exchanges will be provided.
        </p>

        <h3 className="mt-4 font-semibold text-brand-dark">
          4. Accuracy of Listings
        </h3>
        <p className="mt-1">
          We make reasonable efforts to ensure that all information in our Deal
          Room listings (including descriptions, pedigrees, photos, videos, and
          vet records) is accurate and provided in good faith by the
          seller/consignor. However, we do not guarantee the accuracy,
          completeness, or reliability of any listing information. Buyers are
          responsible for conducting their own due diligence.
        </p>

        <h3 className="mt-4 font-semibold text-brand-dark">
          5. User Accounts & Communications
        </h3>
        <p className="mt-1">
          By submitting an inquiry or subscribing to our email list, you
          consent to receive communications from Iron Hide including listing
          alerts, market reports, and promotional materials. You may
          unsubscribe at any time.
        </p>

        <h3 className="mt-4 font-semibold text-brand-dark">
          6. Commission & Fees
        </h3>
        <p className="mt-1">
          Iron Hide earns a commission on each horse sale facilitated through
          our platform. Commission rates are agreed upon between Iron Hide and
          the seller/consignor prior to listing. Buyers are not charged a
          commission unless otherwise disclosed.
        </p>

        <h3 className="mt-4 font-semibold text-brand-dark">
          7. Limitation of Liability
        </h3>
        <p className="mt-1">
          Iron Hide shall not be liable for any direct, indirect, incidental,
          consequential, or punitive damages arising from the use of the Site,
          the purchase of any horse, or reliance on any information provided in
          our listings. Our total liability shall not exceed the commission
          earned on the applicable transaction.
        </p>

        <h3 className="mt-4 font-semibold text-brand-dark">
          8. Governing Law
        </h3>
        <p className="mt-1">
          These Terms shall be governed by and construed in accordance with the
          laws of the State of Texas, without regard to conflict of law
          principles.
        </p>

        <h3 className="mt-4 font-semibold text-brand-dark">9. Contact</h3>
        <p className="mt-1">
          For questions about these Terms, contact us at {SITE.email}
          or {SITE.phone}.
        </p>
      </Modal>
    </>
  );
}

export function PrivacyLink() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hover:text-brand-gold"
      >
        Privacy Policy
      </button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Privacy Policy"
      >
        <p className="font-semibold text-brand-dark">
          {SITE.fullName} — Privacy Policy
        </p>
        <p className="mt-2">Last updated: April 2026</p>

        <h3 className="mt-4 font-semibold text-brand-dark">
          1. Information We Collect
        </h3>
        <p className="mt-1">We collect the following information:</p>
        <ul className="mt-1 list-disc pl-5 space-y-1">
          <li>
            <strong>Contact information:</strong> name, email address, phone
            number, and zip code provided through inquiry forms, subscription
            forms, and quizzes.
          </li>
          <li>
            <strong>Preference data:</strong> discipline, budget range,
            experience level, and buying timeline provided through forms and
            quizzes.
          </li>
          <li>
            <strong>Usage data:</strong> pages visited, Deal Rooms viewed, time
            on page, and interactions with our Site collected through analytics
            tools.
          </li>
          <li>
            <strong>Device data:</strong> browser type, operating system, IP
            address, and device identifiers.
          </li>
        </ul>

        <h3 className="mt-4 font-semibold text-brand-dark">
          2. How We Use Your Information
        </h3>
        <ul className="mt-1 list-disc pl-5 space-y-1">
          <li>To send you personalized horse recommendations matching your preferences</li>
          <li>To send our email newsletter, Market Reports, and listing alerts</li>
          <li>To respond to your inquiries about specific horses</li>
          <li>To improve our Site and user experience</li>
          <li>To communicate with you about transactions and services</li>
        </ul>

        <h3 className="mt-4 font-semibold text-brand-dark">
          3. Information Sharing
        </h3>
        <p className="mt-1">
          We do not sell, rent, or trade your personal information to third
          parties. We may share your information with:
        </p>
        <ul className="mt-1 list-disc pl-5 space-y-1">
          <li>Horse sellers/consignors when you submit an inquiry about their horse</li>
          <li>Service providers who assist in operating our Site (email platforms, analytics, hosting)</li>
          <li>As required by law or to protect our legal rights</li>
        </ul>

        <h3 className="mt-4 font-semibold text-brand-dark">
          4. Email Communications
        </h3>
        <p className="mt-1">
          By subscribing to our email list, you consent to receive marketing
          emails including new listing alerts, Market Reports, price drop
          notifications, and promotional content. You may unsubscribe at any
          time by clicking the unsubscribe link in any email or by contacting
          us directly.
        </p>

        <h3 className="mt-4 font-semibold text-brand-dark">
          5. SMS Communications
        </h3>
        <p className="mt-1">
          If you provide your phone number and opt in to text alerts, you
          consent to receive SMS messages about new listings, price changes,
          and appointment reminders. Message and data rates may apply. Reply
          STOP to unsubscribe. We send no more than 4 marketing texts per
          month.
        </p>

        <h3 className="mt-4 font-semibold text-brand-dark">
          6. Cookies & Analytics
        </h3>
        <p className="mt-1">
          We use cookies and analytics tools to understand how visitors
          interact with our Site. This helps us improve the user experience
          and measure the effectiveness of our marketing. You can disable
          cookies in your browser settings.
        </p>

        <h3 className="mt-4 font-semibold text-brand-dark">
          7. Data Security
        </h3>
        <p className="mt-1">
          We implement reasonable security measures to protect your personal
          information. However, no method of transmission over the Internet is
          100% secure, and we cannot guarantee absolute security.
        </p>

        <h3 className="mt-4 font-semibold text-brand-dark">
          8. Your Rights
        </h3>
        <p className="mt-1">
          You may request access to, correction of, or deletion of your
          personal information at any time by contacting us at
          {SITE.email}.
        </p>

        <h3 className="mt-4 font-semibold text-brand-dark">9. Contact</h3>
        <p className="mt-1">
          For questions about this Privacy Policy, contact us at
          info@ironhidehorses.com or (555) 123-4567.
        </p>
      </Modal>
    </>
  );
}
