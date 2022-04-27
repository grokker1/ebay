import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Accordion from "react-bootstrap/Accordion";

function App() {
  return (
    <div>
      <div className="firstSection">
        <div className="offSet">
          <h1>
            Please help us support the Brittish Red Cross Ukraine Crisis Appeal
          </h1>
          <p>
            Get vital help to people impacted by the devastating crisis in
            Ukraine.
          </p>
          <div className="donate">
            <a
              href="https://www.ebay.com/"
              alt="Donate button"
              style={{ color: "red", textDecoration: "none" }}
            >
              <strong>Donate now</strong>
            </a>
          </div>
          <p>Photo © Maksym Trebukhov for LB.ua/Ukranian Red Cross</p>
        </div>
      </div>

      <div
        className="secondSection offSet resizeAtWidth"
        style={{ marginLeft: "10%" }}
      >
        <strong>
          <p>
            To support the humanitarian effort on the ground in Ukraine, we are
            raising funds for the British Red Cross’ Ukraine Crisis Appeal.
          </p>
          <p>
            eBay has made an initial donation of £150,000 and will be supporting
            employees raising money through employee matched fundraising.
          </p>

          <p>
            There are two ways you can donate to the emergency appeal through
            eBay for Charity and we will match all funds raised up to £150,000*:
          </p>
        </strong>
        <div>
          <div className="icons">
            <span class="iconCart"></span>
          </div>
          <p>By donating via Give at Checkout** when you shop.</p>
          <div className="icons">
            <span class="iconTag"></span>
          </div>
          <p>
            If you’re selling items on eBay, you can donate between 10-100% of
            the proceeds to the British Red Cross.
          </p>
        </div>
      </div>

      <div className="thirdSection offSet moveCross">
        <div
          clasName="crossLeftSide"
          style={{
            paddingRight: "20px",
          }}
        >
          <h2>
            How will my donation to the British Red Cross help people in
            Ukraine?
          </h2>
          <p>Your donation could help someone affected get:</p>
          <ul>
            <li>Food</li>
            <li>Water</li>
            <li>First Aid</li>
            <li>Warm clothes</li>
            <li>Shelter</li>
            <li>Medicine</li>
          </ul>
          <p>
            If you would like to understand more about the humanitarian work the
            British Red Cross is doing and support its efforts, please click
            <a
              href="https://donate.redcross.org.uk/appeal/ukraine-crisis-appeal?utm_campaign=Ukraine%20Crisi[%E2%80%A6]aine%20Crisis%20Appeal&c_code=175154&adg=Ebay%20customer"
              alt="eBay donate site"
              style={{ paddingLeft: "5px" }}
            >
              here
            </a>
            .
          </p>
        </div>
        <div className="crossRightSide cross">
          <img
            src="https://ir.ebaystatic.com/pictures/aw/pics/uk/campaigns/EUO-46722/BRC_Card.jpg"
            alt="cross"
          ></img>
        </div>
      </div>

      <div className="fourthSection offSet">
        <h2 className="centering" style={{ marginRight: "23%" }}>
          Looking at how we can support our global community, <br /> we’ve taken
          action to:
        </h2>
        <div className="centering">
          <div className="articleA">
            <h3>Alleviate cash flow pressures</h3>
            <p>
              Suspend all selling fees for users in Ukraine to alleviate any
              cash flow pressures caused by unforeseeable events.
            </p>
          </div>
          <div className="articleA">
            <h3>Suspend deliveries</h3>
            <p>
              Suspend all international deliveries to Ukraine and Russia since
              3rd March to protect buyers and sellers impacted by \n shipping
              disruptions.
            </p>
          </div>
        </div>
      </div>

      <div className="fifthSection"></div>
      <div className="FAQWholeSection offSet">
        <div className="FAQsArticals">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <strong>Terms & Conditions</strong>
              </Accordion.Header>
              <Accordion.Body>
                *eBay is matching donations made through Give at Checkout and
                Community Selling for British Red Cross on eBay.co.uk between
                Tuesday 1st March and Sunday 1st May, up to the value of
                £150,000. **Give at Checkout is only available on the web and
                Android The British Red Cross Ukraine Crisis Appeal will support
                people in areas currently affected and those potentially
                affected in the future by the crisis. In the unlikely event that
                we raise more money than can be reasonably and efficiently
                spent, any surplus funds will be used to help us prepare for and
                respond to other humanitarian disasters anywhere in the world.
                For more information visit
                https://donate.redcross.org.uk/appeal/disaster-fund You can find
                out more about eBay for Charity here
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div>
          <h3 className="FAQ">FAQs</h3>
          <div className="FAQsArticals">
            <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <strong>How can I take part?</strong>{" "}
                </Accordion.Header>
                <Accordion.Body>
                  You can take part in fundraising for the British Red Cross
                  when you buy or sell on eBay. When you buy an item on eBay,
                  you can donate £1, £2, £5 or £10 to Comic Relief through Give
                  at Checkout. Give at Checkout is only available on web and
                  Android. You can also sell an item on eBay and donate between
                  10-100% of the proceeds of your sale to the British Red Cross.
                  When listing an item, click the ‘Donate a portion to charity’
                  box, select ‘British Red Cross’ from the dropdown and pick
                  your donation percentage before finalising your listing. You
                  can then sell and post your item to your customer as usual, no
                  additional steps are required. Within a few weeks, and after
                  the buyer has paid, our partners at PayPal Giving Fund will
                  collect your donation via your automatic payment method or
                  you’ll receive an invoice to pay your donations. PayPal Giving
                  Fund will send your donation to your selected charity and will
                  provide you with a donation receipt. eBay will also discount
                  your Final Value Fees equal to the percentage you donated.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <strong>What sort of things can I sell?</strong>
                </Accordion.Header>
                <Accordion.Body>
                  You can donate part or all of your sale to charity when you
                  sell on eBay. However, there are some limitations on what
                  items or categories can be included in an eBay for Charity
                  listing. For more information, see here.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <strong>
                    {" "}
                    Is eBay donating to British Red Cross as part of the
                    campaign?{" "}
                  </strong>
                </Accordion.Header>
                <Accordion.Body>
                  eBay is matching donations made through Give at Checkout and
                  Community Selling for British Red Cross on eBay.co.uk between
                  Tuesday 1st March and Sunday 1st May, up to the value of
                  £150,000.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <strong>When do I need to have donated by? </strong>
                </Accordion.Header>
                <Accordion.Body>
                  If you are adding a donation via Give at Checkout, ensure the
                  transaction is completed by 23:59:59 on 1 May 2022. If you are
                  adding a donation via your sale on eBay (Community Selling),
                  you must have completed your sale by 23:59:59 on 1 May 2022
                  for your donation to be matched by eBay, so be mindful of the
                  duration of your auction listing. Any donation after this date
                  will still be sent to the British Red Cross, as is the usual
                  process with Community Selling, and which you can do all year
                  round.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  <strong>
                    What if I want to rescind my donation, cancel my sale or the
                    buyer returns the item?{" "}
                  </strong>
                </Accordion.Header>
                <Accordion.Body>
                  It may be possible to rescind your donation via Community
                  Selling. You can learn more about this, and what happens if a
                  buyer doesn’t pay for the item, here. If you have donated via
                  Give at Checkout, your donation is non-refundable.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
