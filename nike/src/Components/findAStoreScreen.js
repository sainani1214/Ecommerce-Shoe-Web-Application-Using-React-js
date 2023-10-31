import React from "react";
import Header1 from "./Header1";
import Header2 from "./Header2";
import styles from "../Styling/FindStoreScreen.module.css";
import Footer from "./Footer";

function FindAStoreScreen() {
  return (
    <>
      <Header1 />
      <Header2 />
      <div style={{ marginBottom: "40px" }}>
        <div className={styles.firstDiv}>
          <p>Find a Nike Store</p>
        </div>
        <div className={styles.secondDiv}>
          <h4>NFS Hyderabad</h4>
          <span>
            NFS Hyderabad, Gowri Plaza, Plot No: 71, P&T Colony, Tirumalagiri
            Secunderabad, Telangana, 500078, IN Open . Closes at 9:30pm
          </span>
        </div>
        <div className={styles.secondDiv}>
          <h4>Nike Banjara</h4>
          <span>
            Shop No. # 6-3-344/A/4-5-6, Ground Floor, Cupid Curve, Rd.-1,
            Banjara Hills Hyderabad, Telangana, 500034, 1-800-344-6453 IN Open .
            Closes at 9:30pm
          </span>
        </div>
        <div className={styles.secondDiv}>
          <h4>Nike Forum Mall Hyderabad</h4>
          <span>
            Nike Forum Mall Hyderabad Open • Closes at 10:00 pm FF 116 Forum
            Sujana Mall K P H B Phase 6 Kukatpally Hyderabad, Telangana, 500072,
            IN 1-800-344-6453 Open . Closes at 9:30pm
          </span>
        </div>
        <div className={styles.secondDiv}>
          <h4>Nike GVK Mall Hyderabad</h4>
          <span>
            SHOP NO – 13&14 GVK ONE, 6-3-251/1 ROAD NO-1, BANJA HILLS HYDERABAD
            Hyderabad, Telangana, 500034, IN 1-800-344-6453 Open . Closes at
            9:30pm
          </span>
        </div>
        <div className={styles.secondDiv}>
          <h4>Nike Himayat Nagar</h4>
          <span>
            Shop No. 3-6-386, Himayat Nagar Hyderabad, Telangana, 500029, IN
            1-800-344-6453 Open . Closes at 9:30pm
          </span>
        </div>
        <div className={styles.secondDiv}>
          <h4>Nike Jubilee Hills Hyderabadd</h4>
          <span>
            Jubilee Layout, Plot no 798 Hansa Plaza, Road No. 36, Hyderabad,
            Telangana, 500033, IN 1-800-344-6453Open . Closes at 9:30pm
          </span>
        </div>
        <div className={styles.secondDiv}>
          <h4>Nike Sarath City Capital Mall</h4>
          <span>
            Store No. GF-73& 4 Survey No 40 Gachibowli Miyapur Road, Kondapur,
            Hyderabad-500084 Hyderabad, Telangana, 500084, IN 1-800-344-6453Open
            . Closes at 9:30pm
          </span>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default FindAStoreScreen;
