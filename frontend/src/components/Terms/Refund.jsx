import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Refund = () => {
  return (
    <div>
      <Header position={true} />
      <div className="my-36">
        <div className="w-full items-center flex justify-center ">
          <div className="w-full px-10 md:w-1/2  flex flex-col gap-10">
            <h2 className="text-[#FBC93ECC] text-4xl md:text-6xl  font-bold">
            Shipping and Refund Policy
            </h2>
            <h3 className="text-3xl md:text-5xl">
              Teific Technology Pvt. Ltd. Shipping and Refund Policy
            </h3>
           
            <div className="flex flex-col gap-10">
  {/* Shipping Policies */}
  <div className="flex flex-col gap-4">
    <h3 className="text-[#FBC93ECC] font-bold text-3xl">SHIPPING POLICIES</h3>
    <p>
      <span className="text-[#FBC93ECC] font-bold text-lg">Commitment to Quality: </span>
      At Teific Technology Pvt. Ltd., we are committed to delivering your order
      in the fastest time possible and in pristine condition. We utilize only
      reputable courier agencies to handle our deliveries.
      <br /> <br />
      <span className="text-[#FBC93ECC] font-bold text-lg">Consolidated Shipping: </span>
      While we endeavor to ship all items in your order together, occasionally
      items may be shipped separately due to product characteristics or
      availability. If this is necessary, we will inform you in advance.
      <br /> <br />
      <span className="text-[#FBC93ECC] font-bold text-lg">Damaged or Tampered Packages: </span>
      If you receive a package that is damaged or tampered with, please refuse
      delivery and contact our Customer Care immediately at +91 99711 05343, or
      email us with your order reference number. We will strive to expedite a
      replacement delivery at the earliest.
      <br /> <br />
      <span className="text-[#FBC93ECC] font-bold text-lg">Tracking: </span>
      You can track the shipping status of your order on our website by visiting
      the "Track your Order" section.
      <br /> <br />
      <span className="text-[#FBC93ECC] font-bold text-lg">Tax Compliance: </span>
      Please note, all shipped items (including gifts) will include an invoice
      with the price as per Indian Tax Regulations.
    </p>
  </div>

  {/* Shipping Time / Delivery Time */}
  <div className="flex flex-col gap-4">
    <h3 className="text-[#FBC93ECC] font-bold text-3xl">SHIPPING TIME / DELIVERY TIME</h3>
    <p>
      <span className="text-[#FBC93ECC] font-bold text-lg">Same-Day Shipping: </span>
      We aim to ship orders the same day. 99% of our orders are shipped within
      24 hours.
      <br /> <br />
      <span className="text-[#FBC93ECC] font-bold text-lg">Operational Days: </span>
      We ship on weekdays (Monday to Saturday), excluding public holidays.
      Orders placed on Sunday will be dispatched on Monday.
      <br /> <br />
      <span className="text-[#FBC93ECC] font-bold text-lg">Order Cutoff Time: </span>
      Orders placed before 1:00 PM will generally ship the same day, except on
      Sundays and public holidays.
      <br /> <br />
      <span className="text-[#FBC93ECC] font-bold text-lg">Delivery Estimates: </span>
      Shipments typically take 2-5 days to arrive anywhere in India. Please
      note, delivery times are estimates and depend on the courier services.
    </p>
  </div>

  {/* Guarantee / Warranty */}
  <div className="flex flex-col gap-4">
    <h3 className="text-[#FBC93ECC] font-bold text-3xl">GUARANTEE / WARRANTY</h3>
    <p>
      <span className="text-[#FBC93ECC] font-bold text-lg">Standard Warranty: </span>
      All items come with a standard warranty to protect against manufacturing
      defects. Please report any product defects within the warranty period to
      ensure eligibility for a replacement or repair.
      <br /> <br />
      <span className="text-[#FBC93ECC] font-bold text-lg">Defective Products: </span>
      If you encounter a defective product, notify us and send photos of the
      damage. We will assess the situation and either exchange the item or
      offer a refund if the product is out of stock.
    </p>
  </div>

  {/* 100% Refund / Replacement */}
  <div className="flex flex-col gap-4">
    <h3 className="text-[#FBC93ECC] font-bold text-3xl">100% REFUND / REPLACEMENT</h3>
    <p>
      We ensure that all products are described accurately and are of high
      quality. If you experience issues such as shipping damage, item mismatch,
      or missing parts, please contact us within 2 days from the delivery date.
      <br /> <br />
      <span className="text-[#FBC93ECC] font-bold text-lg">Return Material Authorization (RMA): </span>
      Should you need to return a product, we will provide an RMA number once we
      verify the issue. Replacement items will be sent with shipping costs
      prepaid by us. In cases where a replacement cannot be provided, a full
      refund will be issued.
    </p>
  </div>

  {/* Canceling An Order */}
  <div className="flex flex-col gap-4">
    <h3 className="text-[#FBC93ECC] font-bold text-3xl">CANCELING AN ORDER</h3>
    <p>
      <span className="text-[#FBC93ECC] font-bold text-lg">Cancellation Requests: </span>
      To cancel an order, please contact us via email. If the order status is
      "Pending" or "Payment Verification," changes or cancellations can be
      made. Once the order progresses beyond these stages, it cannot be altered
      or canceled.
      <br /> <br />
      <span className="text-[#FBC93ECC] font-bold text-lg">Bank Charges: </span>
      Cancellations may incur a 5% bank charge, dependent on the payment method
      used.
    </p>
  </div>

  {/* Return Guidelines */}
  <div className="flex flex-col gap-4">
    <h3 className="text-[#FBC93ECC] font-bold text-3xl">RETURN GUIDELINES</h3>
    <p>
      <span className="text-[#FBC93ECC] font-bold text-lg">RMA and Returns: </span>
      Upon confirmation that an item cannot be repaired remotely, we will issue
      an RMA number. When returning items, ensure the RMA number is clearly
      marked on the shipping box and do not mark the product packaging.
      <br /> <br />
      <span className="text-[#FBC93ECC] font-bold text-lg">Return Processing: </span>
      Defective, unused merchandise will be replaced within 2 days of receipt.
      All returns must include the original packing list.
    </p>
  </div>

  {/* Limits of Responsibility */}
  <div className="flex flex-col gap-4">
    <h3 className="text-[#FBC93ECC] font-bold text-3xl">LIMITS OF RESPONSIBILITY</h3>
    <p>
      We are not responsible for improper installation or handling of our
      products. It is crucial that electrical components are installed with the
      correct electrical polarity.
    </p>
  </div>
</div>


          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Refund;
