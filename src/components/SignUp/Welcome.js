import React from "react";
import Image from "next/image";
import {
  bgEllipse1,
  bgEllipse2,
  user1,
  user2,
  user3,
  user4,
} from "../nextjsImageProperties/imageProperties";

export default function Welcome() {
  return (
    <div id="welcome-page-wrapper">
      <Image {...bgEllipse1} />
      <Image {...bgEllipse2} />
      <div id="welcome-content-wrapper">
        <h1>Welcome to our community</h1>
        <p id="welcome-description">
          Fuse helps developers to build organized and well coded dashboards
          full of beautiful and rich modules. Join us and start building your
          application today.
        </p>
        <div id="welcome-content">
          <div id="user-images-container">
            <Image {...user1} />
            <Image {...user2} />
            <Image {...user3} />
            <Image {...user4} />
          </div>
          <div>
            <p id="people-count">
              More than 17k people joined us, it's your turn
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
